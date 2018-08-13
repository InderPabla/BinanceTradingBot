
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
        self.strategy_name = "Strategy ZigZag"
        self.tc = tc
        self.tp = TraderPlot()
        self.run = True
        self.visual_sell = False
        self.visual_buy = False
    
    '''
    ###########################################################################
    ###########################################################################
    '''
        
    def run_strategy(self):
        ops = {}
        
        hk_count = 1
        
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
        ops["pp_ema64"] = hkdtl.EMA(hkdtl.close,34,strip=True)
        ops["pp_ema68"] = hkdtl.EMA(hkdtl.close,68,strip=True)
        
        ops["pp_add"] = (ops["pp_ema8"]+ops["pp_ema15"]+ops["pp_ema34"]+ops["pp_ema50"]+ops["pp_ema64"])/5.0
        
        ops["pp_kama1"] = hkdtl.KAMA(10,2,30,strip=True)
        ops["pp_kama2"] = hkdtl.KAMA(12,2,50,strip=True)
        ops["pp_kama3"] = hkdtl.KAMA(14,3,60,strip=True)
        ops["pp_kama4"] = hkdtl.KAMA(16,3,70,strip=True)
        ops["pp_kama5"] = hkdtl.KAMA(18,4,80,strip=True)
        ops["pp_kama6"] = hkdtl.KAMA(20,4,90,strip=True)
        ops["pp_kama6ema"] = hkdtl.EMA(ops["pp_kama1"],10)  
        
        ops["diff_kama"] = hkdtl.CONSECUTIVE_DIFF([ops["pp_kama1"],ops["pp_kama2"],ops["pp_kama3"],ops["pp_kama4"],ops["pp_kama5"],ops["pp_kama6"]])
        ops["diff_kama"] = hkdtl.EMA(hkdtl.MTM_SLOPE(ops["diff_kama"],20),20)

        ops["a_atr"] = hkdtl.ATR(20,strip=False)*hkdtl.ATR(20,strip=False)
        ops["b_std"] = hkdtl.STDEV(hkdtl.close,20,strip=False)*hkdtl.STDEV(hkdtl.close,20,strip=False)
        #ops["pp_kama"] = hkdtl.KAMA(10,2,30,strip=True)
        #ops["pp_kama"] = hkdtl.KAMA(34,15,34,strip=True)
         
        s = 1
        zzlow = 2*s
        zzhigh = 6*s
        
        ops["zzbuyfast"],ops["zzperbuyfast"],ops["zzimperbuyfast"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzhigh,close=False)
        ops["zzbuyfastc"],ops["zzperbuyfastc"],ops["zzimperbuyfastc"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzlow,close=False)
      
        ops["rsi"],ops["ksrsi"],ops["dsrsi"] = hkdtl.SRSI(3*3,3*3,14*3,14*3,strip=True)
        
        ops["atrrsi"] = hkdtl.EMA(hkdtl.RSI(20,data=hkdtl.ATR(14))/100.0,10,strip=True)
        ops["stdrsi"] = hkdtl.EMA(hkdtl.RSI(20,data=hkdtl.STDEV(hkdtl.close,14))/100.0,10,strip=True)
        ops["std"] = hkdtl.STDEV(hkdtl.close,10)
        ops["1_mtm"] = hkdtl.MTM(hkdtl.STDEV(hkdtl.ATR(20),10),10,strip=True)
        ops["2_mtm"] = hkdtl.STDEV(hkdtl.ATR(14),14,strip=True)
        ops["5_atr"] = hkdtl.ATR(14,strip=True)


        ops["c_std"] = hkdtl.STDEV(hkdtl.TR(12),14,strip=True)
        ops["d_std"] = hkdtl.STDEV(dtl.close,10,strip=True)
        
        ops["pp_up"],ops["pp_mid"],ops["pp_low"],ops["4_wid"],ops["3_bpc"] = hkdtl.BB(20,strip=True)
        multi = 1
        ops["pp_30sma"] = hkdtl.SMA(hkdtl.close,30*multi,strip = True)
        ops["pp_50sma"] = hkdtl.SMA(hkdtl.close,50*multi,strip = True)
        ops["pp_100sma"] = hkdtl.SMA(hkdtl.close,100*multi,strip = True)
        
        ops["30sma"] = hkdtl.SMA(hkdtl.close,30*multi,strip = True)
        ops["50sma"] = hkdtl.SMA(hkdtl.close,50*multi,strip = True)
        ops["100sma"] = hkdtl.SMA(hkdtl.close,100*multi,strip = True)
        
        ops["main_dtlclose"] = dtl.CLOSE(strip=True)
        ops["main_hkclose"] = hkdtl.CLOSE(strip=True)
        
        ops["e_changeper"] = dtl.PERCHANGE(strip=False)
        
        ops["f_macdline"],ops["f_signalline"],ops["f_histogram"] = dtl.MACD(12,26,9,strip=True)
        #ops["g_pmoline"],ops["g_pmosignalline"],ops["g_pmohistogram"] = hkdtl.PMO(35,20,10,strip=True)
        #ops["g_pmoline"],ops["g_pmosignalline"],ops["g_pmohistogram"] = hkdtl.MACD(20,35,10,strip=True)
        
        ops["g_pmoline"],ops["g_pmosignalline"],ops["g_pmohistogram"] = hkdtl.MACD(12,26,10,strip=True)
        ops["g_pmoline2"],ops["g_pmosignalline2"],ops["g_pmohistogram2"] = hkdtl.MACD(12*3*3,26*3*3,10*3*3,strip=True)
        
        ops["std_pmoline"],ops["std_pmosignalline"],ops["std_pmohistogram"] = hkdtl.MACD(12,26,10,data=ops["d_std"],strip=False)
        
        ops["rsi"] = hkdtl.EMA(hkdtl.RSI(14),20,strip=True)/100.0
        ops["mfi1"] = hkdtl.EMA(hkdtl.MFI(14),20,strip=True)/100.0
        ops["mfi2"] = hkdtl.MFI(14,strip=True)/100.0
         
        ops["mfirsi"] = hkdtl.EMA((ops["rsi"]*ops["mfi1"])*(ops["rsi"]*ops["mfi1"]),20)
        
        ops["h_mtmefi"] = hkdtl.MTMEFI(14,14,strip=True)
        
        
        ops['ichange'] = hkdtl.EMA(hkdtl.CHANGE(hkdtl.close,40,strip=True),34)*10
        
        ops['smoothchange'] = hkdtl.CHANGE(hkdtl.EMA(hkdtl.close,13*3),21*3,strip=True)*10
        
        
        #ops['ichange'] = hkdtl.EMA(hkdtl.EMA(hkdtl.EMA(hkdtl.CHANGE(hkdtl.close,20,strip=True),10),10),10)*10

        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        # USE MOVINGAVERAGE OF MARKET STATE BERISH VS BULLISH!!!
        
        ops["opnhks"],ops["closehks"],ops["highhks"],ops["lowhks"] = dtl.SMOOTH_HEIKIN(10,strip=True)
        
        ops["closehk"] = hkdtl.CLOSE(strip=True)
        ops["openhk"] = hkdtl.OPEN(strip=True)
        ops["highhk"] = hkdtl.HIGH(strip=True)
        ops["lowhk"] = hkdtl.LOW(strip=True)
        ops["close"] = dtl.CLOSE(strip=True)
        ops["ema100"] = dtl.EMA(dtl.close,100,strip=True)
        ops["low"] = dtl.LOW(strip=True)
        ops["high"] = dtl.HIGH(strip=True)
        ops["dim"] = [dtl.start_index,dtl.max_view]    
        
        ops["closetime"] = dtl.CLOSE_TIME(strip=True)
        print(int(ops["closetime"][0]))
     
        
        ops = dtl.normalize_view(ops)
        #ops["f_histogram"] = ops["f_macdline"] - ops["f_signalline"];
        ops["slp"] = hkdtl.MTM_SLOPE(ops["pp_ema64"],20)#hkdtl.EMA(hkdtl.MTM_SLOPE(ops["pp_ema64"],20),14)
        ops["slp"] = hkdtl.EMA(hkdtl.MTM_SLOPE(ops["pp_ema64"],20),20)
        
        
        
        ops["slphs"] = hkdtl.MTM_SLOPE(ops["g_pmohistogram"],1)
        ops["slpmd"] = hkdtl.MTM_SLOPE(ops["g_pmoline"],1)
        ops["sub"] = abs(ops["slphs"]-ops["slpmd"])
        #ops["slpmd"] = hkdtl.EMA(hkdtl.MTM_SLOPE(ops["g_pmohistogram"],1),1)
        
        self.define_strategy(ops) #define a custom staratgy using ops
    
    '''
    ###########################################################################
    ###########################################################################
    ''' 
    
    def plot(self,ops,buy_index,sell_index):
        self.tp.temp_plt()
        
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        
        self.tp.plot_check_previous(ops['close'],'white','white')
        self.tp.plot_check_previous(ops['closehks'],'lime','lime')
        
        #self.tp.plot_check_previous(ops['pp_kama6ema'],'lime','red')
        #self.tp.plot_check_previous(ops['rsi'],'cyan','cyan')
        #self.tp.plot_check_previous(ops['smoothchange'],'pink','pink')
        #self.tp.plot_check_previous(ops['ichange'],'magenta','magenta')
        
        
        self.tp.plot_check_previous(ops['30sma'],'magenta','magenta')
        self.tp.plot_check_previous(ops['50sma'],'cyan','cyan')
        self.tp.plot_check_previous(ops['100sma'],'orange','orange')

        
        if(len(sell_index)>0):
            for i in range(0,len(sell_index)):
                if(ops["main_dtlclose"][sell_index[i]]-ops["main_dtlclose"][buy_index[i]]<0):
                    self.tp.v_line(sell_index[i],"red",":")    
                    self.tp.v_line(buy_index[i],"green",":")
                else:
                    self.tp.v_line(sell_index[i],"red","-")    
                    self.tp.v_line(buy_index[i],"green","-")
        
        
        
        self.tp.show()
        
        ######################################################################
        ######################################################################
        
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_check_previous(ops["g_pmoline2"],'red','red')
        self.tp.plot_check_previous(ops["g_pmosignalline2"],'red','red')
        self.tp.fill(ops["g_pmohistogram2"],0,'red','green')

        self.tp.plot_check_previous(ops['main_dtlclose'],'white','white')
        self.tp.plot_check_previous(ops['pp_kama6ema'],'lime','red')
        self.tp.plot_check_previous(ops['mfirsi'],'cyan','cyan')
        
        self.tp.plot(ops['pp_ema64'],'purple')
        self.tp.plot_check_previous(ops['pp_30sma'],'magenta','magenta')
        self.tp.plot_check_previous(ops['pp_50sma'],'cyan','cyan')
        self.tp.plot_check_previous(ops['pp_100sma'],'orange','orange')
        
        if(len(sell_index)>0):
            for i in range(0,len(sell_index)):
                if(ops["main_dtlclose"][sell_index[i]]-ops["main_dtlclose"][buy_index[i]]<0):
                    self.tp.v_line(sell_index[i],"red",":")    
                    self.tp.v_line(buy_index[i],"green",":")
                else:
                    self.tp.v_line(sell_index[i],"red","-")    
                    self.tp.v_line(buy_index[i],"green","-")
        
        self.tp.h_line(0,'white','-')
        self.tp.h_line(0.8,'white','-')
        self.tp.h_line(0.2,'white','-')
        self.tp.show()
        
        
      
    def plot_sell(self,ops,index,size):
        st = 0
        en = index+1
        if(index>=(size-1)):
            st = en-(size-1)
        
        
        print(index,st,en)



        self.tp.fig_cust(12,5)
        self.tp.plot_time( ops["closetime"][st:en],'grey','-')
        
        self.tp.plot_check_previous(ops['closehk'][st:en],'white','white')
        self.tp.plot_check_previous(ops['closehks'][st:en],'lime','lime')
        
        #self.tp.plot_check_previous(ops['pp_kama6ema'],'lime','red')
        #self.tp.plot_check_previous(ops['rsi'],'cyan','cyan')
        #self.tp.plot_check_previous(ops['smoothchange'],'pink','pink')
        #self.tp.plot_check_previous(ops['ichange'],'magenta','magenta')
        
        
        self.tp.plot_check_previous(ops['30sma'][st:en],'magenta','magenta')
        self.tp.plot_check_previous(ops['50sma'][st:en],'cyan','cyan')
        self.tp.plot_check_previous(ops['100sma'][st:en],'orange','orange')
        
        
        self.tp.show()
        
    ''' 
    ###########################################################################
    ###########################################################################
    '''    
   
    def init_variables(self,ops):
        self.zig_lowest_price = 0
        self.buy_price = 0
        self.buyCount = 0
        self.cool_down = 5
        self.cool_down_count = 0
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def buy(self,ops,index):
        
        stamp = datetime.fromtimestamp(ops['closetime'][index]/1000)
        weekday = stamp.weekday()
        if(weekday>=7):
            return False
        '''
        if(current_time.hour>0 and current_time.hour<6):
            return False
        if(current_time.hour>18):
            return False
        '''
        
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
        
        if(self.cool_down_count>0):
            self.cool_down_count = self.cool_down_count-1
            return False
        
        #if(ops['g_pmohistogram2'][index]>ops['g_pmohistogram2'][index-1] and ops['g_pmohistogram'][index]>ops['g_pmohistogram'][index-1]):
        
        if( ops['closehks'][index]<ops['closehk'][index] and 
           ops['closehks'][index]>ops['closehks'][index-1]
           and ops["g_pmoline"][index]>ops["g_pmoline"][index-1]
           and ops["g_pmosignalline"][index]>ops["g_pmosignalline"][index-1]
           and ops["g_pmohistogram"][index]>ops["g_pmohistogram"][index-1]
           #and ops["closehk"][index]>ops["30sma"][index]
           #and ops["closehk"][index]>ops["50sma"][index]
           #and ops["closehk"][index]>ops["100sma"][index]
           and ops["g_pmohistogram2"][index]>ops["g_pmohistogram2"][index-1]
           
    
        ):
            return True    
           

            
        '''
        if( ops['pp_kama6ema'][index]>ops['pp_kama6ema'][index-1]
        and ops['main_dtlclose'][index]>ops['pp_30sma'][index]
        and ops['main_dtlclose'][index]>ops['pp_50sma'][index]
        and ops['main_dtlclose'][index]>ops['pp_100sma'][index] 
        and ops['main_dtlclose'][index]>ops['pp_kama6ema'][index]
        and ops['main_dtlclose'][index]>ops['pp_kama6ema'][index]
        ):
            return True
        '''
            
        '''
        if(ops['h_mtmefi'][index]>ops['h_mtmefi'][index-1] 
        and ops['ichange'][index]>ops['ichange'][index-1]
        and ops['pp_kama6ema'][index]>ops['pp_kama6ema'][index-1]
        and ops['mfirsi'][index]>ops['mfirsi'][index-1]
        and ops['main_dtlclose'][index]>ops['pp_30sma'][index]
        and ops['main_dtlclose'][index]>ops['pp_50sma'][index]
        and ops['main_dtlclose'][index]>ops['pp_100sma'][index]
        ):
            return True
            
            if(ops["g_pmosignalline2"][index]>ops["g_pmosignalline2"][index-1] 
            and  ops['g_pmohistogram2'][index]>ops['g_pmohistogram2'][index-1] 
            and ops['pp_kama6ema'][index]>ops['pp_kama6ema'][index-1])):
                return True
        '''   
            
        '''
        if(ops['g_pmohistogram2'][index]>ops['g_pmohistogram2'][index-1] 
        
        and ops['pp_kama6ema'][index]>ops['pp_kama6ema'][index-1]
        and ops['pp_kama6ema'][index]<ops['main_dtlclose'][index-1]
        and ops["mfirsi"][index]>ops["mfirsi"][index-1]
        and ops["pp_ema64"][index]<ops["main_dtlclose"][index]
        and ops['mfirsi'][index]<0.175
        and ops["h_mtmefi"][index]>0.13
        ):
            return True
        '''
        
        
        '''
        if(ops['g_pmohistogram'][index]>ops['g_pmohistogram'][index-1] 
        and ops['g_pmohistogram2'][index]>ops['g_pmohistogram2'][index-1]
        and ops['pp_kama6ema'][index]>ops['pp_kama6ema'][index-1]
        and ops['pp_kama6ema'][index]<ops['main_dtlclose'][index-1]
        and ops["mfirsi"][index]>ops["mfirsi"][index-1]
        and ops["pp_ema64"][index]<ops["main_dtlclose"][index]
        ):
            return True
        '''    
        
        '''
        if(ops['g_pmohistogram'][index]>ops['g_pmohistogram'][index-1]
        and ops['g_pmohistogram2'][index]>0
        and ops['pp_kama6ema'][index]>ops['pp_kama6ema'][index-1]
        and ops['pp_kama6ema'][index]<=ops['main_dtlclose'][index-1]
        ):

            return True
        '''

        
        return False
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def sell(self,ops,index,buy_index):
        
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
        
        if( ops['closehks'][index]>ops['closehk'][index] or 
           ops['closehks'][index]<ops['closehks'][index-1]
    
        ):
            return True    
        
        '''
        if( ops['pp_kama6ema'][index]<ops['pp_kama6ema'][index-1] 
        or ops['main_dtlclose'][index]<ops['pp_30sma'][index]
        or ops['main_dtlclose'][index]<ops['pp_kama6ema'][index]
        ):
            return True
        '''
        
        '''
        if(ops['pp_kama6ema'][index]<ops['pp_kama6ema'][index-1]
        or ops['pp_kama6ema'][index]>ops['main_dtlclose'][index-1]
        ):
            self.cool_down_count = 50
            return True
        
        if(ops['h_mtmefi'][index]<ops['h_mtmefi'][index-1] 
        or ops['ichange'][index]<ops['ichange'][index-1]
        or ops['pp_kama6ema'][index]<ops['pp_kama6ema'][index-1]
        or ops['mfirsi'][index]<ops['mfirsi'][index-1]):
            return True
        '''
 
        
        '''
        if(ops['main_dtlclose'][index]<ops['main_dtlclose'][buy_index]):
            return True
        '''
    
        '''
        if(ops["g_pmoline"][index]> ops["g_pmoline"][index-1] ):
            return False
        
        if(ops['g_pmohistogram'][index]<ops['g_pmohistogram'][index-1]):
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
        
        