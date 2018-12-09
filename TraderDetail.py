from TraderMath import TraderMath as TraderMath
from TraderBinance import TraderBinance as tb
import numpy as np
np.seterr(divide='ignore', invalid='ignore')
from sklearn.preprocessing import MinMaxScaler
import math
import warnings

from datetime import datetime


from colorama import Fore, Style, Back, init
def pin(foreColor):
        return Style.BRIGHT+foreColor
def rst():
        return Fore.WHITE+Style.BRIGHT+Back.RESET

warnings.filterwarnings(action='ignore', category=DeprecationWarning)

class TraderDetail:
        
    def __init__(self,kline,start_index=-1,pad_view=250,max_view_amount=1000, convert=False, convertFrom=16,second_kline=[],len_print=False,tickIndex=-1):
        self.className = "TraderDetail"
        self.math = TraderMath()
        self.kline = kline
        self.len_print = len_print
        if(len(second_kline)>0):
            self.kline = self.merge(self.kline,second_kline)
        
        
        total_size = 3000
        if(tickIndex>-1):
            total_size = total_size + tickIndex
            
        if(len(self.kline)>total_size and tickIndex>-1):
           
            self.kline = self.kline[len(self.kline)-total_size:len(self.kline)]
            
        self.close = self.getKey(self.kline,tb.CLOSE_INDEX)
        self.high = self.getKey(self.kline,tb.HIGH_INDEX)
        self.low = self.getKey(self.kline,tb.LOW_INDEX)
        self.open = self.getKey(self.kline,tb.OPEN_INDEX)
        self.openTime = self.getKey(self.kline,tb.TIME_INDEX)
        self.closeTime = self.getKey(self.kline,tb.CLOSE_TIME_INDEX)
        
        if(convert):
            self.convert2(convertFrom)
        
        self.trades = self.getKey(self.kline,tb.TRADES_INDEX)
        self.volume = self.getKey(self.kline,tb.ASSET_VOLUME_INDEX)
        self.assetVolume = self.getKey(self.kline,tb.ASSET_VOLUME_INDEX)
        self.time = self.getKey(self.kline,tb.CLOSE_TIME_INDEX)

       
        if(start_index>-1):
            self.start_index = start_index
            self.pad_view = pad_view
            self.max_view = max_view_amount
            
            if(len_print==True):
                print(pin(Fore.RED)+"=====>"+pin(Fore.GREEN)+"Kline Len",str(len(self.kline))+rst())
            
            if(self.start_index>=len(self.kline)):
                self.start_index = len(self.kline)-self.max_view
                self.max_view = len(self.kline)
            elif(len(self.kline)<(self.max_view+self.pad_view)):
                self.start_index = self.pad_view
                self.max_view = len(self.kline)
            else:
                self.start_index = self.start_index+self.pad_view
                self.max_view = self.start_index+self.max_view
      
            if(tickIndex>-1):
                self.start_index = self.start_index - tickIndex
        #BASIC Technical Details (Ex: MACD, etc)
    
    def merge(self,kline1,kline2):
        start_date = kline2[0][tb.TIME_INDEX]   
        found_index =  -1
        for i in range(len(kline1)-1,-1,-1):
            if(kline1[i][tb.TIME_INDEX]==start_date):
                found_index = i
                break
        if(self.len_print==True):
            print(pin(Fore.RED)+"=====>"+pin(Fore.GREEN)+"MERGING [Found Index:",found_index,", Leftover:",((len(kline1)-1)-found_index),"]"+rst())

        return np.concatenate((kline1[0:found_index],kline2))
        
    def close_based_on_time(self,dateOpen,dateClose):
        close = []
        j = 0
        if(self.len_print==True):    
            print (len(self.openTime),self.openTime[0])

        for i in range(0,len(self.openTime)):
            if(dateOpen[0]<=self.openTime[i]):
                j = i
                break
        if(self.len_print==True):    
            print ('start',j)
        
        for i in range(0,len(dateOpen)):
            currOpen = dateOpen[i]/1000
            currClose = dateClose[i]/1000
            
            #print(i,j,len(close),str(currOpen),str(currClose))
            
            thisDateOpen = self.openTime[len(self.openTime)-1]
            thisDateClose = self.closeTime[len(self.closeTime)-1]
            
            if(j<len(self.close)):
                thisDateOpen =  self.openTime[j]/1000
                thisDateClose =  self.closeTime[j]/1000
                
            if(currOpen>=thisDateOpen and currClose<=thisDateClose):
                pass        
            else:
                j = j + 1
            
            
            if(j<len(self.close)):
                close.append(self.close[j])    
            else:
                close.append(self.close[len(self.close)-1])
            
            #print(i,j,close[len(close)-1])
            '''
            wait = True
    
            while(wait and j<len(self.close)):
                #print(str(currOpen),str(thisDateOpen),str(currClose),str(thisDateClose))
                if(currOpen>=thisDateOpen  and currClose<=thisDateClose):
                    close.append(self.close[j])
                    wait = False
                else:
                    j = j+1
                
            '''         
                
        return close
    
    def convert2(self,convertFrom):
        conv_close= []
        conv_high=[]
        conv_open=[]
        conv_low=[]
        len_val = len(self.close)
        
        open_val = 0
        close_val = 0
        high_val  = float('-inf')
        low_val = float('inf')
        
        for i in range(0,len_val):
            
        
            #if(i%convertFrom==0):
            open_val = 0
            close_val = 0
            high_val  = float('-inf')
            low_val = float('inf')
  
            open_val = self.open[i]
              
            for j in range(i-convertFrom,i+1):
            #for j in range(i,i+convertFrom):
                if(j<=len_val-1 and j>=0):
                    close_val = self.close[j]
                    
                    if(self.high[j]>high_val):
                        high_val = self.high[j]
                    
                    if(self.low[j]<low_val):
                        low_val = self.low[j]
                        
            conv_close.append(close_val)
            conv_high.append(high_val)
            conv_open.append(open_val)
            conv_low.append(low_val)
                
        self.close = conv_close
        self.open = conv_open
        self.high = conv_high
        self.low = conv_low
        
    def convert(self,convertFrom):
        conv_close= []
        conv_high=[]
        conv_open=[]
        conv_low=[]
        len_val = len(self.close)
        
        open_val = 0
        close_val = 0
        high_val  = float('-inf')
        low_val = float('inf')
        
        for i in range(0,len_val):
            
        
            if(i%convertFrom==0):
                open_val = 0
                close_val = 0
                high_val  = float('-inf')
                low_val = float('inf')
  
                open_val = self.open[i]
                  
                for j in range(i,i+convertFrom):
                    if(j<=len_val-1 ):
                        close_val = self.close[j]
                        
                        if(self.high[j]>high_val):
                            high_val = self.high[j]
                        
                        if(self.low[j]<low_val):
                            low_val = self.low[j]
                        
            conv_close.append(close_val)
            conv_high.append(high_val)
            conv_open.append(open_val)
            conv_low.append(low_val)
                
        self.close = conv_close
        self.open = conv_open
        self.high = conv_high
        self.low = conv_low
    
    #HEIKIN ASHI
    def HEIKIN(self):
        return self.math.kline_to_heikin(self.kline)
    
    def SMOOTH_HEIKIN(self,period,strip=False):
        opn = self.EMA(self.open,period)
        close = self.EMA(self.close,period)
        low = self.EMA(self.low,period)
        high = self.EMA(self.high,period)
        
        opn,close,high,low = self.math.kline_to_smoothed_heikin(self.kline,opn,close,high,low)
        
        #opn,close,high,low = self.math.kline_to_smoothed_heikin(ema_kline,opn,close,high,low)
        
        opn = self.EMA(opn,period)
        close = self.EMA(close,period)
        low = self.EMA(low,period)
        high = self.EMA(high,period)
        
        return opn[self.start_index:self.max_view],close[self.start_index:self.max_view],high[self.start_index:self.max_view],low[self.start_index:self.max_view]
    
    #MACD: MOVING AVERAGE CONVERGANCE DIVERGENCE
    def MACD(self,short_ema,long_ema,signal_ema,data=[],strip=False):
        if(len(data)==0):
            data = self.close
            
        ema_short = self.EMA(data,short_ema)
        ema_long = self.EMA(data,long_ema)
        macd_line = self.math.subtract_matrix(ema_short,ema_long)
        signal_line = self.EMA(macd_line,signal_ema)
        histogram = self.math.subtract_matrix(macd_line,signal_line)
 
        if(strip==False):
            return macd_line,signal_line,histogram
        else:
            return macd_line[self.start_index:self.max_view],signal_line[self.start_index:self.max_view],histogram[self.start_index:self.max_view]
          
    #RSI: RELATIVE STRENGTH INDEX
    def RSI(self,period,strip=False,data=[]):
        if(len(data)==0):
            data = self.close
        
        change = self.math.change(data)
        gain,loss = self.math.gain_and_loss(change)
        averageGain = self.math.abs_matrix(self.AVERAGE(gain,period))
        averageLoss = self.math.abs_matrix(self.AVERAGE(loss,period))
        rsiInit = self.NORMAL_RSI(averageGain,averageLoss)

        if(strip==False):
            return np.array(rsiInit)    
        else:
            return np.array(rsiInit)[self.start_index:self.max_view]
        
    #SRSI: STOCHASTIC RELATIVE STRENGTH INDEX
    def SRSI(self,k_period,d_period,rsi_period,sto_period,strip=False,data=[]):
        if(len(data)==0):
            data = self.close
        k = []
        d = []
        rsi = self.RSI(rsi_period,data=data)
        highestPeriod = self.HIGHEST(rsi,sto_period)
        lowestPeriod = self.LOWEST(rsi,sto_period)
        for i in range(0,len(rsi)):
            if(highestPeriod[i]-lowestPeriod[i]==0):
                k.append(0)
            else:
                k.append(((rsi[i]-lowestPeriod[i])/(highestPeriod[i]-lowestPeriod[i]))*100.0)
        k = self.SMA(k,k_period)
        d = self.SMA(k,d_period)

        if(strip==False):
            return np.array(rsi),np.array(k),np.array(d)
        else:
            return np.array(rsi)[self.start_index:self.max_view],np.array(k)[self.start_index:self.max_view],np.array(d)[self.start_index:self.max_view]
    
    #EFI: ELDER'S FORCE INDEX
    def EFI(self,period,strip=False):
        change = self.math.change(self.close) 
        change_volume = self.math.multiply_matrix(change,self.volume)
        elders_force = self.EMA(change_volume,period)
        if(strip==False):
            return elders_force
        else:
            return np.array(elders_force)[self.start_index:self.max_view]
    
    #MTMEFI: ELDER'S FORCE INDEX
    def MTMEFI(self,period_force,period_change,strip=False):
        change = self.MTM(self.close,period_change)
        change_volume = self.math.multiply_matrix(change,self.volume)
        elders_force = self.EMA(change_volume,period_force)
        if(strip==False):
            return elders_force
        else:
            return np.array(elders_force)[self.start_index:self.max_view]
        
    #CFI: CUSTOM FORCE INDEX
    def CFI(self,data1,data2,period,strip=False):
        
        change_data = self.math.change(data1) 
        change_multi = self.math.multiply_matrix(change_data,data2)
        cfi = self.EMA(change_multi,period)
        
        
        if(strip==False):
            return cfi
        else:
            return np.array(cfi)[self.start_index:self.max_view]
    
    def PERCHANGE(self,strip=False):
        change = []
        
        #for i in range(0,len(self.close)):
        
        change = ((self.high/self.close) +  (self.close/self.low))/2.0
        
        if(strip==False):
            return change
        else:
            return np.array(change)[self.start_index:self.max_view]
        
    #BB: BOLLENGER BANDS
    def BB(self,period,strip=False):
        
        std = self.STDEV(self.close,10)*2.0
        middle = self.SMA(self.close,period)
        upper = self.math.add_matrix(middle,std)
        lower = self.math.subtract_matrix(middle,std)
        width = self.math.subtract_matrix(upper,lower)
        bperc = (self.close - lower)/(upper -lower) 
        
        if(strip==False):
            return upper,middle,lower,width,bperc
        else:
            return np.array(upper)[self.start_index:self.max_view],np.array(middle)[self.start_index:self.max_view],np.array(lower)[self.start_index:self.max_view],np.array(width)[self.start_index:self.max_view],np.array(bperc)[self.start_index:self.max_view]
        
    def STDEV(self,data,period,strip=False):
        
        mean = self.AVERAGE(data,period)  
        dev = self.math.subtract_matrix(data,mean)
        dev_square = self.math.power_matrix(dev,2)
        dev_square_sma = self.AVERAGE(dev_square,period)
        std = self.math.power_matrix(dev_square_sma,0.5)
        
        
        if(strip==False):
            return std
        else:
            return np.array(std)[self.start_index:self.max_view]
        
    def MFI(self,period,strip=False):
        
        typical = (self.high+self.low+self.close)/3.0
        typical_change = self.math.change(typical)
        raw_flow = self.math.multiply_matrix(self.volume,typical)
        
        pos_flow = [0]
        neg_flow = [0]
        
        for i in range(1,len(typical_change)):
            pos_flow.append(0)
            neg_flow.append(0)
            
            if(typical_change[i]>0):
                pos_flow[i] = raw_flow[i]
            elif(typical_change[i]<0):
                neg_flow[i] = raw_flow[i]
        
        
        pos_flow_14 = self.SUM(pos_flow,period)  
        neg_flow_14 = self.SUM(neg_flow,period)
 
        money_flow_index = self.NORMAL_RSI(pos_flow_14,neg_flow_14)
        
        
        if(strip==False):
            return np.array(money_flow_index)
        else:
            return np.array(money_flow_index)[self.start_index:self.max_view]
    
    def PMO(self,first_smoothing_period,second_smoothing_period,signal_period,strip=False):
        roc = self.ROC(self.close)
        
        #roc = self.norm_to_data_ref_simple(roc,roc)
        #ema_short = self.EMA(roc,second_smoothing_period)
        #ema_long = self.EMA(roc,first_smoothing_period)
        #pmo_line = self.math.subtract_matrix(ema_short,ema_long)
        #pmo_signal_line = self.EMA(pmo_line,signal_period)
        #pmo_histogram = self.math.subtract_matrix(pmo_line,pmo_signal_line)
        #roc[np.abs(roc) < 1+1e-10j] = 0
        
        first_smooth = self.PMO_CSF(roc,first_smoothing_period)*10.0
        pmo_line = self.PMO_CSF(first_smooth,second_smoothing_period)
        pmo_signal_line = self.EMA(pmo_line,signal_period)
        pmo_histogram = self.math.subtract_matrix(pmo_line,pmo_signal_line)
        
        if(strip==False):
            return pmo_line,pmo_signal_line,pmo_histogram
        else:
            return pmo_line[self.start_index:self.max_view],pmo_signal_line[self.start_index:self.max_view],pmo_histogram[self.start_index:self.max_view]
        
        
    def PMO_CSF(self,data,period,strip=False):
        multi = 2.0/period
        result = [0]
        
        for i in range (1,len(data)):
            result.append((((data[i] - result[i-1])*multi)+result[i-1]))
            
        if(strip==False):
            return np.array(result)
        else:
            return np.array(result)[self.start_index:self.max_view]
        
    def ROC(self,data,strip=False):
        roc = [0]
        for i in range(1,len(data)):
            roc.append(((data[i]/data[i-1])*100.0)-100.0)
        if(strip==False):
            return np.array(roc)
        else:
            return np.array(roc)[self.start_index:self.max_view]
        
        
    #EMA: EXPONENTIAL MOVING AVERAGE    
    def EMA(self,data,period,strip=False):
        
        ema = []
        if(len(data)<=period):
            return None
        else:
            avg = 0.0
            multi = (2.0/(period+1.0))
            for i in range(0,period):
                ema.append(0)
                avg = avg + data[i]
            avg = avg/period
            ema[len(ema)-1] = avg
            for i in range(0,period):
               ema[i] = avg
            for i in range(period,len(data)):
                ema.append(0)
                ema[i] = ((data[i]-ema[i-1])*multi) + ema[i-1]
        
        
        if(strip==False):   
            return np.array(ema)    
        else:
            return np.array(ema)[self.start_index:self.max_view]
        
    #SMA: SIMPLE MOVING AVERAGE 
    def SMA(self,data,period,strip=False):
        
        avg = []
        for i in range(0,len(data)):
            avg.append(0)
            avgVal = 0.0
            if(i>=period-1):
                for j in range(i-(period-1),i+1):    
                    avgVal = avgVal+data[j]    
                avgVal = avgVal/period
                avg[i] = avgVal 
                
        if(strip==False):        
            return np.array(avg)
        else:
            return np.array(avg)[self.start_index:self.max_view]
        
    #AVERAGE
    def AVERAGE(self,data,period,strip=False):
        
        avg = []
        firstAvg = 0.0
        for i in range(0,period+1):
            avg.append(0)
            firstAvg = firstAvg+data[i]
        firstAvg = firstAvg/period
        avg[len(avg)-1] = firstAvg
        for i in range(period+1,len(data)):
            avg.append(0)
            avg[i] = ((avg[i-1]*(period-1.0))+data[i])/period
        
        
        if(strip==False):
            return np.array(avg)
        else:
            return np.array(avg)[self.start_index:self.max_view]
        
    #NORMAL RELATIVE STRENGTH INDEX
    def NORMAL_RSI(self,gain,loss,strip=False):
        
        rsi = []
        for i in range(0,len(gain)):
            rsi.append(0)
            if(loss[i]>0):
                rsi[i] = 100.0-(100.0/(1+(gain[i]/loss[i])))
            else:
                rsi[i] = 0.0  
        
        
        if(strip==False):        
            return np.array(rsi)
        else:
            return np.array(rsi)[self.start_index:self.max_view]
        
    #HIGHEST
    def HIGHEST(self,data,period,strip=False):
        
        highest = []
        for i in range(0,len(data)):
            highest.append(0)
            if(i>=period-1):
                newHighest = float('-inf')
                
                for j in range((i-period)+1,i+1):
                    if(data[j]>newHighest):
                        newHighest = data[j]
                        
                highest[i] = newHighest
        
        
        if(strip==False):
            return np.array(highest)
        else:
            return np.array(highest)[self.start_index:self.max_view]
        
    #LOWEST
    def LOWEST(self,data,period,strip=False):
        
        lowest = []
        for i in range(0,len(data)):
            lowest.append(0)
            if(i>=period-1):
                newLowest= float('inf')
                for j in range((i-period)+1,i+1):
                    if(data[j]<newLowest):
                        newLowest = data[j]
                        
                lowest[i] = newLowest 
        
        
        if(strip==False):
            return np.array(lowest)
        else:
            return np.array(lowest)[self.start_index:self.max_view]
    
    def CHANGE(self,data,period,strip=False):    
        change_val  = []
        for i in range(0,len(data)):
            if(i>=period):
                change_val.append((data[i]-data[i-period])/data[i-1])
            else:
                change_val.append(0)
                
        if(strip==False):
            return np.array(change_val)
        else:
            return np.array(change_val)[self.start_index:self.max_view]
        
    #Momentum    
    def MTM(self,data,period,strip=False):
        
        momentum = []
        for i in range(0,len(data)):
            if(i>=period):
                momentum.append(data[i]-data[(i-period)])
            else:   
                momentum.append(0)
        
        
        if(strip==False):
            return np.array(momentum)
        else:
            return np.array(momentum)[self.start_index:self.max_view]
    
    
    def MTM_SLOPE(self,data,period,strip=False):
       
       mtm = self.MTM(data,period)
       
       
       
       atan2 = []
       
       for i in range(0,len(data)):
           #atan2.append(np.math.atan2(mtm[i],period))
           atan2.append((((np.math.atan((mtm[i]/period)*975.0)*180.0)/np.math.pi)/90.0))
       
       #((np.math.atan2(mtm,period)*360.0)/np.math.pi)/90.0
       
       if(strip==False):
            return np.array(atan2)
       else:
            return np.array(atan2)[self.start_index:self.max_view]
       
        
    def ATR(self,period,strip=False):
        tr = []
        for i in range(0,len(self.close)):
            if(i>0):
                tr.append(np.max([self.high[i]-self.low[i],
                                  abs(self.high[i]-self.close[i-1]),
                                  abs(self.low[i]-self.close[i-1])]))
            else:   
                tr.append(self.high[i]-self.low[i])
                
        atr = self.AVERAGE(tr,period)
        
        
        if(strip==False):
            return np.array(atr)
        else:
            return np.array(atr)[self.start_index:self.max_view]
    
    def TR(self,period,strip=False):
        tr = []
        for i in range(0,len(self.close)):
            if(i>0):
                tr.append(np.max([self.high[i]-self.low[i],
                                  abs(self.high[i]-self.close[i-1]),
                                  abs(self.low[i]-self.close[i-1])]))
            else:   
                tr.append(self.high[i]-self.low[i])
                
        
        
        if(strip==False):
            return np.array(tr)
        else:
            return np.array(tr)[self.start_index:self.max_view]
        
    def KAMA(self,er_period,ema_fast_period,ema_slow_period,strip=False): 
        
        change_prior = self.math.abs_matrix(self.MTM(self.close,1))
        volatility = self.SUM(change_prior,er_period)
        change = self.math.abs_matrix(self.MTM(self.close,er_period))
        
        ER = np.nan_to_num(self.math.divide_matrix(change,volatility))

        
        current_kama = [self.close[0]]
        for i in range(1,len(self.close)):
            SC = math.pow(((ER[i] * ((2.0/(ema_fast_period+1)) - (2.0/(ema_slow_period+1)) )) + (2.0/(ema_slow_period+1)) ),2)
            prior_kama = current_kama[i-1]
            current_kama.append( prior_kama+ (SC * (self.close[i] - prior_kama)))
        
        
        if(strip==False):
            return np.array(current_kama)
        else:
            return np.array(current_kama)[self.start_index:self.max_view]
        
    def CKAMA(self,data,er_period,ema_fast_period,ema_slow_period,strip=False): 
        
        change_prior = self.math.abs_matrix(self.MTM(data,1))
        volatility = self.SUM(change_prior,er_period)
        change = self.math.abs_matrix(self.MTM(data,er_period))
        
        ER = np.nan_to_num(self.math.divide_matrix(change,volatility))

        
        current_kama = [data[0]]
        for i in range(1,len(data)):
            SC = math.pow(((ER[i] * ((2.0/(ema_fast_period+1)) - (2.0/(ema_slow_period+1)) )) + (2.0/(ema_slow_period+1)) ),2)
            prior_kama = current_kama[i-1]
            current_kama.append( prior_kama+ (SC * (data[i] - prior_kama)))
        
        
        if(strip==False):
            return np.array(current_kama)
        else:
            return np.array(current_kama)[self.start_index:self.max_view]
        
    def SUM(self,data,period,strip=False):
        sum_data = []
        for i in range(0,len(data)):
            if(i>=(period-1)):
                sum_data.append(np.sum(data[(i-period):(i+1)]))
            else:
                sum_data.append(data[i]*period)
        if(strip==False):
            return np.array(sum_data)
        else:
            return np.array(sum_data)[self.start_index:self.max_view]
    
    def AZIGZAG(self,obsStart,obsEnd,period_filter_low,period_filter_high,scaler_factor,mid_factor,period_factor,strip=False):
        swingHigh = False
        swingLow = False
        obsLow = obsStart
        obsHigh = obsStart
        zz = []
        zz_len = obsEnd-obsStart
        
        zzper = np.full((zz_len,2), -1)
        zzimper = np.full((zz_len,2), -1)
        
        cummulative = 0
        
        for obs in range(obsStart,obsEnd):
            if (self.high[obs] > self.high[obsHigh]):       
                obsHigh = obs
                if (not swingLow and ((self.high[obsHigh] - self.low[obsLow]) / self.low[obsLow]) * 100.0 >= period_filter_low):
                    zz.append([1,obsLow-obsStart,obs-obsStart])  
                    swingHigh = False
                    swingLow = True;                           
                    #print(obs-obsStart,obsLow-obsStart,0)
                    
                    scaler,cummulative = self.ZIGZAG_ADAPTIVE_SCALER(zz,cummulative,scaler_factor,mid_factor,period_factor)
                    period_filter_low = period_filter_low*scaler 
                    period_filter_high = period_filter_high*scaler
                    print(len(zz),'{:.2f} {:.2f} {:.2f}'.format(cummulative/(period_factor-1),period_filter_low,period_filter_high))   
                    
                    
                    
                if (swingLow):
                    obsLow = obsHigh; 
                
               
                #scaler = self.ZIGZAG_ADAPTIVE_SCALER(self,zz,period_filter_low,period_filter_high)
 
            elif (self.low[obs] < self.low[obsLow]):    
                obsLow = obs     
                if (not swingHigh and ((self.high[obsHigh] - self.low[obsLow]) / self.low[obsLow])* 100.0 >= period_filter_high):
                    zz.append([0,obsHigh-obsStart,obs-obsStart])  
                    swingHigh = True
                    swingLow = False
                    #print(obs-obsStart,obsHigh-obsStart,1)
                    
                    scaler,cummulative = self.ZIGZAG_ADAPTIVE_SCALER(zz,cummulative,scaler_factor,mid_factor,period_factor)
                    period_filter_low = period_filter_low*scaler 
                    period_filter_high = period_filter_high*scaler
                    print(len(zz),'{:.2f} {:.2f} {:.2f}'.format(cummulative/(period_factor-1),period_filter_low,period_filter_high))   
                    
                if (swingHigh):
                    obsHigh = obsLow
        
  
                    
        for i in range(0,len(zz)):
            cur = zz[i]
            zzper  [cur[1]][0] = cur[1] #index
            zzimper[cur[2]][0] = cur[2] #index
            zzper  [cur[1]][1] = cur[0] #value
            zzimper[cur[2]][1] = cur[0] #value
       
        zzper_value = -1
        zzimper_value = -1
        for i in range(0,len(zzper)):
            if(zzper[i][1]>-1):
                zzper_value = zzper[i][1]
            
            if(zzimper[i][1]>-1):
                zzimper_value = zzimper[i][1]
   
            if(zzper_value>-1):
                zzper[i][1] = zzper_value    
            
            if(zzimper_value>-1):
                zzimper[i][1] = zzimper_value 
        
        if(strip==False):      
            return np.array(zz),np.array(zzper),np.array(zzimper),obsLow,obsHigh
        else:
            return np.array(zz),np.array(zzper),np.array(zzimper),obsLow,obsHigh
    
    
    def ZIGZAG_ADAPTIVE_SCALER(self,zz,cummulative,scaler_factor,mid_factor,period_factor):
        scaler = 1
        count = 0
        cummulative = 0.0

        
        if(len(zz)>period_factor):

            for i in range(1,period_factor):
                cummulative =  cummulative + (zz[len(zz)-i][1]-zz[len(zz)-(i+1)][1]) # cumulative mid factor
                count = count+1

            '''
            cummulative2 = (zz[len(zz)-1][1]- zz[len(zz)-2][1])
            + (zz[len(zz)-2][1]- zz[len(zz)-3][1])
            + (zz[len(zz)-3][1]- zz[len(zz)-4][1])
            + (zz[len(zz)-4][1]- zz[len(zz)-5][1])
            + (zz[len(zz)-5][1]- zz[len(zz)-6][1])
            '''
            
            if((cummulative/(count)<mid_factor)):
                scaler = scaler_factor
            else: 
                scaler = 1.0/scaler_factor
            
        return scaler,cummulative
    
    
    def ZIGZAG(self,obsStart,obsEnd,period_filter_low,period_filter_high,close=False,strip=False):
        
        swingHigh = False
        swingLow = False
        obsLow = obsStart
        obsHigh = obsStart
        zz = []
        zz_len = obsEnd-obsStart
        
        zzper = np.full((zz_len,2), -1)
        zzimper = np.full((zz_len,2), -1)
        zzper_start = 0
        zzper_end = 0
        zzimper_start = 0
        zzimper_end = 0
        
        highd = self.high
        lowd = self.low
        
        if(close==True):
            highd = self.close
            lowd  = self.close
        for obs in range(obsStart,obsEnd):
            if (highd[obs] > highd[obsHigh]):       
                obsHigh = obs
                if (not swingLow and ((highd[obsHigh] - lowd[obsLow]) / lowd[obsLow]) * 100.0 >= period_filter_low):
                    zz.append([1,obsLow-obsStart,obs-obsStart])  
                    swingHigh = False
                    swingLow = True;
                    #print(obs-obsStart,obsLow-obsStart,0)
                if (swingLow):
                    obsLow = obsHigh; 
                    
            elif (lowd[obs] < lowd[obsLow]):    
                obsLow = obs    
                if (not swingHigh and ((highd[obsHigh] - lowd[obsLow]) / lowd[obsLow])* 100.0 >= period_filter_high):
                    zz.append([0,obsHigh-obsStart,obs-obsStart])  
                    swingHigh = True
                    swingLow = False
                    #print(obs-obsStart,obsHigh-obsStart,1)
                
                if (swingHigh):
                    obsHigh = obsLow
        
       
        for i in range(0,len(zz)):
            cur = zz[i]
            zzper  [cur[1]][0] = cur[1] #index
            zzimper[cur[2]][0] = cur[2] #index
            zzper  [cur[1]][1] = cur[0] #value
            zzimper[cur[2]][1] = cur[0] #value
       
        zzper_value = -1
        zzimper_value = -1
        for i in range(0,len(zzper)):
            if(zzper[i][1]>-1):
                zzper_value = zzper[i][1]
            
            if(zzimper[i][1]>-1):
                zzimper_value = zzimper[i][1]
   
            if(zzper_value>-1):
                zzper[i][1] = zzper_value    
            
            if(zzimper_value>-1):
                zzimper[i][1] = zzimper_value 
        
        if(strip==False):      
            return np.array(zz),np.array(zzper),np.array(zzimper),obsLow,obsHigh
        else:
            return np.array(zz),np.array(zzper),np.array(zzimper),obsLow,obsHigh
        
    def KAMAZIGZAG(self,er_period,ema_fast_period,ema_slow_period,obsStart,obsEnd,period_filter_low,period_filter_high,strip=False):
        
        swingHigh = False
        swingLow = False
        obsLow = obsStart
        obsHigh = obsStart
        zigzag = []
        
        kama_high = self.CKAMA(self.high,er_period,ema_fast_period,ema_slow_period)
        kama_low = self.CKAMA(self.low,er_period,ema_fast_period,ema_slow_period)
        #kama_close = self.CKAMA(self.close,er_period,ema_fast_period,ema_slow_period)
        
        for obs in range(obsStart,obsEnd):
            if (kama_high[obs] > kama_high[obsHigh]):       
                obsHigh = obs
                if (not swingLow and ((kama_high[obsHigh] - kama_low[obsLow]) / kama_low[obsLow]) * 100.0 >= period_filter_low):
                    zigzag.append([0,obsLow-obsStart,obs-obsStart]);  
                    swingHigh = False
                    swingLow = True;
                    #print(obs-obsStart,obsLow-obsStart,0)
                if (swingLow):
                    obsLow = obsHigh; 
                    
            elif (kama_low[obs] < kama_low[obsLow]):    
                obsLow = obs    
                if (not swingHigh and ((kama_high[obsHigh] - kama_low[obsLow]) / kama_low[obsLow])* 100.0 >= period_filter_high):
                    zigzag.append([1,obsHigh-obsStart,obs-obsStart]);  
                    swingHigh = True
                    swingLow = False
                    #print(obs-obsStart,obsHigh-obsStart,1)
                
                if (swingHigh):
                    obsHigh = obsLow
        
        
        if(strip==False):      
            return np.array(zigzag),obsLow,obsHigh
        else:
            return np.array(zigzag),obsLow,obsHigh
        
    def CKAMAZIGZAG(self,data,er_period,ema_fast_period,ema_slow_period,obsStart,obsEnd,period_filter_low,period_filter_high,strip=False):
        
        swingHigh = False
        swingLow = False
        obsLow = obsStart
        obsHigh = obsStart
        zigzag = []
        
        kama_data = self.CKAMA(data,er_period,ema_fast_period,ema_slow_period)

        for obs in range(obsStart,obsEnd):
            if (kama_data[obs] > kama_data[obsHigh]):       
                obsHigh = obs
                if (not swingLow and ((kama_data[obsHigh] - kama_data[obsLow]) / kama_data[obsLow]) * 100.0 >= period_filter_low):
                    zigzag.append([0,obsLow-obsStart,obs-obsStart]);  
                    swingHigh = False
                    swingLow = True;
                    #print(obs-obsStart,obsLow-obsStart,0)
                if (swingLow):
                    obsLow = obsHigh; 
                    
            elif (kama_data[obs] < kama_data[obsLow]):    
                obsLow = obs    
                if (not swingHigh and ((kama_data[obsHigh] - kama_data[obsLow]) / kama_data[obsLow])* 100.0 >= period_filter_high):
                    zigzag.append([1,obsHigh-obsStart,obs-obsStart]);  
                    swingHigh = True
                    swingLow = False
                    #print(obs-obsStart,obsHigh-obsStart,1)
                
                if (swingHigh):
                    obsHigh = obsLow
        
        
        if(strip==False):      
            return np.array(zigzag),obsLow,obsHigh
        else:
            return np.array(zigzag),obsLow,obsHigh
    
    def CONSECUTIVE_DIFF(self,data,strip=False):
        diff = []
        for i in range(1,len(data)):
            diff = np.abs(data[i]-data[i-1])
        diff = diff/(len(data)-1)
        
        if(strip==False):
            return np.array(diff)
        else:
            return np.array(diff)[self.start_index:self.max_view]
    
    #WaveTrend [LazyBear]
    def CM_Modified_Heik_Trend_Bars(self,ema1,upcolor,lowcolor,strip=False):
        colors = []
        usedEma = self.EMA(self.close,ema1)
        hlc3 = self.HLC()
        
        for i in range(0,len(hlc3)):
            if(hlc3[i]>=usedEma[i]):
                colors.append(upcolor)     
            else:
                colors.append(lowcolor)
            
        if(strip==False):
            return np.array(usedEma), np.array(colors)
        else:
            return np.array(usedEma)[self.start_index:self.max_view], np.array(colors)[self.start_index:self.max_view]
            
    def HLC(self,strip = False):
        hlc= []
        for i in range(0,len(self.close)):   
            hlc.append((self.high[i]+self.low[i]+self.close[i])/3.0)
            
        if(strip==False):
            return np.array(hlc)
        else:
            return np.array(hlc)[self.start_index:self.max_view]
    
    
    def RENKO(self,atr_period,strip=False):
        block_type = [-1]
        price = [self.close[0]]
        atr = self.ATR(atr_period)
        current_atr = atr[0]
        current_price = self.close[0]
        low_price = current_price - current_atr
        high_price = current_price + current_atr
        current_type = -1
        
        for i in range(1,len(self.close)):
            if(self.low[i]>high_price):
                if(current_type == -1 or current_type==0):
                    current_atr = atr[i]
                current_price = self.close[i]
                low_price = current_price - current_atr
                high_price = current_price + current_atr
                current_type = 1
            elif(self.high[i]<low_price):
                if(current_type == -1 or current_type==1):
                    current_atr = atr[i]
                current_price = self.close[i]
                low_price = current_price - current_atr
                high_price = current_price + current_atr
                current_type = 0
            price.append(current_price)    
            block_type.append(current_type)
            
        if(strip==False):
            return np.array(price),np.array(current_type)
        else:
            return np.array(price)[self.start_index:self.max_view],np.array(block_type)[self.start_index:self.max_view]
    
    
    
    def WMA(self,array, weightedPeriod,strip=False ):
        weightedPeriod = int(weightedPeriod)
        weightedArray = []

        for i in range(0,len(array)):
            _sum = 0
            if(i>=weightedPeriod):
                for j in range(0,weightedPeriod):
                    _sum += array[ i - j ] * ( weightedPeriod - j );    
                    #_sum += array[ i - j ] * ( j+1 );    
                weightedArray.append(_sum / (( weightedPeriod * ( weightedPeriod + 1 )) / 2 ));
            else:
                weightedArray.append(array[i])
             
        if(strip==False):
            return np.array(weightedArray)
        else:
            return np.array(weightedArray)[self.start_index:self.max_view]

        
    def CM_Ultimate_MA_MTF_V2(self,
                              src,
                              len1=20,
                              factorT3=7,
                              atype=1,
                              smoothe=2,
                              len2=50,
                              sfactorT3=7,
                              atype2=1,
                              strip=False):
        
        #print(str(np.round(np.sqrt(len1)))," ",str(len1)," ",str(len1/2))
        hullma = self.WMA(2*self.WMA(src, len1/2)-self.WMA(src, len1), np.round(np.sqrt(len1)))
        
        ema1 = self.EMA(src, len1)
        ema2 = self.EMA(ema1, len1)
        ema3 = self.EMA(ema2, len1)
        tema = 3 * (ema1 - ema2) + ema3
        
        factor = factorT3 *.10
         
        def gd(src, _len, factor):
            return self.EMA(src, _len) * (1 + factor) - self.EMA(self.EMA(src, _len), _len) * factor 
                                   
        def t3(src, _len, factor):
            return gd(gd(gd(src, _len, factor), _len, factor), _len, factor) 
        
        tilT3 = t3(src, len1, factor) 
        
        avg = tilT3
        if atype == 1:
            avg = self.SMA(src,len1) 
        elif atype == 2:
            avg = self.EMA(src,len1) 
        elif atype == 3: 
            avg = self.WMA(src,len1) 
        elif atype == 4: 
            avg = hullma 
        elif atype == 5: 
            #vwma(src, len1) 
            pass
        elif atype == 6: 
            #rma(src,len1) 
            pass
        elif atype == 7: 
            #3 * (ema1 - ema2) + ema3 
            pass
        
        hullma2 = self.WMA(2*self.WMA(src, len2/2)-self.WMA(src, len2), np.round(np.sqrt(len2)))
  
        sema1 = self.EMA(src, len2)
        sema2 = self.EMA(sema1, len2)
        sema3 = self.EMA(sema2, len2)
        stema = 3 * (sema1 - sema2) + sema3
        
        sfactor = sfactorT3 *.10
        
        stilT3 = t3(src, len2, sfactor) 
        
        avg2 = stilT3
        if atype2 == 1:
            avg2 = self.SMA(src,len1) 
        elif atype2 == 2:
            avg2 = self.EMA(src,len1) 
        elif atype2 == 3: 
            avg2 = self.WMA(src,len1) 
        elif atype2 == 4: 
            avg2 = hullma 
        elif atype2 == 5: 
            #vwma(src, len1) 
            pass
        elif atype2 == 6: 
            #rma(src,len1) 
            pass
        elif atype2 == 7: 
            #3 * (ema1 - ema2) + ema3 
            pass
        
        out = avg 
        out_two = avg2    
        
        out1 = out 
        out2 = out_two
        
        if(strip==False):
            return np.array(out1)
        else:
            return  np.array(out1)[self.start_index:self.max_view]             
    
    #MWR: MAX WITH RANGE
    def MWR(self,data,period,strip=False):
        maxd = []
        
        for i in range(0,len(data)):
            if(i>=period):
                maxd.append(data[i]/np.max(data[i-period:i+1]))    
            else:
                maxd.append(data[i]/np.max(data[0:i+1]))
                
        if(strip==False):
            return np.array(maxd)
        else:
            return  np.array(maxd)[self.start_index:self.max_view]             
        
    def CLOSE(self,strip=False):
        if(strip==False):
            return self.close
        else:
            return self.close[self.start_index:self.max_view]
    
    def HIGH(self,strip=False):
        if(strip==False):
            return self.high
        else:
            return self.high[self.start_index:self.max_view]
        
    def LOW(self,strip=False):
        if(strip==False):
            return self.low
        else:
            return self.low[self.start_index:self.max_view]
        
    def OPENTIME(self,strip=False):
        if(strip==False):
            return self.openTime
        else:
            return self.openTime[self.start_index:self.max_view]
        
    def CLOSETIME(self,strip=False):
        if(strip==False):
            return self.closeTime
        else:
            return self.closeTime[self.start_index:self.max_view]
        
    def OPEN(self,strip=False):
        if(strip==False):
            return self.open
        else:
            return self.open[self.start_index:self.max_view]
    
    def VOLUME(self,strip=False):
        if(strip==False):
            return self.volume
        else:
            return self.volume[self.start_index:self.max_view]
    
    def TRADES(self,strip=False):
        if(strip==False):
            return self.trades
        else:
            return self.trades[self.start_index:self.max_view]
    
    def CLOSE_TIME(self,strip=False):
        if(strip==False):
            return self.time
        else:
            return self.time[self.start_index:self.max_view]
        
    #NORMALIZE DATA 
    def norm_to_data(self,normal,toFix):
        min_val = min(normal)
        max_val = max(normal) 
        diff = max_val-min_val
        return ((toFix/100.0)*diff)+min_val

    def norm_to_data_ref(self,toFix,ref):
        min_val = 0
        max_val = 100
        diff = max_val-min_val
        arr = ((toFix/max(ref))*diff)+min_val
        scaler = MinMaxScaler(feature_range=(0,100))
        data = scaler.fit_transform(arr)
        return data
    
    def norm_to_data_ref_simple(self,toFix,ref):
        maxv = max(ref)

        return (toFix/maxv)
    
    def snip(self,dataset,index_window):
        dataset= dataset[index_window["start"]:(index_window["end"]+1)]
        return dataset
    
    def getKey(self,data,key):
        keyData = []
        for i in range(0,len(data)):
            keyData.append(data[i][key])   
        return np.array(keyData)
    
    
    def normalize_view(self,ops):
        #pp price point. oc ocilator
        new_ops = {}
        count = 0
        main_key = ""
        main_min = 0
        main_max = 0
        main_f_min = 0
        main_f_max = 0
        current_group = ""
        current_key = ""
        
        for key, value in ops.items():
            if(key.find("main_")>=0 and count == 0):
                main_key = key
                main_min = min(value)
                main_max = max(value)
                new_ops[key] = value/main_max #(value-main_min)/(main_max-main_min)
                
                
                '''
                print(key,value[0],main_max)
                new_ops[key] = (value/main_max)
                print(new_ops[key][0])
                main_f_min = min(new_ops[key])
                print(main_f_min)
                new_ops[key] = (new_ops[key]-main_f_min)
                print(new_ops[key][0])
                #main_f_max = max(new_ops[key])
                
                #new_ops[key] = (new_ops[key])*(1.0/(main_f_max))
                
                
                #(value-main_min)/(main_max-main_min)
                
                '''
            elif(key.find("main_")>=0):
                m_min = min(value)
                m_max = max(value)
                new_ops[key] = value/m_max #(value-m_min)/(m_max-m_min)    
            elif(count>0):
                if(key.find("pp_")>=0):        
                    new_ops[key] = value/main_max #(value-main_min)/(main_max-main_min)
                elif(key.find("_skl")>=0):
                    m_min = min(value)
                    m_max = max(value)
                    new_ops[key] = (value-m_min)/(m_max-m_min)    
                elif(key.find("_")>=0):
                    group = key.split("_")[0]
                    
                    if(current_group == group):
                        #print(1,key, group)
                        new_ops[key] = self.norm_to_data_ref_simple(value,ops[current_key])
                    else: 
                        #print(0,key, group)
                        current_group = group
                        current_key = key                        
                        new_ops[key] = self.norm_to_data_ref_simple(value,value)
                else:
                    new_ops[key] = value
                    
            else:
                raise SystemExit("main_price must be first! need it for normalization")
            
            count = count + 1
        return new_ops
                
        