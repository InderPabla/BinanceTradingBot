
from TraderStrategy import TraderStrategy as TraderStrategy
from TraderControl import TraderControl as TraderControl
from TraderPlot import TraderPlot as TraderPlot
from TraderDetail import TraderDetail as TraderDetail
import numpy as np

class Strategy (TraderStrategy):
        
    def __init__(self, tc:TraderControl):
        super().__init__(tc)
        self.className = "Strategy"
        self.strategy_name = "Strategy ZigZag"
        self.tc = tc
        self.tp = TraderPlot()
        self.run = True
    
    '''
    ###########################################################################
    ###########################################################################
    '''
        
    def run_strategy(self):
        ops = {}
        
        hk_count = 5
        
        dtl = TraderDetail(self.tc.kline,
                           start_index=self.tc.start_view,
                           max_view_amount=self.tc.max_view,
                           pad_view=self.tc.pad_view)
        hkdtl = dtl

        for i in range(0,hk_count):
            hkdtl = TraderDetail(hkdtl.HEIKIN(),
                                 start_index=self.tc.start_view,
                                 max_view_amount=self.tc.max_view,
                                 pad_view=self.tc.pad_view)
        
        
        
        #hkdtl = dtl
        dtl.strip = True
        hkdtl.strip = True
        
        ops["main_close"] = hkdtl.CLOSE(strip=True)
        ops["pp_ema8"] = hkdtl.EMA(hkdtl.close,8,strip=True)
        ops["pp_ema15"] = hkdtl.EMA(hkdtl.close,15,strip=True)
        ops["pp_ema34"] = hkdtl.EMA(hkdtl.close,32,strip=True)
        ops["pp_ema50"] = hkdtl.EMA(hkdtl.close,50,strip=True)
        ops["pp_ema64"] = hkdtl.EMA(hkdtl.close,64,strip=True)
        ops["pp_add"] = (ops["pp_ema8"]+ops["pp_ema15"]+ops["pp_ema34"]+ops["pp_ema50"]+ops["pp_ema64"])/5.0
        
        ops["pp_kama1"] = hkdtl.KAMA(10,2,30,strip=True)
        ops["pp_kama2"] = hkdtl.KAMA(12,2,50,strip=True)
        ops["pp_kama3"] = hkdtl.KAMA(14,3,60,strip=True)
        ops["pp_kama4"] = hkdtl.KAMA(16,3,70,strip=True)
        ops["pp_kama5"] = hkdtl.KAMA(18,4,80,strip=True)
        ops["pp_kama6"] = hkdtl.KAMA(20,4,90,strip=True)
        
        #ops["pp_kama"] = hkdtl.KAMA(10,2,30,strip=True)
        #ops["pp_kama"] = hkdtl.KAMA(34,15,34,strip=True)
        
        ops["zzbuy"],ops["zzperbuy"],ops["zzimperbuy"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,2,6)
        #ops["zzsell"],ops["zzpersell"],ops["zzimpersell"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,1,3)
        #ops["zzbuy"],ops["zzperbuy"],ops["zzimperbuy"],obsLow,obsHigh = hkdtl.AZIGZAG(hkdtl.start_index,hkdtl.max_view,2,6,1.1,20,6)
        #ops["zzsell"],ops["zzpersell"],ops["zzimpersell"],obsLow,obsHigh = hkdtl.AZIGZAG(hkdtl.start_index,hkdtl.max_view,6,2,1.1,40,6)
        
        ops["rsi"],ops["k_srsi"],ops["d_srsi"] = hkdtl.SRSI(3,3,14,14,strip=True)
        
        ops["atrrsi"] = hkdtl.EMA(hkdtl.RSI(20,data=hkdtl.ATR(14))/100.0,10,strip=True)
        ops["stdrsi"] = hkdtl.EMA(hkdtl.RSI(20,data=hkdtl.STDEV(hkdtl.close,14))/100.0,10,strip=True)
        ops["std"] = hkdtl.STDEV(hkdtl.close,10)
        ops["1_mtm"] = hkdtl.MTM(hkdtl.STDEV(hkdtl.ATR(20),10),10,strip=True)
        ops["2_mtm"] = hkdtl.STDEV(hkdtl.ATR(14),14,strip=True)
        ops["5_atr"] = hkdtl.ATR(14,strip=True)

        ops["b_std"] = hkdtl.STDEV(hkdtl.close,14,strip=True)
        ops["c_std"] = hkdtl.STDEV(hkdtl.TR(12),14,strip=True)
        ops["d_std"] = hkdtl.STDEV(hkdtl.close,14,strip=True)
        
        ops["pp_up"],ops["pp_mid"],ops["pp_low"],ops["4_wid"],ops["3_bpc"] = hkdtl.BB(20,strip=True)

        ops["main_dtlclose"] = dtl.CLOSE(strip=True)
        
        ops["closehk"] = hkdtl.CLOSE(strip=True)
        ops["close"] = dtl.CLOSE(strip=True)
        ops["low"] = dtl.LOW(strip=True)
        ops["high"] = dtl.HIGH(strip=True)
        
        
        ops = dtl.normalize_view(ops)

        #self.custom_plot(ops)
        self.define_strategy(ops) #define a custom staratgy using ops
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def plot(self,ops,buy_index,sell_index):
        self.tp.fig()

        self.tp.plot_check_previous(ops['main_dtlclose'],'black','black')
        self.tp.plot_check_previous(ops['pp_kama1'],'blue','orange')
        self.tp.plot_check_previous(ops['pp_kama2'],'blue','orange')
        self.tp.plot_check_previous(ops['pp_kama3'],'blue','orange')
        self.tp.plot_check_previous(ops['pp_kama4'],'blue','orange')
        self.tp.plot_check_previous(ops['pp_kama5'],'blue','orange')
        self.tp.plot_check_previous(ops['pp_kama6'],'blue','orange')

        for i in range(1,len(ops["zzbuy"])):
            cur = ops["zzbuy"][i]
            pre = ops["zzbuy"][i-1]
            
            if(cur[0]==1):
                pass
            else:
                pass
            
            self.tp.plot_array([ pre[1], cur[1] ],
                               [ ops['main_close'][pre[1]], ops['main_close'][cur[1]] ],
                               'red')

        for i in range(0,len(sell_index)):
            self.tp.v_line(sell_index[i],"red","-")    
            self.tp.v_line(buy_index[i],"green","-")

        self.tp.show()
        
    '''
    ###########################################################################
    ###########################################################################
    '''    
   
    def init_variables(self,ops):
        self.zig_lowest_price = 0
        self.buy_price = 0
        self.buyCount = 0
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def buy(self,ops,index):
        diff_1 = 1 if (ops['pp_kama1'][index]-ops['pp_kama1'][index-1]) > 0 else 0
        diff_2 = 1 if (ops['pp_kama2'][index]-ops['pp_kama2'][index-1]) > 0 else 0
        diff_3 = 1 if (ops['pp_kama3'][index]-ops['pp_kama3'][index-1]) > 0 else 0
        diff_4 = 1 if (ops['pp_kama4'][index]-ops['pp_kama4'][index-1]) > 0 else 0
        diff_5 = 1 if (ops['pp_kama5'][index]-ops['pp_kama5'][index-1]) > 0 else 0
        diff_6 = 1 if (ops['pp_kama6'][index]-ops['pp_kama6'][index-1]) > 0 else 0
        
        diff_add = diff_1+diff_2+diff_3+diff_4+diff_5+diff_6
            
        buy = False
        if((ops["zzimperbuy"][index-1][1]==0 and ops["zzimperbuy"][index][1] == 1 and diff_add>=3) 
           or (self.buyCount == 0 and ops["zzimperbuy"][index][1] == 1)):          
            buy = True
            self.zig_lowest_price = (ops["close"][ops["zzimperbuy"][index][0]] + ops["closehk"][ops["zzperbuy"][index][0]])/2.0                   
            self.buy_price = ops["main_dtlclose"][index]
            print("buy1",self.buy_price,index)
        
        elif(ops["zzimperbuy"][index][1]==1 and ops["zzperbuy"][index][1]==1 and self.buyCount >0):
            
                
            if(diff_add==6 or self.buy_price<ops["main_dtlclose"][index]):
                buy = True
                self.buy_price = ops["main_dtlclose"][index]
                print("buy2",self.buy_price,index)
                
        if(buy):
            self.buyCount = 1
        return buy
        #return ops["zzimperbuy"][index][1] == 1
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def sell(self,ops,index):
        
        diff_1 = 1 if (ops['pp_kama1'][index]-ops['pp_kama1'][index-1]) > 0 else 0
        diff_2 = 1 if (ops['pp_kama2'][index]-ops['pp_kama2'][index-1]) > 0 else 0
        diff_3 = 1 if (ops['pp_kama3'][index]-ops['pp_kama3'][index-1]) > 0 else 0
        diff_4 = 1 if (ops['pp_kama4'][index]-ops['pp_kama4'][index-1]) > 0 else 0
        diff_5 = 1 if (ops['pp_kama5'][index]-ops['pp_kama5'][index-1]) > 0 else 0
        diff_6 = 1 if (ops['pp_kama6'][index]-ops['pp_kama6'][index-1]) > 0 else 0
        
        diff_add = diff_1+diff_2+diff_3+diff_4+diff_5+diff_6
                
        sell = False
        sell_price = ops["main_dtlclose"][index]
        
        if(ops["zzimperbuy"][index][1] == 0):
            sell = True
            print("sell1",sell_price,index)
        else:
            if(sell_price<self.buy_price or 1==1):
                #sell = True
                
                
                if (diff_add<=3):
                    sell = True
                    print("sell2",sell_price,index)
                pass
            pass
        
        return sell 
        #return ops["zzimperbuy"][index][1] == 0 

    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def custom_plot(self,ops):
        self.tp.fig()
        self.tp.plot_check_previous(ops['main_close'],'black','black')
        self.tp.plot_check_previous(ops['pp_ema34'],'green','red')
        self.tp.plot_check_previous(ops['pp_kama'],'blue','orange')
        self.tp.plot_check_previous(ops['d_std'],'blue','blue') 
        for i in range(1,len(ops["zzbuy"])):
            cur = ops["zzbuy"][i]
            pre = ops["zzbuy"][i-1]
            
            if(cur[0]==1):
                pass
            else:
                pass
            
            self.tp.plot_array([ pre[1], cur[1] ],
                               [ ops['main_close'][pre[1]], ops['main_close'][cur[1]] ],
                               'red')
        
        for i in range(1,len(ops["zzimperbuy"])): 
            if(ops["zzimperbuy"][i][1]>-1):
                if((not (ops["zzimperbuy"][i][1] == ops["zzimperbuy"][i-1][1])) and ops["zzimperbuy"][i][1]==1):
                    self.tp.v_line(i,"green","-")
            
        self.tp.show()
        pass

            

if __name__=="__main__":
    print("Main Start")
    config = 'config.json'
    tc = TraderControl(config,None)
    tc.run_strategies() 
        
        