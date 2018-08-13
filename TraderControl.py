

from TraderBinance import TraderBinance as TraderBinance

import matplotlib.pyplot as plt
import pandas as pd
import json as json
import numpy as np
import requests as req

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
        
        self.pair = self.get_pair()
        self.time = self.get_time_frame()
        
        self.tb = TraderBinance(self.secret_key,self.api_key)
        
        self.strategies = []

        self.initilize_strategies()
        
        self.isFileLoad = self.config_data[self.KEY_FILE_LOAD]
        self.file = self.config_data[self.KEY_FILE]
        
        self.kline = []
        self.start_view = self.config_data[self.KEY_VIEW][self.KEY_START]
        self.max_view = self.config_data[self.KEY_VIEW][self.KEY_MAX]
        self.pad_view = self.config_data[self.KEY_VIEW][self.KEY_PAD]
        
        self.get_kline_candles()
        
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
    def initilize_strategies(self):
        import_strategies = self.get_strategies()
        for i in range(0,len(import_strategies)):
            import_string = self.config_data[self.KEY_STRA_BASE]+import_strategies[i]+'.Strategy'
            print(import_string)
            strategy = self.custom_import(import_string)    
            strategy_object = strategy(self)
            self.strategies.append(strategy_object)
            
    def run_strategies(self):
        for i in range(0,len(self.strategies)):
            self.strategies[0].run_strategy()
            
    
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


 

