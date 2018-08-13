
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
        
        hk_count = 4
        
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
        ops["pp_ema64"] = hkdtl.EMA(hkdtl.close,100,strip=True)
        
        ops["pp_add"] = (ops["pp_ema8"]+ops["pp_ema15"]+ops["pp_ema34"]+ops["pp_ema50"]+ops["pp_ema64"])/5.0
        
        ops["pp_kama1"] = hkdtl.KAMA(10,2,30,strip=True)
        ops["pp_kama2"] = hkdtl.KAMA(12,2,50,strip=True)
        ops["pp_kama3"] = hkdtl.KAMA(14,3,60,strip=True)
        ops["pp_kama4"] = hkdtl.KAMA(16,3,70,strip=True)
        ops["pp_kama5"] = hkdtl.KAMA(18,4,80,strip=True)
        ops["pp_kama6"] = hkdtl.KAMA(20,4,90,strip=True)
        
        ops["diff_kama"] = hkdtl.CONSECUTIVE_DIFF([ops["pp_kama1"],ops["pp_kama2"],ops["pp_kama3"],ops["pp_kama4"],ops["pp_kama5"],ops["pp_kama6"]])
        ops["diff_kama"] = hkdtl.STDEV(ops["diff_kama"],14)
        
        ops["a_atr"] = hkdtl.ATR(20,strip=False)*hkdtl.ATR(20,strip=False)
        ops["b_std"] = hkdtl.STDEV(hkdtl.close,20,strip=False)*hkdtl.STDEV(hkdtl.close,20,strip=False)
        #ops["pp_kama"] = hkdtl.KAMA(10,2,30,strip=True)
        #ops["pp_kama"] = hkdtl.KAMA(34,15,34,strip=True)
         
        s = 1
        zzlow = 2*s
        zzhigh = 6*s
        
        ops["zzbuyfast"],ops["zzperbuyfast"],ops["zzimperbuyfast"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzhigh,close=False)
        ops["zzbuyfastc"],ops["zzperbuyfastc"],ops["zzimperbuyfastc"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzlow,close=False)
      
        ops["rsi"],ops["k_srsi"],ops["d_srsi"] = hkdtl.SRSI(3,3,14,14,strip=True)
        
        ops["atrrsi"] = hkdtl.EMA(hkdtl.RSI(20,data=hkdtl.ATR(14))/100.0,10,strip=True)
        ops["stdrsi"] = hkdtl.EMA(hkdtl.RSI(20,data=hkdtl.STDEV(hkdtl.close,14))/100.0,10,strip=True)
        ops["std"] = hkdtl.STDEV(hkdtl.close,10)
        ops["1_mtm"] = hkdtl.MTM(hkdtl.STDEV(hkdtl.ATR(20),10),10,strip=True)
        ops["2_mtm"] = hkdtl.STDEV(hkdtl.ATR(14),14,strip=True)
        ops["5_atr"] = hkdtl.ATR(14,strip=True)


        ops["c_std"] = hkdtl.STDEV(hkdtl.TR(12),14,strip=True)
        ops["d_std"] = hkdtl.STDEV(hkdtl.close,14,strip=True)
        
        ops["pp_up"],ops["pp_mid"],ops["pp_low"],ops["4_wid"],ops["3_bpc"] = hkdtl.BB(20,strip=True)

        ops["main_dtlclose"] = dtl.CLOSE(strip=True)
        
        ops["e_changeper"] = dtl.PERCHANGE(strip=False)
        
        ops["closehk"] = hkdtl.CLOSE(strip=True)
        ops["close"] = dtl.CLOSE(strip=True)
        ops["ema100"] = dtl.EMA(dtl.close,100,strip=True)
        ops["low"] = dtl.LOW(strip=True)
        ops["high"] = dtl.HIGH(strip=True)
        ops["dim"] = [dtl.start_index,dtl.max_view]    
        
        ops = dtl.normalize_view(ops)
        ops["slp"] = hkdtl.MTM_SLOPE(ops["pp_ema64"],20)#hkdtl.EMA(hkdtl.MTM_SLOPE(ops["pp_ema64"],20),14)
        ops["slp"] = hkdtl.EMA(hkdtl.MTM_SLOPE(ops["pp_ema64"],10),10)
        
        self.define_strategy(ops) #define a custom staratgy using ops
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def plot(self,ops,buy_index,sell_index):
        '''
        self.tp.fig()
        self.tp.plot_check_previous(ops['close'],'black','black')
        self.tp.plot_check_previous(ops['high'],'red','red')
        self.tp.plot_check_previous(ops['low'],'green','green')
        self.tp.plot_check_previous(ops['ema100'],'green','red')
        
        for i in range(1,len(ops["zzimperbuyfast"])):
            if(not (ops["zzimperbuyfast"][i][1]==ops["zzimperbuyfast"][i-1][1]) and ops["zzimperbuyfast"][i][1]==1):
                self.tp.v_line(i,"red","-")
            if(not (ops["zzimperbuyfast"][i][1]==ops["zzimperbuyfast"][i-1][1]) and ops["zzimperbuyfast"][i][1]==0):
                self.tp.v_line(i,"orange","-")
        
        self.tp.show()
        '''
        
        self.tp.fig()
        self.tp.plot_check_previous(ops['main_dtlclose'],'black','black')
        
        self.tp.plot_check_previous(ops['pp_kama1'],'pink','orange')
        self.tp.plot_check_previous(ops['pp_kama2'],'pink','orange')
        self.tp.plot_check_previous(ops['pp_kama3'],'pink','orange')
        self.tp.plot_check_previous(ops['pp_kama4'],'pink','orange')
        self.tp.plot_check_previous(ops['pp_kama5'],'pink','orange')
        self.tp.plot_check_previous(ops['pp_kama6'],'pink','orange')
        self.tp.plot_check_previous(ops['slp'],'cyan','cyan')
        self.tp.plot(ops['pp_ema64'],'purple')
        self.tp.plot_check_previous(ops['diff_kama'],'orange','orange')
        
        for i in range(1,len(ops["zzbuyfastc"])):
            cur = ops["zzbuyfastc"][i]
            pre = ops["zzbuyfastc"][i-1]

            self.tp.plot_array([ pre[1], cur[1] ],
                               [ ops['main_close'][pre[1]], ops['main_close'][cur[1]] ],
                               'blue')
            
        for i in range(1,len(ops["zzbuyfast"])):
            cur = ops["zzbuyfast"][i]
            pre = ops["zzbuyfast"][i-1]
  
            self.tp.plot_array([ pre[1], cur[1] ],
                               [ ops['main_close'][pre[1]], ops['main_close'][cur[1]] ],
                               'red')
        
       
        
       
        '''        
        for i in range(1,len(ops["zzimperbuyfastc"])):
            if(not (ops["zzimperbuyfastc"][i][1]==ops["zzimperbuyfastc"][i-1][1]) and ops["zzimperbuyfastc"][i][1]==1):
                self.tp.v_line(i,"purple","-")
            if(not (ops["zzimperbuyfastc"][i][1]==ops["zzimperbuyfastc"][i-1][1]) and ops["zzimperbuyfastc"][i][1]==0):
                self.tp.v_line(i,"cyan","-")
        
        for i in range(1,len(ops["zzimperbuyfast"])):
            if(not (ops["zzimperbuyfast"][i][1]==ops["zzimperbuyfast"][i-1][1]) and ops["zzimperbuyfast"][i][1]==1):
                self.tp.v_line(i,"red","-")
            if(not (ops["zzimperbuyfast"][i][1]==ops["zzimperbuyfast"][i-1][1]) and ops["zzimperbuyfast"][i][1]==0):
                self.tp.v_line(i,"orange","-")
        '''       
        
               
        if(len(sell_index)>0):
            for i in range(0,len(sell_index)):
                self.tp.v_line(sell_index[i],"red",":")    
                self.tp.v_line(buy_index[i],"green",":")
               
        self.tp.show()
        
    '''
    ###########################################################################
    ###########################################################################
    '''    
   
    def init_variables(self,ops):
        self.zig_lowest_price = 0
        self.buy_price = 0
        self.buyCount = 0
        self.cool_down = 25
        self.cool_down_count = 0
    
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
        
        diff_12 = 1 if (ops['pp_kama1'][index-1]-ops['pp_kama1'][index-2]) > 0 else 0
        diff_22 = 1 if (ops['pp_kama2'][index-1]-ops['pp_kama2'][index-2]) > 0 else 0
        diff_32 = 1 if (ops['pp_kama3'][index-1]-ops['pp_kama3'][index-2]) > 0 else 0
        diff_42 = 1 if (ops['pp_kama4'][index-1]-ops['pp_kama4'][index-2]) > 0 else 0
        diff_52 = 1 if (ops['pp_kama5'][index-1]-ops['pp_kama5'][index-2]) > 0 else 0
        diff_62 = 1 if (ops['pp_kama6'][index-1]-ops['pp_kama6'][index-2]) > 0 else 0

        emadiff_1 = 1 if (ops['pp_ema64'][index]-ops['pp_ema64'][index-1]) > 0 else 0
        emadiff_2 = 1 if (ops['pp_ema64'][index-1]-ops['pp_ema64'][index-2]) > 0 else 0
        emadiff_3 = 1 if (ops['pp_ema64'][index-2]-ops['pp_ema64'][index-3]) > 0 else 0
        emadiff_4 = 1 if (ops['pp_ema64'][index-3]-ops['pp_ema64'][index-4]) > 0 else 0
        emadiff_5 = 1 if (ops['pp_ema64'][index-4]-ops['pp_ema64'][index-5]) > 0 else 0
        emadiff_6 = 1 if (ops['pp_ema64'][index-5]-ops['pp_ema64'][index-6]) > 0 else 0
        
        diff_add = diff_1+diff_2+diff_3+diff_4+diff_5+diff_6
        diff_add2 = diff_12+diff_22+diff_32+diff_42+diff_52+diff_62
        emadiff_add = emadiff_1+emadiff_2+emadiff_3 
            
        #if((ops["zzimperbuyfastc"][index][1]==1 and ops["zzimperbuyfastc"][index-1][1]<1) ):
            #return True
        '''
        if(self.cool_down_count>0):
            self.cool_down_count = self.cool_down_count-1
            return False
        
        if(diff_add==6 and ops['pp_ema64'][index]>ops['pp_ema64'][index-1]
           and ops["main_dtlclose"][index]>ops['pp_kama1'][index]
           and ops["main_dtlclose"][index]>ops['pp_kama2'][index]
           and ops["main_dtlclose"][index]>ops['pp_kama3'][index]
           and ops["main_dtlclose"][index]>ops['pp_kama4'][index]
           and ops["main_dtlclose"][index]>ops['pp_kama5'][index]
           and ops["main_dtlclose"][index]>ops['pp_kama6'][index]
           and ops["main_dtlclose"][index]>ops['pp_ema64'][index]):
            return True
        '''
        
        if(ops["main_dtlclose"][index]>ops['pp_ema64'][index] and (diff_add>diff_add2 or  diff_add == 6)
           and ((ops["slp"][index]-ops["slp"][index-1])*90.0)>0):
            return True
        
        return False
    
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
        diff_12 = 1 if (ops['pp_kama1'][index-1]-ops['pp_kama1'][index-2]) > 0 else 0
        diff_22 = 1 if (ops['pp_kama2'][index-1]-ops['pp_kama2'][index-2]) > 0 else 0
        diff_32 = 1 if (ops['pp_kama3'][index-1]-ops['pp_kama3'][index-2]) > 0 else 0
        diff_42 = 1 if (ops['pp_kama4'][index-1]-ops['pp_kama4'][index-2]) > 0 else 0
        diff_52 = 1 if (ops['pp_kama5'][index-1]-ops['pp_kama5'][index-2]) > 0 else 0
        diff_62 = 1 if (ops['pp_kama6'][index-1]-ops['pp_kama6'][index-2]) > 0 else 0
        
        diff_add = diff_1+diff_2+diff_3+diff_4+diff_5+diff_6
        diff_add2 = diff_12+diff_22+diff_32+diff_42+diff_52+diff_62
        
        if(((ops["slp"][index]-ops["slp"][index-1])*90.0)<0 ):
            return True
        
        '''
        if(diff_add<6):
            #self.cool_down_count = self.cool_down
            return True
        '''
        return False
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    

if __name__=="__main__":
    print("Main Start")
    config = 'config.json'
    tc = TraderControl(config,None)
    tc.run_strategies() 
        
        