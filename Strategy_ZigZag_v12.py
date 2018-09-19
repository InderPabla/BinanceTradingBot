
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
 
        #self.trueBTCPriceKline = self.tc.loadFromFile('Historical/BTCUSDT_1h_Binance_Numpy_Aug_7.txt.npy')
        
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
                           pad_view=self.tc.pad_view,second_kline = self.tc.real_kline,len_print=True)
        
        convdtl = TraderDetail(self.tc.kline,
                           start_index=self.tc.start_view,
                           max_view_amount=self.tc.max_view,
                           pad_view=self.tc.pad_view,convert=True,second_kline = self.tc.real_kline)
        
        hkdtl = dtl
        
        #btcdtl = TraderDetail(self.trueBTCPriceKline)
        
        
        for i in range(0,hk_count):
            hkdtl = TraderDetail(hkdtl.HEIKIN(),
                                 start_index=self.tc.start_view,
                                 max_view_amount=self.tc.max_view,
                                 pad_view=self.tc.pad_view)
        
        
             
        #hkdtl = dtl
        dtl.strip = True
        hkdtl.strip = True
        
        ops["main_close"] = hkdtl.CLOSE(strip=True)
        ops["openTime"] = dtl.OPENTIME(strip=True)
        ops["closeTime"] = dtl.CLOSETIME(strip=True)

        #ops["btcClose"] = btcdtl.close_based_on_time(ops["openTime"],ops["closeTime"])

        '''
        10,2,30---12,2,50---14,3,60---16,3,70---18,4,80---20,4,90
        '''
       
        s = 1
        zzlow = 2*s
        zzhigh = 6*s
        multi = 1
        
        ops["zzbuyfast"],ops["zzperbuyfast"],ops["zzimperbuyfast"],obsLow,obsHigh = hkdtl.ZIGZAG(hkdtl.start_index,hkdtl.max_view,zzlow,zzhigh,close=False)

        ops["opnhks"],ops["closehks"],ops["highhks"],ops["lowhks"] = dtl.SMOOTH_HEIKIN(10,strip=True)
        ops["30sma"] = hkdtl.SMA(hkdtl.close,30*multi,strip = True)
        ops["50sma"] = hkdtl.SMA(hkdtl.close,50*multi,strip = True)
        ops["100sma"] = hkdtl.SMA(hkdtl.close,100*multi,strip = True)
        ops["triplesmamax"] = np.maximum.reduce([ops["30sma"],ops["50sma"],ops["100sma"]])
        ops["kamaeam1"] = hkdtl.EMA(hkdtl.KAMA(10,2,30),10,strip=True)
        ops["rooted"] =  np.power(ops["triplesmamax"]*ops["kamaeam1"]*ops["closehks"],(1/3))
        ops["diffhks"] = ops["highhks"]-ops["lowhks"]
        ops["diffhks2"] =ops["rooted"]-ops["highhks"]
        ops["max"] = hkdtl.MWR(ops["triplesmamax"],20000)
        ops["macdline"],ops["signalline"],ops["histogram"] = hkdtl.MACD(12*3,26*3,9*3,strip=True)
        ops["rsi"],ops["srsi"],ops["srsi"] = hkdtl.SRSI(3*3,3*3,14*3,14*3,strip=True)
        ops["atr"] = hkdtl.EMA(hkdtl.ATR(14,strip=True),20)
        ops["wma"] = hkdtl.EMA(hkdtl.WMA(hkdtl.close,15,strip=True),20)
        
        #ops["renko"],ops["renkotype"] = hkdtl.RENKO(14*24*4,strip=True)
        ops["renko"],ops["renkotype"] = hkdtl.RENKO(14,strip=True)
        ops["renkoema"] = hkdtl.EMA(ops["renko"],34)
        ops["trendbarema"],ops["trendbarcolor"] = dtl.CM_Modified_Heik_Trend_Bars(34,"lime","red",strip=True)
        
        ops["out1"] = hkdtl.CM_Ultimate_MA_MTF_V2(hkdtl.close,strip=True)
        
        ops["out1conv"] = convdtl.CM_Ultimate_MA_MTF_V2(convdtl.close,strip=True)
        #ops["trendbaremaconv"],ops["trendbarcolorconv"] = convdtl.CM_Modified_Heik_Trend_Bars(34*16,"lime","red",strip=True)
        ops["trendbaremaconv"],ops["trendbarcolorconv"] = convdtl.CM_Modified_Heik_Trend_Bars(34*2,"lime","red",strip=True)
        
        #ops["volume"] = hkdtl.EMA(hkdtl.VOLUME(),34,strip=True)
        #ops["trades"] = hkdtl.EMA(hkdtl.TRADES(),34,strip=True)
        
        #ops["volume"] = hkdtl.EMA(hkdtl.EMA(hkdtl.EMA(hkdtl.EMA(hkdtl.VOLUME(),10),10),10),34,strip=True)
        #ops["trades"] = hkdtl.EMA(hkdtl.EMA(hkdtl.EMA(hkdtl.EMA(hkdtl.TRADES(),10),10),10),34,strip=True)
        
        ops["volume"] = hkdtl.SMA(hkdtl.VOLUME(),34,strip=True)
        ops["trades"] = hkdtl.SMA(hkdtl.TRADES(),34,strip=True)
        
        
        ops["multi"] = ops["volume"]*ops["trades"]
        
        ops["main_dtlclose"] = dtl.CLOSE(strip=True)
        ops["main_hkclose"] = hkdtl.CLOSE(strip=True)

        ops["closehk"] = hkdtl.CLOSE(strip=True)
        ops["openhk"] = hkdtl.OPEN(strip=True)
        ops["highhk"] = hkdtl.HIGH(strip=True)
        ops["lowhk"] = hkdtl.LOW(strip=True)
        ops["close"] = dtl.CLOSE(strip=True)
        ops["open"] = dtl.OPEN(strip=True)
        ops["low"] = dtl.LOW(strip=True)
        ops["high"] = dtl.HIGH(strip=True)
        ops["dim"] = [dtl.start_index,dtl.max_view]    
        
        ops["closetime"] = dtl.CLOSE_TIME(strip=True)
        
        ops["atrtrendchange"] = (ops["close"]-ops["trendbarema"])/ops["atr"]
        
        ops["closeconv"] = convdtl.CLOSE(strip=True)
        ops["openconv"] = convdtl.OPEN(strip=True)
        ops["highconv"] = convdtl.HIGH(strip=True)
        ops["lowconv"] = convdtl.LOW(strip=True)
        
        ops["closeatrlow"] = ops['close']-(ops["atr"]*2)
        ops["closeatrhigh"] = ops['close']+(ops["atr"]*2)
        

        ops = dtl.normalize_view(ops)
        
        evaled = self.define_strategy(ops) #define a custom staratgy using ops
        
        return self.ops,self.buy_index,self.sell_index, evaled
    
    '''
    ###########################################################################
    ###########################################################################
    ''' 
    
    def pm1(self,ops,index,state):
        if(index>0):
            if(ops["trendbarema"][index]>ops["trendbarema"][index-1] and ops["trendbarcolor"][index]=='lime'):
                return 'lime',0
            else:
                return 'red',0
        else:
            return 'red',0
    
    def pm2(self,ops,index,state):
        if(index>0):
            '''
            #ops["histogram"][index]>ops["histogram"][index-1] and ops["signalline"][index]>ops["signalline"][index-1] and 
            if(( ops["wma"][index]>ops["wma"][index-1] and ops["100sma"][index]>ops["100sma"][index-1] and ops["100sma"][index]<ops["close"][index] and ops["trendbarema"][index]>ops["trendbarema"][index-1] and ops["trendbarcolor"][index]=='lime' )
            #or (ops["histogram"][index]>ops["histogram"][index-1] and ops["signalline"][index]>ops["signalline"][index-1] and ops["trendbarcolor"][index]=='lime' and ops["rooted"][index]<ops["close"][index] and ops["rooted"][index]>ops["rooted"][index-1] and (ops['renkotype'][index]==1 or (ops['renko'][index]<ops["close"][index] )))
            ):
                return 'lime',0
            else:
                return 'red',0
            '''
            
            '''
            if( 
                (ops["trendbarema"][index]>ops["trendbarema"][index-1]  
            and ops["out1"][index]>ops["out1"][index-1] 
            and ops["wma"][index]>ops["wma"][index-1] 
            and ops["100sma"][index]>ops["100sma"][index-1] 
            and ops["100sma"][index]<ops["close"][index]
            and ops["closehks"][index]>ops["opnhks"][index]
            and ops["closehks"][index]>ops["closehks"][index-1]
            and ops["closehks"][index]<ops["close"][index-1]
            and ops["trendbarcolor"][index]=='lime'
            and ops["kamaeam1"][index]>ops["kamaeam1"][index-1])
            
           
            ):
                return 'lime',0
            else:
                return 'red',0
            '''
            
            
            if( 
                (ops["trendbarema"][index]>ops["trendbarema"][index-1]  
            and ops["out1"][index]>ops["out1"][index-1] 
            and ops["kamaeam1"][index]>ops["kamaeam1"][index-1])

            ):
                return 'lime',0
            else:
                return 'red',0
            
        else:
            return 'red',0
    
    def pm3(self,ops,index,state):
        if ( 
            ops["trendbaremaconv"][index]>ops["trendbaremaconv"][index-1]  
        #and ops["out1conv"][index]>ops["out1conv"][index-1] 

        ):
            return 'lime',0
        else:
            return 'red',0   

    def profitPlot(self,ops,buy_index,sell_index,evaled):#risk_NORMAL,total_NORMAL,risk_LOW,total_LOW):
        #self.tp.temp_plt()
        self.tp.plot_profit(ops,buy_index,sell_index,evaled)#,risk_NORMAL,total_NORMAL,risk_LOW,total_LOW)
        self.tp.show()

    def plot(self,ops,buy_index,sell_index,evaled):#risk_NORMAL,total_NORMAL,risk_LOW,total_LOW):
       
        '''
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"lime","red","close")
        
        self.tp.plot_check_previous(ops['30sma'],'magenta','magenta')
        self.tp.plot_check_previous(ops['50sma'],'brown','brown')
        self.tp.plot_check_previous(ops['100sma'],'orange','orange')
        
        
        
        self.tp.plot_check_previous(ops['close'],'white','white')
        self.tp.plot_check_previous(ops['renko'],'orange','orange')
        
        
        self.tp.plot_check_previous(ops["highhks"],'magenta','magenta')
     
        self.tp.plot_check_previous(ops["rooted"],'lime','lime')
        
        
        for i in range(1,len(ops["zzimperbuyfast"])):
            if(not (ops["zzimperbuyfast"][i][1]==ops["zzimperbuyfast"][i-1][1]) and ops["zzimperbuyfast"][i][1]==1):
                #self.tp.v_line(i,"cyan","-")
                print(str(i)," CYAN ",'{:.0f}'.format(ops["closetime"][i]))
            if(not (ops["zzimperbuyfast"][i][1]==ops["zzimperbuyfast"][i-1][1]) and ops["zzimperbuyfast"][i][1]==0):
                #self.tp.v_line(i,"blue","-")
                print(str(i)," BLUE ",'{:.0f}'.format(ops["closetime"][i]))
                
        for i in range(1,len(ops["zzbuyfast"])):
            cur = ops["zzbuyfast"][i]
            pre = ops["zzbuyfast"][i-1]
            
            if(cur[0]==1):
                pass
            else:
                pass
            
            self.tp.plot_array([ pre[1], cur[1] ],
                               [ ops['close'][pre[1]], ops['close'][cur[1]] ],
                               'pink')                
        
        '''
        
        
        self.tp.fig_cust(20/1.5,6/1.5)
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"lime","red","main_dtlclose")
        self.tp.custom_plot_color_decision(ops['close'],ops,self.pm3)
        self.tp.plot_check_previous(ops['closeconv'],'yellow','yellow')
        self.tp.plot_check_previous(ops['out1conv'],'lime','red')
        self.tp.plot_check_previous(ops['trendbaremaconv'],'lime','red')
        self.tp.save("breakthroughlevel99.png")
        self.tp.show()
        
        '''
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"lime","red","main_dtlclose")
        self.tp.plot_check_previous(ops['atr'],'white','white')
        self.tp.show()
        '''
        
        '''
        CLOSE HIGH LOW DIFFERENCESS WITH COLOR!!
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"lime","red","main_dtlclose")
        self.tp.plot_check_previous(ops["closeatrlow"],'red','red')
        self.tp.plot_check_previous(ops["closeatrhigh"],'lime','lime')
        self.tp.plot_check_previous(ops['close'],'white','white')
        self.tp.show()
        '''
         
        
        '''
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"lime","red","main_dtlclose")
        #self.tp.plot_check_previous(ops['close'],'white','white')
        #self.tp.plot_with_colors(ops['close'],ops['trendbarcolor'])
        self.tp.custom_plot_color_decision(ops['close'],ops,self.pm2)
        self.tp.plot_check_previous(ops['trendbarema'],'lime','red')
        self.tp.plot_check_previous(ops['wma'],'orange','orange')
        self.tp.plot_check_previous(ops['out1'],'lime','red')
        #self.tp.plot_check_previous(ops['renko'],'orange','orange')
        #self.tp.plot_check_previous(ops['renkoema'],'cyan','cyan')
        self.tp.show()
        '''  
       
        
        '''
        self.tp.fig()
        self.tp.plot_check_previous(ops["macdline"],'red','red')
        self.tp.plot_check_previous(ops["signalline"],'orange','orange')
        self.tp.fill(ops["histogram"],0,'red','green')
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"green","red","main_dtlclose")
        self.tp.show()
        '''
        
        '''
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"green","red","main_dtlclose")
        self.tp.plot_check_previous(ops["volume"],'cyan','cyan')
        self.tp.show()
        
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"green","red","main_dtlclose")
        self.tp.plot_check_previous(ops["trades"],'cyan','cyan')
        self.tp.show()
        
        self.tp.fig()
        self.tp.plot_time( ops["closetime"],'grey','-')
        self.tp.plot_orders(ops,buy_index,sell_index,"green","red","main_dtlclose")
        self.tp.plot_check_previous(ops["multi"],'cyan','cyan')
        self.tp.show()
        '''
        
        ######################################################################
        ######################################################################
        
       
        
        
      
    def plot_sell(self,ops,index,size):
        st = 0
        en = index+1
        if(index>=(size-1)):
            st = en-(size-1)
        
        
        print(index,st,en)



        self.tp.fig_cust(12,5)
        self.tp.plot_time( ops["closetime"][st:en],'grey','-')
        self.tp.custom_plot_color_decision(ops['close'][st:en],ops,self.pm2)
        self.tp.plot_check_previous(ops['trendbarema'][st:en],'lime','red')
        
        
        '''
        self.tp.plot_time( ops["closetime"][st:en],'grey','-')
        
        self.tp.plot_time( ops["closetime"][st:en],'grey','-')
        
        self.tp.plot_check_previous(ops['close'][st:en],'white','white')

        self.tp.plot_check_previous(ops["opnhks"][st:en],'cyan','cyan')
        self.tp.plot_check_previous(ops["closehks"][st:en],'red','red')
        self.tp.plot_check_previous(ops["highhks"][st:en],'magenta','magenta')
        self.tp.plot_check_previous(ops["lowhks"][st:en],'orange','orange')
        '''
        
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
       
        
        if(self.cool_down_count>0):
            self.cool_down_count = self.cool_down_count-1
            return False
        
       
            
        
        '''
        if(ops["highhks"][index]>ops["highhks"][index-1] and ops["diffhks2"][index]>ops["diffhks2"][index-1]):
            return True
        '''
        '''
        if(ops["rooted"][index]>ops["rooted"][index-1] and ops["multi"][index]>40000):
            return True
        '''
        '''
        if(ops["100sma"][index]>ops["100sma"][index-1] and ops["volume"][index]>10 ):
            return True
        '''
        '''
        if(ops["volume"][index]>15 and ops["rooted"][index]>ops["rooted"][index-1] 
        and ops["histogram"][index]>0 and ops["macdline"][index]>ops["macdline"][index-1]):
            return True
        '''
        '''
        if(ops["closehk"][index]>ops["100sma"][index] and  ops["closehks"][index]>ops["closehks"][index-1]):
            return True
        '''    
        
        '''
        if(ops["closehk"][index]>ops["100sma"][index] 
        and ops["100sma"][index]>ops["100sma"][index-1] 
        and ops["histogram"][index]>ops["histogram"][index-1]
        and ops["signalline"][index]>ops["signalline"][index-1]):
            return True
        '''
        
        '''
        if(ops["closehk"][index]>ops["100sma"][index] 
        and ops["100sma"][index]>ops["100sma"][index-1] 
        and ops["renkotype"][index]==1
        and ops["kamaeam1"][index]>ops["kamaeam1"][index-1]):
            return True
        '''
        
        '''
        if(ops["renkoema"][index]>ops["renkoema"][index-1]
        and ops["closehk"][index]>ops["100sma"][index] 
        and ops["100sma"][index] >ops["100sma"][index-1] 
        ):
            return True
        '''
        
        '''
        if((ops["wma"][index]>ops["wma"][index-1] and ops["100sma"][index]>ops["100sma"][index-1] and ops["100sma"][index]<ops["close"][index] and ops["trendbarema"][index]>ops["trendbarema"][index-1] and ops["trendbarcolor"][index]=='lime')
            #or (ops["histogram"][index]>ops["histogram"][index-1] and ops["signalline"][index]>ops["signalline"][index-1] and ops["trendbarcolor"][index]=='lime' and ops["rooted"][index]<ops["close"][index] and ops["rooted"][index]>ops["rooted"][index-1] and (ops['renkotype'][index]==1 or (ops['renko'][index]<ops["close"][index] )))
            ):
            return True
        '''
        
        '''
        if( 
                (ops["trendbarema"][index]>ops["trendbarema"][index-1]  
            and ops["out1"][index]>ops["out1"][index-1] 
            and ops["wma"][index]>ops["wma"][index-1] 
            and ops["100sma"][index]>ops["100sma"][index-1] 
            and ops["100sma"][index]<ops["close"][index]
            and ops["closehks"][index]>ops["opnhks"][index]
            and ops["closehks"][index]>ops["closehks"][index-1]
            and ops["closehks"][index]<ops["close"][index-1]
            and ops["trendbarcolor"][index]=='lime')
            
            
            ):
               return True
          '''
         
        '''
        if( ops["trendbarema"][index]>ops["trendbarema"][index-1]  
            and ops["out1"][index]>ops["out1"][index-1] 
            and ops["kamaeam1"][index]>ops["kamaeam1"][index-1]

            ):
                return True
        '''
        
        
        if ( ops["trendbaremaconv"][index]>ops["trendbaremaconv"][index-1]  
        and ops["kamaeam1"][index]>ops["kamaeam1"][index-1]):
             return True
        
        
        return False
    
    '''
    ###########################################################################
    ###########################################################################
    '''
    
    def sell(self,ops,index,buy_index):
        '''
        if(ops["highhks"][index]<ops["highhks"][index-1] or ops["diffhks2"][index]<ops["diffhks2"][index-1]):
            return True
 
        if(ops["rooted"][index]<ops["rooted"][index-1]):
            return True

        
        if((ops["signalline"][index]<0 and  ops["signalline"][index-1]>0) or (ops["rooted"][index]<ops["rooted"][index-1] and ops["histogram"][index]<0) ):
            return True
        '''
        '''
        if(ops["closehks"][index]<ops["closehks"][index-1]):
            return True
        '''
        
        '''
        if(ops["closehk"][index]<ops["100sma"][index] or
           ops["100sma"][index]<ops["100sma"][index-1] or
           ops["histogram"][index]<ops["histogram"][index-1]):
            return True
        '''
        
        '''
        if(ops["closehk"][index]<ops["100sma"][index] 
        or ops["100sma"][index]<ops["100sma"][index-1] 
        or ops["kamaeam1"][index]<ops["kamaeam1"][index-1]):
            return True
        '''
        
        '''
        if(ops["renkoema"][index]<ops["renkoema"][index-1]
        ):
            return True
        '''

     
        '''
        if(not ((ops["wma"][index]>ops["wma"][index-1] and ops["100sma"][index]>ops["100sma"][index-1] and ops["100sma"][index]<ops["close"][index] and ops["trendbarema"][index]>ops["trendbarema"][index-1] and ops["trendbarcolor"][index]=='lime')
            #or (ops["histogram"][index]>ops["histogram"][index-1] and ops["signalline"][index]>ops["signalline"][index-1] and ops["trendbarcolor"][index]=='lime' and ops["rooted"][index]<ops["close"][index] and ops["rooted"][index]>ops["rooted"][index-1] and (ops['renkotype'][index]==1 or (ops['renko'][index]<ops["close"][index] )))
            
            )):
            return True
            
        '''
        
        '''
        if( 
                not((ops["trendbarema"][index]>ops["trendbarema"][index-1]  
            and ops["out1"][index]>ops["out1"][index-1] 
            and ops["wma"][index]>ops["wma"][index-1] 
            and ops["100sma"][index]>ops["100sma"][index-1] 
            and ops["100sma"][index]<ops["close"][index]
            and ops["closehks"][index]>ops["opnhks"][index]
            and ops["closehks"][index]>ops["closehks"][index-1]
            and ops["closehks"][index]<ops["close"][index-1]
            and ops["trendbarcolor"][index]=='lime')
            
            )
            ):
               return True
        '''
        
        '''
        if(ops["kamaeam1"][index]<ops["kamaeam1"][index-1]
          or(ops["trendbaremaconv"][index]<ops["trendbaremaconv"][index-1] )):
            return True
        '''
        
        maxatr = np.max([ops["atr"][buy_index],ops["atr"][index]])
        if ( ops["trendbaremaconv"][index]<ops["trendbaremaconv"][index-1]):
            return True   
        
       
        if ( ops["close"][index]>=((maxatr*10)+ops["close"][buy_index])):
            return True   
        
        #if ( ops["close"][index]<=(ops["close"][buy_index]-(maxatr*2))):
            #return True  
        
        return False
        
    
    '''
    ###########################################################################
    ###########################################################################
    '''
