from TraderBinance import TraderBinance as tb
import numpy as np
np.seterr(divide='ignore', invalid='ignore')

class TraderMath:

    def __init__(self):
        self.className = "TraderMath"
        
    def getKey(self,data,key):
        return data[:,key]
    
    def kline_to_heikin(self,kline):
        heikin = []
        
        for i in range(0,len(kline)):
            heikin_cand = []
            
            for j in range(0,len(kline[i])):
                heikin_cand.append(kline[i][j])
  
            heikin_cand[tb.CLOSE_INDEX] = self.hloc_avg(kline[i])
             
            if(i > 0 ):
                heikin_cand[tb.OPEN_INDEX] = self.hl_avg(heikin[i-1])
                heikin_cand[tb.LOW_INDEX] = min([kline[i][tb.LOW_INDEX],heikin_cand[tb.OPEN_INDEX],heikin_cand[tb.CLOSE_INDEX]])
                heikin_cand[tb.HIGH_INDEX] = max([kline[i][tb.LOW_INDEX],heikin_cand[tb.OPEN_INDEX],heikin_cand[tb.CLOSE_INDEX]])
            else:
                heikin_cand[tb.OPEN_INDEX] = self.oc_avg(kline[i])
                
 
            heikin.append(heikin_cand)  
            
        return np.array(heikin)
    
    def kline_to_smoothed_heikin(self,KLINE,OPEN,CLOSE,HIGH,LOW):
        heikin = []
        
        for i in range(0,len(KLINE)):
            heikin_cand = []
            
            for j in range(0,len(KLINE[i])):
                heikin_cand.append(KLINE[i][j])
  
            heikin_cand[tb.CLOSE_INDEX] = self.hloc_avg_2(OPEN[i],CLOSE[i],HIGH[i],LOW[i])
             
            if(i > 0 ):
                heikin_cand[tb.OPEN_INDEX] = self.hl_avg(heikin[i-1])
                heikin_cand[tb.LOW_INDEX] = min([LOW[i],heikin_cand[tb.OPEN_INDEX],heikin_cand[tb.CLOSE_INDEX]])
                heikin_cand[tb.HIGH_INDEX] = max([LOW[i],heikin_cand[tb.OPEN_INDEX],heikin_cand[tb.CLOSE_INDEX]])
            else:
                heikin_cand[tb.OPEN_INDEX] = self.oc_avg_2(OPEN[i],CLOSE[i])
                
 
            heikin.append(heikin_cand)  
        
        heikin = np.array(heikin)
        
        return self.getKey(heikin,tb.OPEN_INDEX), self.getKey(heikin,tb.CLOSE_INDEX), self.getKey(heikin,tb.HIGH_INDEX), self.getKey(heikin,tb.LOW_INDEX)
    
    def hloc_avg(self,tick):
        return (tick[tb.OPEN_INDEX]+tick[tb.CLOSE_INDEX]+tick[tb.HIGH_INDEX]+tick[tb.LOW_INDEX])/4.0
    
    def hloc_avg_2(self,opn,close,high,low):
        return (opn+close+high+low)/4.0
    
    def hl_avg(self,tick):
        return (tick[tb.HIGH_INDEX]+tick[tb.LOW_INDEX])/2.0
    
    def hl_avg_2(self,high,low):
        return (high+low)/2.0
    
    
    def oc_avg(self,tick):
        return (tick[tb.OPEN_INDEX]+tick[tb.CLOSE_INDEX])/2.0
    
    def oc_avg_2(self,opn,close):
        return (opn+close)/2.0
    
    def subtract_matrix(self,a,b):
        return a-b
    
    def power_matrix(self,a,b):
        c = []
        for i in range(0,len(a)):
            c.append(pow(a[i],b))    
        return np.array(c)
    
    def multiply_matrix(self,a,b):
        return a*b
    
    def divide_matrix(self,a,b):
        return np.divide(a,b)
    
    def add_matrix(self,a,b):
        return a+b
    
    def abs_matrix(self,a):
        return abs(a)
    
    def change(self,a):
        change = [0]    
        for i in range(1,len(a)):
           change.append(a[i]-a[i-1])
        return np.array(change)
        
    def gain_and_loss(self,a):
        gain = []
        loss = []
        for i in range(0,len(a)):
            gain.append(0)
            loss.append(0)
            if(a[i]<0):
                loss[i]=a[i]
            elif(a[i]>0):
                gain[i]=a[i]          
        return np.array(gain),np.array(loss)


    
    
    