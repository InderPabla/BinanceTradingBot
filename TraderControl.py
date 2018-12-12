

from TraderBinance import TraderBinance as TraderBinance

import matplotlib.pyplot as plt
import pandas as pd
import json as json
import numpy as np
import requests as req

from datetime import datetime


import time
from colorama import Fore, Style, Back, init
init(convert=True)
import sys
import signal
import threading
from threading import Timer



def pin(foreColor):
        return Style.BRIGHT+foreColor

    
def rst():
        return Fore.WHITE+Style.BRIGHT+Back.RESET
    
class TraderControl:
    KEY_KEY = 'key'
    KEY_KEY_BASE = 'key_base'
    KEY_BASE = 'base'
    KEY_ASSET = 'asset'
    KEY_AMOUNT = 'amount'
    KEY_API = 'api'
    KEY_SEC = 'secret'
    KEY_CUR = 'currency'
    KEY_TIME = 'time'
    KEY_STRA = 'strategy'
    KEY_STRA_BASE = 'strategy_base'
    KEY_FILE_LOAD = 'is_file_load'
    KEY_FILE = 'file'
    KEY_VIEW = 'view'
    KEY_MAX = 'max'
    KEY_START = 'start'
    KEY_PAD = 'pad'
    KEY_APPEND = 'is_append'
    KEY_PLOT = 'plot'
    KEY_IS_PROFIT_PLOT = 'profitPlot'
    
    def __init__(self,config,filePath,override=None,ignoreInit=False,debugVal=-1,asset_price=-1):
        self.debugVal = debugVal
        
        self.className = "TraderControl"
        self.config = config
        self.filePath = filePath
        self.config_data = json.load(open(config))
        self.config_data[self.KEY_KEY] = json.load(open(self.config_data[self.KEY_KEY_BASE]))[self.KEY_KEY]
        self.secret_key = self.get_secret_key()
        self.api_key = self.get_api_key()
        self.tb = TraderBinance(self.secret_key,self.api_key)
        self.asset_price = asset_price
        
        if(ignoreInit==False):    
           
            
            
            
            if(not (override is None)):
                self.config_data[self.KEY_BASE]  = override[self.KEY_BASE]
                self.config_data[self.KEY_ASSET] = override[self.KEY_ASSET]
                self.config_data[self.KEY_TIME]  = override[self.KEY_TIME]
                self.config_data[self.KEY_FILE]  = override[self.KEY_FILE]
                self.config_data[self.KEY_STRA]  = [override[self.KEY_STRA]]
             
            self.currency_amount = self.get_currency_amount()
            if(self.asset_price == -1):
                self.asset_price = self.get_asset_price()
            
            self.asset_amount = self.currency_amount/self.asset_price
            print(pin(Fore.YELLOW)+"=====>"+pin(Fore.RED)+"Asset Price in Dollars",self.asset_price,self.asset_amount,str(self.currency_amount),"Base:",self.config_data[self.KEY_BASE],"Asset",self.config_data[self.KEY_ASSET]+rst())
            
            self.pair = self.get_pair()
            self.time = self.get_time_frame()
            
            
            
            self.strategies = []
            
            self.isFileLoad = self.config_data[self.KEY_FILE_LOAD]
            self.isAppend = self.config_data[self.KEY_APPEND]
            
            
            self.file = self.config_data[self.KEY_FILE]
         
            
            self.kline = []
            self.real_kline  = []
            
            self.start_view = self.config_data[self.KEY_VIEW][self.KEY_START]
            self.max_view = self.config_data[self.KEY_VIEW][self.KEY_MAX]
            self.pad_view = self.config_data[self.KEY_VIEW][self.KEY_PAD]
            
            self.isPlot = self.config_data[self.KEY_VIEW][self.KEY_PLOT]=="true"
            self.isProfitPlot = self.config_data[self.KEY_VIEW][self.KEY_IS_PROFIT_PLOT]=="true"
            
            self.server_time = 0
            self.api_call_count = 0
            self.max_api_call_count = 100
            self.itteration_count = 0 
            self.waitThread = None;
    
            '''
            if(not self.config==None):
           
                
            else:
                self.loaded_kline = []
                loaded_json = json.load(open(filePath))
                for i in range(0,len(loaded_json)):
                    data = loaded_json[i]       
                    self.loaded_kline.append([data["date"],data["open"],data["high"],
                                              data["low"],data["close"],data["volume"],
                                              data["quoteVolume"],data["weightedAverage"],
                                              0,0,0,0])
                self.loaded_kline = np.array(self.loaded_kline)
            '''
    
    def get_tickers(self):
        return self.tb.get_tickers()
    
    def get_recent_candle(self,use_config=True,pair=""):
        if use_config == True:
            pair = self.pair
            return self.tb.current_ticker(pair)
        else:
            return self.tb.current_ticker(pair)
                
    def initilize_strategies(self):
        self.kline = []
        self.real_kline  = []
        
        self.strategies = []
        import_strategies = self.get_strategies()
        for i in range(0,len(import_strategies)):
            import_string = self.config_data[self.KEY_STRA_BASE]+import_strategies[i]+'.Strategy'
            print(pin(Fore.RED)+"=====>"+pin(Fore.YELLOW)+import_string+rst())
            strategy = self.custom_import(import_string)    
            strategy_object = strategy(self)
            self.strategies.append(strategy_object)

    def timed_sleeper(self,tm,offset,part,closetime,req=0,previous_buy_index=-1):
        if(tm == 0 or tm<0):
            sys.stdout.write("\r" + "OFFSET (s): "+str(offset)+"\n")
            sys.stdout.flush()
            time.sleep(offset)
            self.run_strategies(previous_buy_index=previous_buy_index)
        else:
            self.server_time = self.tb.get_current_server_time()/1000
            difference = closetime-self.server_time
            if(difference<=0):
                self.timed_sleeper(0,offset,part,closetime,previous_buy_index=previous_buy_index)
            else:
                if(difference>=part):
                    sys.stdout.write("\r" + "Next Candle Open(s): "+str(difference))
                    sys.stdout.flush()
                    time.sleep(part)
                    self.timed_sleeper(1,offset,part,closetime,previous_buy_index=previous_buy_index)
                else:
                    sys.stdout.write("\r" + "Next Candle Open(s): "+str(difference))
                    sys.stdout.flush()
                    time.sleep(difference)
                    self.timed_sleeper(1,offset,part,closetime,previous_buy_index=previous_buy_index)

        '''
        self.waitThread = None
        if(tm == 0 or tm<0):
            print("Running In OFFSET:",offset) 
            self.waitThread = Timer(offset, self.run_strategies)
            self.waitThread.isDaemon = True
            self.waitThread.start()
        else:
            self.server_time = self.tb.get_current_server_time()/1000
            difference = closetime-self.server_time
            if(difference<=0):
                self.timed_sleeper(0,offset,part,closetime)
            else:
                if(difference>=part):
                    print("Difference",difference,"Sleeping",part)
                    self.waitThread = Timer(part, self.timed_sleeper,(1,offset,part,closetime))
                    self.waitThread.isDaemon = True
                    self.waitThread.start()
                else:
                    print("Difference",difference,"Sleeping",difference)
                    self.waitThread = Timer(difference, self.timed_sleeper,(1,offset,part,closetime))
                    self.waitThread.isDaemon = True
                    self.waitThread.start()
        '''

    def signal_handler(self,sig, frame):
        #print('You pressed Ctrl+C!')
        if(self.waitThread is not None):
            self.waitThread.cancel()
            self.waitThread = None
        sys.exit(0)
    

    def test_run_strategy(self,lastCloseTime=-1,lastBuyIndex=-1,opBuyIndices=[],opSellIndices=[],opLastBuyIndex=-1,opLastIndexBeforeOperation=-1,tickIndex=0):
        print("-------------TEST RUN PARAMS------------")
        print("lastCloseTime",lastCloseTime,"lastBuyIndex",lastBuyIndex,"opLastBuyIndex",opLastBuyIndex,"opLastIndexBeforeOperation",opLastIndexBeforeOperation)
        print("opBuyIndices",opBuyIndices)
        print("opSellIndices",opSellIndices)
        print("----------------------------------------")
        self.initilize_strategies()
        self.get_kline_candles(lastCloseTime=lastCloseTime)
        if(lastBuyIndex>-1):
            lastBuyIndex = lastBuyIndex - 1

        return self.strategies[0].run_strategy(previous_buy_index=lastBuyIndex,opLastBuyIndex=opLastBuyIndex,opLastIndexBeforeOperation=opLastIndexBeforeOperation,opSellIndices=opSellIndices,opBuyIndices=opBuyIndices,tickIndex=tickIndex)
        
        
    def run_strategies(self,previous_buy_index=-1):
        '''
        if(self.api_call_count == 0):
            signal.signal(signal.SIGINT, self.signal_handler)
            #print('Press Ctrl+C To Exist') 
        '''
          
        self.api_call_count = self.api_call_count +1
        if(self.api_call_count>self.max_api_call_count):
            return
        print(pin(Fore.GREEN)+"OPEN:"+rst())
        self.initilize_strategies()
        self.get_kline_candles()
        
        if(self.isAppend == True or self.isFileLoad==False):
            
            self.server_time = self.tb.get_current_server_time()/1000
            latest_open_time = self.real_kline[len(self.real_kline)-1][self.tb.TIME_INDEX]/1000#ops["openTime"][len(ops["openTime"])-1]/1000
            latest_close_time = self.real_kline[len(self.real_kline)-1][self.tb.CLOSE_TIME_INDEX]/1000#ops["closeTime"][len(ops["closeTime"])-1]/1000
            difference_time = latest_close_time-self.server_time
            look_back_action_index = 2 if(difference_time>0) else 1
           
            if(difference_time<0):
                print(pin(Fore.RED)+"=====>"+pin(Fore.RED)+"DIFF LESS THAN 0:",difference_time)
                time.sleep(1)
                print(pin(Fore.GREEN)+"CLOSE:"+rst())
                self.run_strategies(previous_buy_index=previous_buy_index)
                return
            
            
            ops,buy_index,sell_index,evaled = self.strategies[0].run_strategy(previous_buy_index=previous_buy_index)
            last_active_index = len(ops["close"])-look_back_action_index
            num_of_sells = len(sell_index)
            num_of_buys = len(buy_index)
            last_sell_index = sell_index[num_of_sells-1]
            last_buy_index = buy_index[num_of_buys-1]

            print(pin(Fore.GREEN)+"=====>"+pin(Fore.WHITE)+"Opentime:",datetime.fromtimestamp(latest_open_time).isoformat(' '),"Closetime:",datetime.fromtimestamp(latest_close_time).isoformat(' '))
            print(pin(Fore.GREEN)+"=====>"+pin(Fore.WHITE)+"Servertime:",datetime.fromtimestamp(self.server_time).isoformat(' '))
            print(pin(Fore.GREEN)+"=====>"+pin(Fore.WHITE)+"Differencetime(s):",difference_time)
            
            
            if(num_of_buys>=5):
                if(num_of_sells==num_of_buys):
                    previous_buy_index = -1
                    if(last_sell_index==last_active_index):
                        print(pin(Fore.RED)+">>>>> CURRENT ACTION: [SELL NOW] <<<<<"+rst())
                        
                    else:
                        print(pin(Fore.RED)+">>>>> CURRENT ACTION: ["+pin(Fore.GREEN)+"WAIT FOR BUY"+pin(Fore.RED)+"] <<<<<"+rst())

                else:
                    if(previous_buy_index==-1):
                        previous_buy_index = last_buy_index

                    if(last_buy_index==last_active_index):
                        print(pin(Fore.GREEN)+">>>>> CURRENT ACTION: [BUY NOW] <<<<<"+rst())
                    else:
                        print(pin(Fore.GREEN)+">>>>> CURRENT ACTION: ["+pin(Fore.RED)+"WAIT FOR SELL"+pin(Fore.GREEN)+"] <<<<<"+rst())
                        
                    
                    print(pin(Fore.GREEN)+">>>>> "+pin(Fore.YELLOW)+"Most Recent Buy Index: "+str((previous_buy_index))+rst())
                    previous_buy_index = previous_buy_index-1
                '''

                if(len(sell_index)==len(buy_index)):
                    print("    ","===BUY ORDER===")
                    if(sell_index[len(sell_index)-1]==last_active_index):
                        print("    ","CORRECT [BUY] ORDER COMMING THROUGH")
                    else:
                        print("    ","PREVIOUS [SELL] ORDER: WAITING FOR BUY. Previous Sell Price Was: ",str(ops["close"][sell_index[len(sell_index)-1]]))
                    
                else:
                    print("    ","===SELL ORDER===")    
                    if(buy_index[len(buy_index)-1]==last_active_index):
                        print("    ","CORRECT [SELL] ORDER COMMING THROUGH")
                    else:
                        print("    ","PREVIOUS [BUY] ORDER: WAITING FOR SELL. Previous Buy Price Was: ",str(ops["close"][buy_index[len(buy_index)-1]]))
                 '''
                 
            else:
                sys.exit(self.pair+" has too few orders. It is recommended this pair not be used. To override this logic change [forced_min_buy_stop] to false in configuration file.")

            
            print(pin(Fore.GREEN)+"CLOSE:"+rst())    
            #print("=================SLEEP START===================")
            self.timed_sleeper(difference_time,1,5,latest_close_time,previous_buy_index=previous_buy_index)
            #threading.Timer(difference_time, self.run_strategies).start()
            
        else:
            sys.exit(self.pair+" has no trades. It is recommended this pair not be used. To override this logic change [forced_min_buy_stop] to false in configuration file.")
        
        
        
    def historical(self,time,pair,start_date):
        return self.tb.historial(time,pair,start_date)
        
    def loadFromFile(self,fileName):
        return np.load(fileName)    
    
    def get_kline_candles(self,use_config=True,pair="",time="",lastCloseTime=-1):
        self.kline = []
        if(self.isFileLoad==False):
            if use_config == True:
                pair = self.pair
                time = self.time
                self.kline = self.tb.get_candles(pair=self.pair,time=self.time,lastCloseTime=lastCloseTime)
            else:
                self.kline = self.tb.get_candles(pair=pair,time=time,lastCloseTime=lastCloseTime)
        else:
            self.kline = np.load(self.file)
 
        if(self.isAppend==True and self.debugVal==-1):
            if use_config == True:
                pair = self.pair
                time = self.time
                self.real_kline = self.tb.get_candles(pair=self.pair,time=self.time,lastCloseTime=lastCloseTime)
            else:
                self.real_kline = self.tb.get_candles(pair=pair,time=time,lastCloseTime=lastCloseTime)
        else:
            self.real_kline= []
            
        if(self.debugVal>-1):   
            self.real_kline = []
            #print(self.debugVal,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            self.kline = self.kline[0:(len(self.kline)-450)+self.debugVal]
            
        return self.kline
            
    def get_secret_key(self):
        return self.config_data[self.KEY_KEY][self.KEY_SEC]
    
    def get_api_key(self):
        return self.config_data[self.KEY_KEY][self.KEY_API]
    
    def get_asset_price(self):
        query = "https://min-api.cryptocompare.com/data/price?fsym="+self.get_symbol_asset()+"&tsyms="+self.get_symbol_currency()
        print(query)
        response =req.get(query)
        
        return json.loads(response.text)[self.get_symbol_currency()]
            
    def get_symbol_asset(self):
        return self.config_data[self.KEY_ASSET]

    def get_symbol_currency(self):
        return self.config_data[self.KEY_CUR]
    
    def get_currency_amount(self):
        return self.config_data[self.KEY_AMOUNT]
    
    def get_time_frame(self):
        return self.config_data[self.KEY_TIME]
    
    def get_pair(self):
        return self.config_data[self.KEY_BASE]+self.config_data[self.KEY_ASSET]
    
    def get_strategies(self):
        return self.config_data[self.KEY_STRA]
    
    def get_asset_amount(self):
        return self.asset_amount
    
    def custom_import(self,name):
        components = name.split('.')
        mod = __import__(components[0])
        for comp in components[1:]:
            mod = getattr(mod, comp)
        return mod


 

