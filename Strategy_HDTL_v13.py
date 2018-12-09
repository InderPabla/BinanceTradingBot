
from TraderStrategy import TraderStrategy as TraderStrategy
from TraderControl import TraderControl as TraderControl
from TraderPlot import TraderPlot as TraderPlot
from TraderDetail import TraderDetail as TraderDetail
import numpy as np
import math
from datetime import datetime

class Strategy (TraderStrategy):
        
    def __init__(self, tc:TraderControl):
        super().__init__(tc)
        self.className = "Strategy"
        self.strategy_name = "Strategy HDTL"
        self.tc = tc
        self.tp = TraderPlot()
        self.run = True
        self.visual_sell = False
        self.visual_buy = False
        
        self.previous_buy_index =-1
        
        self.opBuyIndices = []
        self.opSellIndices = []
        self.opLastBuyIndex = -1
        self.opLastIndexBeforeOperation = -1
        self.opIndex = 0
        
        
        
        #self.trueBTCPriceKline = self.tc.loadFromFile('Historical/BTCUSDT_1h_Binance_Numpy_Aug_7.txt.npy')
         
    '''
    ###########################################################################
    ###########################################################################
    '''
        
    def run_strategy(self,previous_buy_index=-1,opBuyIndices=[],opSellIndices=[],opLastBuyIndex=-1,opLastIndexBeforeOperation=-1,tickIndex=0):
        self.previous_buy_index = previous_buy_index
  
        self.opBuyIndices = opBuyIndices
        self.opSellIndices = opSellIndices
        self.opLastBuyIndex = opLastBuyIndex
        self.opLastIndexBeforeOperation = opLastIndexBeforeOperation
        self.opIndex = 0
        
        ops = {}
        
        hk_count = 10

        dtl = TraderDetail(self.tc.kline,
                           start_index=self.tc.start_view,
                           max_view_amount=self.tc.max_view,
                           pad_view=self.tc.pad_view,second_kline = self.tc.real_kline,len_print=True,tickIndex=tickIndex)
        hkdtl = dtl

        for i in range(0,hk_count):
            hkdtl = TraderDetail(hkdtl.HEIKIN(),
                                 start_index=self.tc.start_view,
                                 max_view_amount=self.tc.max_view,
                                 pad_view=self.tc.pad_view,tickIndex=tickIndex)
        
        #hkdtl = dtl
        dtl.strip = True
        hkdtl.strip = True
        
        ops["main_close"] = hkdtl.CLOSE(strip=True)
        ops["openTime"] = dtl.OPENTIME(strip=True)
        ops["closeTime"] = dtl.CLOSETIME(strip=True)

        s = 1
        zzlow = 2*s
        zzhigh = 6*s
        multi = 1
        
        ops["zzbuyfast"],ops["zzperbuyfast"],ops["zzimperbuyfast"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzhigh,close=False)

        
        ops["opnhks"],ops["closehks"],ops["highhks"],ops["lowhks"] = dtl.SMOOTH_HEIKIN(10,strip=True)
        ops["30sma"] = hkdtl.SMA(hkdtl.close,30*multi,strip = True)
        ops["50sma"] = hkdtl.SMA(hkdtl.close,50*multi,strip = True)
        ops["100sma"] = hkdtl.SMA(hkdtl.close,100*multi,strip = True)
  
        
        ops["volume"] = hkdtl.SMA(hkdtl.VOLUME(),34,strip=True)
        ops["trades"] = hkdtl.SMA(hkdtl.TRADES(),34,strip=True)
        
        
        ops["multi"] = ops["volume"]*ops["trades"]
  
        ops["closehk"] = hkdtl.CLOSE(strip=True)
        ops["openhk"] = hkdtl.OPEN(strip=True)
        ops["highhk"] = hkdtl.HIGH(strip=True)
        ops["lowhk"] = hkdtl.LOW(strip=True)
       
        self.default(ops,dtl)
        
        
        ops["closehkssub"] =  hkdtl.EMA(ops["closehks"]-ops["close"],20,strip=False)+ops["closehks"]
      
        
        evaled = self.define_strategy(ops) #define a custom staratgy using ops
        
        group = {'smaGroup':["30sma","50sma","100sma"]}
        
        return self.ops,self.buy_index,self.sell_index, evaled,group
        
    
   
        
    def profitPlot(self,ops,buy_index,sell_index,evaled):#risk_NORMAL,total_NORMAL,risk_LOW,total_LOW):
       pass

    def plot(self,ops,buy_index,sell_index,evaled):#risk_NORMAL,total_NORMAL,risk_LOW,total_LOW):
       pass
        

    def plot_sell(self,ops,index,size):
        pass    
 
   
    def init_variables(self,ops):
        self.zig_lowest_price = 0
        self.buy_price = 0
        self.buyCount = 0
        self.cool_down = 5
        self.cool_down_count = 0
        

    def buy(self,ops,index):
        return False
        

    
    def sell(self,ops,index,buy_index):
        return False
        
    def default(self,ops,dtl):
        ops["close"] = dtl.CLOSE(strip=True)
        ops["open"] = dtl.OPEN(strip=True)
        ops["low"] = dtl.LOW(strip=True)
        ops["high"] = dtl.HIGH(strip=True)
        ops["dim"] = [dtl.start_index,dtl.max_view]    
        ops["closetime"] = dtl.CLOSE_TIME(strip=True)    