from binance.client import Client
import numpy as np

class TraderBinance:
    
    TIME_INDEX = 0;
    OPEN_INDEX = 1;
    HIGH_INDEX = 2;
    LOW_INDEX = 3;
    CLOSE_INDEX = 4;
    VOLUME_INDEX = 5;
    CLOSE_TIME_INDEX = 6;
    ASSET_VOLUME_INDEX = 7;
    TRADES_INDEX = 8;
    BUY_BASE_VOLUME_INDEX = 9;
    BUY_ASSETS_VOLUME_INDEX = 10;
    IGNORED_INDEX = 11;
    
    TIME_KEY = "time";
    OPEN_KEY = "open";
    HIGH_KEY = "high";
    LOW_KEY = "low";
    CLOSE_KEY = "close";
    VOLUME_KEY = "volume";
    CLOSE_TIME_KEY = "closeTime";
    ASSET_VOLUME_KEY = "assetVolume";
    TRADES_KEY = "trades";
    BUY_BASE_VOLUME_KEY = "buyBaseVolume";
    BUY_ASSETS_VOLUME_KEY = "buyAssetVolume";
    IGNORED_KEY = "ignored";
    
    LENGTH = 12
    
    TIME_OPTION = {
        "1m":Client.KLINE_INTERVAL_1MINUTE,
        "3m":Client.KLINE_INTERVAL_3MINUTE,
        "5m":Client.KLINE_INTERVAL_5MINUTE,
        "15m":Client.KLINE_INTERVAL_15MINUTE,
        "30m":Client.KLINE_INTERVAL_30MINUTE,
        "1h":Client.KLINE_INTERVAL_1HOUR,
        "2h":Client.KLINE_INTERVAL_2HOUR,
        "4h":Client.KLINE_INTERVAL_4HOUR,
        "6h":Client.KLINE_INTERVAL_6HOUR,
        "8h":Client.KLINE_INTERVAL_8HOUR,
        "12h":Client.KLINE_INTERVAL_12HOUR,
        "1d":Client.KLINE_INTERVAL_1DAY,
        "3d":Client.KLINE_INTERVAL_3DAY,
        "1w":Client.KLINE_INTERVAL_1WEEK   
    }
    
    def __init__(self,api_key,secret_key):
        self.className = "TraderBinance"
        self.client = Client(api_key, secret_key)
    
    def historial(self,time,pair,start_date):
        ticks = self.client.get_historical_klines(pair,self.TIME_OPTION[time],start_date)
        #print (len(ticks))
        return np.array(self.array_string_to_float(ticks))
     
    def current_ticker(self,pair=""):
        self.client.get_ticker()
    def get_candles(self,time="",pair=""):
        time_frame = self.binance_time(time)
        ticks = self.client.get_klines(symbol=pair, interval=time_frame)
        return np.array(self.array_string_to_float(ticks))
    
    def get_current_server_time(self):
        server_time = self.client.get_server_time()
        return server_time["serverTime"]
    
    def binance_time(self,time):
        return self.TIME_OPTION[time]
    
    def array_string_to_float(self,array):
        for i in range(0,len(array)):
            for j in range(0,self.LENGTH): 
                if(type(array[i][j])==str):
                    array[i][j] =  float(array[i][j]);
        return array
    
    def candles_to_dict(self,candles):
        candles_dict = []
        for i in range(0,len(candles)):
            candles_dict_row = {}
            candles_dict_row[self.TIME_KEY] = candles[i][self.TIME_INDEX]
            candles_dict_row[self.OPEN_KEY] = candles[i][self.OPEN_INDEX]
            candles_dict_row[self.HIGH_KEY] = candles[i][self.HIGH_INDEX]
            candles_dict_row[self.LOW_KEY] = candles[i][self.LOW_INDEX]
            candles_dict_row[self.CLOSE_KEY] = candles[i][self.CLOSE_INDEX]
            candles_dict_row[self.VOLUME_KEY] = candles[i][self.VOLUME_INDEX]
            candles_dict_row[self.CLOSE_TIME_KEY] = candles[i][self.CLOSE_TIME_INDEX]
            candles_dict_row[self.ASSET_VOLUME_KEY] = candles[i][self.ASSET_VOLUME_INDEX]
            candles_dict_row[self.TRADES_KEY] = candles[i][self.TRADES_INDEX]
            candles_dict_row[self.BUY_BASE_VOLUME_KEY] = candles[i][self.BUY_BASE_VOLUME_INDEX]
            candles_dict_row[self.BUY_ASSETS_VOLUME_KEY] = candles[i][self.BUY_ASSETS_VOLUME_INDEX]
            candles_dict_row[self.IGNORED_KEY] = candles[i][self.IGNORED_INDEX]
            candles_dict.append(candles_dict_row)
        return candles_dict
        
        
        
        