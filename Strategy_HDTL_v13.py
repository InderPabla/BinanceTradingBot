
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
        
        smooth = 2
        
        
        ops["macd"],ops["signal"],ops["histogram"] = hkdtl.MACD(12,26,9,strip=True)
        
        ops["zzbuyfast"],ops["zzperbuyfast"],ops["zzimperbuyfast"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzhigh,close=False)

        
        ops["openhks"],ops["closehks"],ops["highhks"],ops["lowhks"] = dtl.SMOOTH_HEIKIN(10,strip=True)
        ops["30sma"] = hkdtl.SMA(hkdtl.close,30*multi,strip = True)
        ops["50sma"] = hkdtl.SMA(hkdtl.close,50*multi,strip = True)
        ops["100sma"] = hkdtl.SMA(hkdtl.close,100*multi,strip = True)
        
        ops["rsis"],ops["k_srsis"],ops["d_srsis"] = hkdtl.SRSI(3,3,14,14,strip=False)
        ops["rsi"],ops["k_srsi"],ops["d_srsi"] = hkdtl.SRSI(3,3,14,14,strip=True)
        
        
        ops["volume"] = hkdtl.SMA(hkdtl.VOLUME(),34,strip=True)
        ops["trades"] = hkdtl.SMA(hkdtl.TRADES(),34,strip=True)
        
        
        ops["multi"] = ops["volume"]*ops["trades"]
  
        ops["closehk"] = hkdtl.CLOSE(strip=True)
        ops["openhk"] = hkdtl.OPEN(strip=True)
        ops["highhk"] = hkdtl.HIGH(strip=True)
        ops["lowhk"] = hkdtl.LOW(strip=True)
       
        self.default(ops,dtl)
        
        
        ops["closehkssub"] =  hkdtl.EMA(ops["closehks"]-ops["close"],20,strip=False)+ops["closehks"]
        #ops["maxf"] = hkdtl.MWR(hkdtl.close,25,strip=True)
        ops["maxf"] = hkdtl.MWR(hkdtl.close,25,strip=True)
        ops["rsifixed"] = ((((ops["k_srsi"]/100.0) + (ops["d_srsi"]/100.0))/2.0)*(ops["rsi"]/100.0))*100.0
        ops["rsi_line"] =  hkdtl.RESOLVE(ops,self.rsi_line)
        ops["rsifixedchange"] = hkdtl.MTM(ops["rsifixed"],1,strip=False)
        
        ops["kamarsifixedchange1"] = hkdtl.CKAMA(ops["rsifixedchange"],10,2,30,strip=False)
        
        ops["rsifixedchange1"] = dtl.EMA(dtl.EMA(dtl.EMA(dtl.EMA(ops["rsifixedchange"],smooth),smooth),smooth),smooth)
        ops["rsifixedchange2"] = dtl.EMA(dtl.EMA(dtl.EMA(ops["rsifixedchange"],smooth),smooth),smooth)
        ops["rsifixedchange3"] = dtl.EMA(dtl.EMA(ops["rsifixedchange"],smooth),smooth)
        ops["rsifixedchange4"] = dtl.EMA(ops["rsifixedchange"],smooth)
        ops["rsichangedif"] = dtl.EMA(dtl.EMA(((
                 dtl.EMA((ops["rsifixedchange"]-ops["rsifixedchange1"]),smooth)
                +dtl.EMA((ops["rsifixedchange1"]-ops["rsifixedchange2"]),smooth)
                +dtl.EMA((ops["rsifixedchange2"]-ops["rsifixedchange3"]),smooth)
                +dtl.EMA((ops["rsifixedchange3"]-ops["rsifixedchange4"]),smooth)
                )/4.0 ),smooth),smooth) 
        
        
        
        ops["bbup"],ops["bbmid"],ops["bbbottom"],ops["width"],ops["bperc"]= dtl.BB(20,strip=True)
        
        ops["bbup"] = hkdtl.EMA(ops["bbup"],5)
        ops["bbup"] = hkdtl.EMA(ops["bbup"],10)
        ops["bbup"] = hkdtl.EMA(ops["bbup"],20)
        
        ops["bbmid"] = hkdtl.EMA(ops["bbmid"],5)
        ops["bbmid"] = hkdtl.EMA(ops["bbmid"],10)
        ops["bbmid"] = hkdtl.EMA(ops["bbmid"],20)
        
        ops["bbbottom"] = hkdtl.EMA(ops["bbbottom"],5)
        ops["bbbottom"] = hkdtl.EMA(ops["bbbottom"],10)
        ops["bbbottom"] = hkdtl.EMA(ops["bbbottom"],20)
        
        ops["bpercrsis"],ops["bperck_srsis"],ops["bpercd_srsis"] = hkdtl.SRSI(3,3,14,14,strip=False,data=hkdtl.EMA(hkdtl.EMA(ops["bperc"],20),20))
        
        ops["cmb_line"] =  hkdtl.RESOLVE(ops,self.cmb_line)
        ops["int_line"] =  hkdtl.RESOLVE(ops,self.int_line)
        ops["dope_line"] =  hkdtl.RESOLVE(ops,self.dope_line)
        ops["dope_line2"] =  hkdtl.RESOLVE(ops,self.dope_line2)
        
        ops["zero"] = hkdtl.FULL(0)
        ops["vclose"] = dtl.VCLOSE(strip=True)
 

        #ops["efi"] = hkdtl.EFI(20,strip=True)
        #ops["efiMTM"] = hkdtl.MTMEFI(20,1,strip=True)
        evaled = self.define_strategy(ops) #define a custom staratgy using ops
        #'rsi_line','cmb_line'
        group = {'changGroupDiff':["rsichangedif",'dope_line','dope_line2','zero'],
                 'changeGroup':['rsifixedchange','rsifixedchange1','rsifixedchange2','rsifixedchange3','rsifixedchange4','kamarsifixedchange1','dope_line','dope_line2','zero'],
                 'macdGroup':["macd","signal","histogram",'dope_line','dope_line2','zero'],
                 
                 'mainGroup':["30sma","50sma","100sma","closehk","highhk","lowhk","closehks","highhks","lowhks",'dope_line','dope_line2'], 
                 'smaGroup':["30sma","close","closehk","highhk","lowhk","closehks","highhks","lowhks","vclose",'dope_line','dope_line2'], 
                 
                 'rsiGroup':['rsi','k_srsi','d_srsi','rsifixed','dope_line','dope_line2'], 
                 'bbGroup':["bpercrsis","bpercrsis","bperck_srsis","bpercd_srsis",'dope_line','dope_line2']
                 
                 #'efiGroup':['efi','rsi_line'],
                 #'efiMTMGroup':['efiMTM','rsi_line']
                 #'maxf':['maxf','rsi_line']}
                 }
        return self.ops,self.buy_index,self.sell_index, evaled,group
        
    def dope_line(self,ops):
        
        output = []

        kamarsifixedchange1 = ops["kamarsifixedchange1"]
        bperck_srsis = ops["bperck_srsis"]
        k_srsi = ops["k_srsi"]
        rsifixedchange4 = ops["rsifixedchange4"]
        rsi = ops["rsi"]
        opentime = ops["openTime"]
       
        condition = False
        
        for i in range(1,len(k_srsi)):
        
            if(i>0):
                cond = rsi[i]>rsi[i-1] and k_srsi[i]>k_srsi[i-1] and rsifixedchange4[i]>rsifixedchange4[i-1] and k_srsi[i]<10 and (k_srsi[i-1]<1 or k_srsi[i-2]<1 or k_srsi[i-3]<1 or k_srsi[i-4]<1 or k_srsi[i-5]<1)
                if(condition==False):
                    if(cond):
                        condition = True
                        output.append(opentime[i])
                else:
                    if(not (cond)):
                        condition = False
                        
                
      
        return output
    
    def dope_line2(self,ops):
        
        output = []
        hist = ops["histogram"]
        kamarsifixedchange1 = ops["kamarsifixedchange1"]
        bperck_srsis = ops["bperck_srsis"]
        bpercd_srsis = ops["bpercd_srsis"]
        k_srsi = ops["k_srsi"]
        rsifixedchange4 = ops["rsifixedchange4"]
        rsi = ops["rsi"]
        opentime = ops["openTime"]
       
        condition = False
        
        for i in range(1,len(k_srsi)):
        
            if(i>0):
                cond = hist[i]>hist[i-1] and bpercd_srsis[i]==0.0 and bperck_srsis[i]==0.0 and rsi[i]>rsi[i-1] and k_srsi[i]>k_srsi[i-1] and rsifixedchange4[i]>rsifixedchange4[i-1] and k_srsi[i]<10 and (k_srsi[i-1]<1 or k_srsi[i-2]<1 or k_srsi[i-3]<1 or k_srsi[i-4]<1 or k_srsi[i-5]<1)
                if(condition==False):
                    if(cond):
                        condition = True
                        output.append(opentime[i])
                else:
                    if(not (cond)):
                        condition = False
                        
                
      
        return output
    
    def int_line(self,ops):
        
        output = []
        bpercrsis = ops["bpercrsis"]
        rsi = ops["rsi"]
        rsifixedchange1 = ops["rsifixedchange1"]
        kamarsifixedchange1 = ops["kamarsifixedchange1"]
        opentime = ops["openTime"]
        condition = False
        for i in range(1,len(bpercrsis)):
            if(i>0):
                if(condition==False):
                    if(kamarsifixedchange1[i]<rsifixedchange1[i] and rsifixedchange1[i]>rsifixedchange1[i-1] and bpercrsis[i]>bpercrsis[i-1] and rsi[i]>rsi[i-1]):
                        condition = True
                        output.append(opentime[i])
                else:
                    if(not (kamarsifixedchange1[i]<rsifixedchange1[i] and rsifixedchange1[i]>rsifixedchange1[i-1] and bpercrsis[i]>bpercrsis[i-1]  and rsi[i]>rsi[i-1])):    
                        condition = False
                        #output.append(opentime[i])
                
        return output
    
    def cmb_line(self,ops):
        
        output = []
        bperck_srsis = ops["bperck_srsis"]
        d_srsi = ops["k_srsi"]
        opentime = ops["openTime"]
       
        condition = False
        
        for i in range(1,len(d_srsi)):
            if(i>0):
                if(condition==False):
                    if(bperck_srsis[i]>0 and bperck_srsis[i-1]==0.0):
                        #condition = True
                        output.append(opentime[i])
                
        
        '''
        for i in range(1,len(d_srsi)):
            if(i>0):
                if(condition==False):
                    if(bperck_srsis[i]==0 and d_srsi[i]==0):
                        condition = True
                        output.append(opentime[i])
                else:
                    if(not (bperck_srsis[i]==0 and d_srsi[i]==0)):    
                        condition = False
                        #output.append(opentime[i])
        '''        
        return output
    
    def rsi_line(self,ops):
        
        output = []
        rsi = ops["rsi"]
        d_srsi = ops["d_srsi"]
        opentime = ops["openTime"]
        condition = False
        for i in range(1,len(d_srsi)):
            if(i>0):
                if(condition==False):
                    if(d_srsi[i] == 0.0 or (d_srsi[i]<1 and d_srsi[i]<d_srsi[i-1]) ):
                        condition = True
                        #output.append(opentime[i])
                else:
                    if(d_srsi[i]>d_srsi[i-1] and rsi[i]<20 and rsi[i]>rsi[i-1]):    
                        condition = False
                        output.append(opentime[i])
                
        return output
                
        
        
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
        '''
        if(ops["closehk"][index]==ops["highhk"][index] 
        and ops["closehk"][index]>ops["closehk"][index-1]
        and ops["closehk"][index-1]==ops["highhk"][index-1]):
            return True
        '''
        
        
        return False
        if(ops["k_srsi"][index] == 100  or (ops["k_srsi"][index]>ops["k_srsi"][index-1] and ops["k_srsi"][index]>50)):
            return True
        return False
        

    
    def sell(self,ops,index,buy_index):
        '''
        if(ops["closehk"][index]<ops["closehk"][index-1]):
            return True
        '''
        
        return False
        if(not (ops["k_srsi"][index] == 100  or (ops["k_srsi"][index]>ops["k_srsi"][index-1] and ops["k_srsi"][index]>50))):
            return True
        return False
        
    def default(self,ops,dtl):
        ops["close"] = dtl.CLOSE(strip=True)
        ops["open"] = dtl.OPEN(strip=True)
        ops["low"] = dtl.LOW(strip=True)
        ops["high"] = dtl.HIGH(strip=True)
        ops["dim"] = [dtl.start_index,dtl.max_view]    
        ops["closetime"] = dtl.CLOSE_TIME(strip=True)    