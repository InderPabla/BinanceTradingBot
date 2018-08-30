

from TraderBinance import TraderBinance as TraderBinance

import matplotlib.pyplot as plt
import pandas as pd
import json as json
import numpy as np
import requests as req
from threading import Timer
from datetime import datetime
import threading
import time

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
    
    def __init__(self,config,filePath):
        
        self.className = "TraderControl"
        self.config = config
        self.filePath = filePath
        self.config_data = json.load(open(config))

        self.config_data[self.KEY_KEY] = json.load(open(self.config_data[self.KEY_KEY_BASE]))[self.KEY_KEY]
        
        self.secret_key = self.get_secret_key()
        self.api_key = self.get_api_key()
        
        self.currency_amount = self.get_currency_amount()
        self.asset_price = self.get_asset_price()
        
        self.asset_amount = self.currency_amount/self.asset_price
        print("Asset Price in Dollars",self.asset_price,self.asset_amount,self.currency_amount)
        
        self.pair = self.get_pair()
        self.time = self.get_time_frame()
        
        self.tb = TraderBinance(self.secret_key,self.api_key)
        
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
        
        self.server_time = 0
        self.api_call_count = 0
        self.max_api_call_count = 100
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
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
    # HISTORIAL DATA + NEW DATA IS VERY IMPORTANT!!!!!!!!!!!!!!!!!!!
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
            print(import_string)
            strategy = self.custom_import(import_string)    
            strategy_object = strategy(self)
            self.strategies.append(strategy_object)

    def timed_sleeper(self,tm,offset,part,closetime):
        if(tm == 0 or tm<0):
            print("Running In OFFSET:",offset) 
            time.sleep(offset)
            self.run_strategies()
        else:
            self.server_time = self.tb.get_current_server_time()/1000
            difference = closetime-self.server_time
            if(difference<=0):
                self.timed_sleeper(0,offset,part,closetime)
            else:
                if(difference>=part):
                    print("Difference",difference,"Sleeping",part)
                    time.sleep(part)
                    self.timed_sleeper(1,offset,part,closetime)
                else:
                    print("Difference",difference,"Sleeping",difference)
                    time.sleep(difference)
                    self.timed_sleeper(1,offset,part,closetime)
        '''
        if(tm==0):
            print("Running In OFFSET:",offset) 
            time.sleep(offset)
            self.run_strategies()
        else:
            newTm = -1
            sleepVal = -1
            
            if(tm>0):
                if(tm>part):
                    sleepVal = part
                    newTm = tm-part
                elif(tm<part):
                    newTm  =0
                    sleepVal = tm
                else:
                    newTm = 0
                    sleepVal = part
                print("New Time",newTm,"Sleeping",sleepVal) 
                time.sleep(sleepVal)
                self.timed_sleeper(newTm,offset,part)
            
            else:
                self.timed_sleeper(0,offset,part)    
                
            '''    
            
            
            
          
                       
    def run_strategies(self):
        self.api_call_count = self.api_call_count +1
        if(self.api_call_count>self.max_api_call_count):
            return
        print("===================OPENING=====================")
        self.initilize_strategies()
        self.get_kline_candles()
        
        if(self.isAppend == True or self.isFileLoad==False):
            
            self.server_time = self.tb.get_current_server_time()/1000
            latest_open_time = self.real_kline[len(self.real_kline)-1][self.tb.TIME_INDEX]/1000#ops["openTime"][len(ops["openTime"])-1]/1000
            latest_close_time = self.real_kline[len(self.real_kline)-1][self.tb.CLOSE_TIME_INDEX]/1000#ops["closeTime"][len(ops["closeTime"])-1]/1000
            difference_time = latest_close_time-self.server_time
            look_back_action_index = 2 if(difference_time>0) else 1
           
            if(difference_time<0):
                print("DIFF LESS THAN 0",difference_time)
                time.sleep(1)
                print("===================CLOSING=====================")
                self.run_strategies()
                return
            
            
            ops,buy_index,sell_index = self.strategies[0].run_strategy()
            
            
            
            
            print("========================================")
            #print(self.real_kline[len(self.real_kline)-1])
            print("Opentime:",datetime.fromtimestamp(latest_open_time).isoformat(' '),"Closetime:",datetime.fromtimestamp(latest_close_time).isoformat(' '))
            print("Servertime:",datetime.fromtimestamp(self.server_time).isoformat(' '))
            print("Differencetime(s):",difference_time)
            
            
            if(len(buy_index)>0):
                if(len(sell_index)==len(buy_index)):
                    print("===BUY ORDER===")
                    if(sell_index[len(sell_index)-1]==(len(ops["close"])-look_back_action_index)):
                        print("CORRECT [BUY] ORDER COMMING THROUGH")
                    else:
                        print("PREVIOUS [SELL] ORDER: WAITING FOR BUY. Previous Sell Price Was: ",str(ops["close"][sell_index[len(sell_index)-1]]))
                    
                else:
                    print("===SELL ORDER===")    
                    if(buy_index[len(buy_index)-1]==(len(ops["close"])-look_back_action_index)):
                        print("CORRECT [SELL] ORDER COMMING THROUGH")
                    else:
                        print("PREVIOUS [BUY] ORDER: WAITING FOR SELL. Previous Buy Price Was: ",str(ops["close"][buy_index[len(buy_index)-1]]))
                        
            else:
                print("NO BUY AND SELL ORDERS")
            
            '''
            if(len(buy_index)>0 and len(sell_index)>0):
                print()
            '''   
            
            
            print("===================CLOSING=====================")    
            print("=================SLEEP START===================")
            self.timed_sleeper(difference_time,1,30,latest_close_time)
            #threading.Timer(difference_time, self.run_strategies).start()
            
        else:
            print('NO TRADES FOUND!!!!!!!!!')
            '''
            for i in range(0,len(self.strategies)):
                self.strategies[0].run_strategy()
            '''
        
        
        
    def historical(self,time,pair,start_date):
        return self.tb.historial(time,pair,start_date)
        
    def loadFromFile(self,fileName):
        return np.load(fileName)    
    
    def get_kline_candles(self,use_config=True,pair="",time=""):
        self.kline = []
        if(self.isFileLoad==False):
            if use_config == True:
                pair = self.pair
                time = self.time
                self.kline = self.tb.get_candles(pair=self.pair,time=self.time)
            else:
                self.kline = self.tb.get_candles(pair=pair,time=time)
        else:
            self.kline = np.load(self.file)
 
        if(self.isAppend==True):
            if use_config == True:
                pair = self.pair
                time = self.time
                self.real_kline = self.tb.get_candles(pair=self.pair,time=self.time)
            else:
                self.real_kline = self.tb.get_candles(pair=pair,time=time)
                
        return self.kline
        
    def get_secret_key(self):
        return self.config_data[self.KEY_KEY][self.KEY_SEC]
    
    def get_api_key(self):
        return self.config_data[self.KEY_KEY][self.KEY_API]
    
    def get_asset_price(self):
        response =req.get("https://min-api.cryptocompare.com/data/price?fsym="+self.get_symbol_asset()+"&tsyms="+self.get_symbol_currency())
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


 

