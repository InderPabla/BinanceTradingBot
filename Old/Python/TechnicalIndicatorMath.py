# -*- coding: utf-8 -*-
"""
Created on Thu Jan 11 19:27:18 2018

@author: InderTheGreat
"""
#CM_STOCK_MTF

import numpy as np
from sklearn.preprocessing import MinMaxScaler
import datetime
 
import pandas as pd  
import math as m

    
class TechnicalIndicatorMath:
    def __init__(self):
       self.className = "TechnicalIndicatorMath"
    
        
    def createHeikinAshi(self,ticks,kl):
        heikin = []
        for i in range(0,len(ticks)):
            heikinCand = []
            for j in range(0,len(ticks[i])):
                heikinCand.append(ticks[i][j])
                
                
            heikinCand[kl.CLOSE_INDEX] = self.hlocAvg(ticks[i],kl)
             
            if(i > 0 ):
                heikinCand[kl.OPEN_INDEX] = self.hlAvg(heikin[i-1],kl)
                heikinCand[kl.LOW_INDEX] = min([ticks[i][kl.LOW_INDEX],heikinCand[kl.OPEN_INDEX],heikinCand[kl.CLOSE_INDEX]])
                heikinCand[kl.HIGH_INDEX] = max([ticks[i][kl.LOW_INDEX],heikinCand[kl.OPEN_INDEX],heikinCand[kl.CLOSE_INDEX]])
            else:
                heikinCand[kl.OPEN_INDEX] = self.ocAvg(ticks[i],kl)
                
 
            heikin.append(heikinCand)  
            
        return heikin

    def hlocAvg(self,tick,kl):
        return (tick[kl.OPEN_INDEX]+tick[kl.CLOSE_INDEX]+tick[kl.HIGH_INDEX]+tick[kl.LOW_INDEX])/4.0
    
    def hlAvg(self,tick,kl):
        return (tick[kl.HIGH_INDEX]+tick[kl.LOW_INDEX])/2.0
    
    def ocAvg(self,tick,kl):
        return (tick[kl.OPEN_INDEX]+tick[kl.CLOSE_INDEX])/2.0
    
    def calculateSTORSI_Of_Index(self,ticks,kPer,dPer,rsiPer,stoPer,index):
        k = []
        d = []
        rsi = self.calculateRSI_Of_Key(ticks,index,rsiPer)
        
        highestPeriod = self.getHighestInPeriod(rsi,stoPer)
        lowestPeriod = self.getLowestInPeriod(rsi,stoPer)
        
        for i in range(0,len(rsi)):
            if(highestPeriod[i]-lowestPeriod[i]==0):
                k.append(0)
            else:
                k.append(((rsi[i]-lowestPeriod[i])/(highestPeriod[i]-lowestPeriod[i]))*100.0)
        
        k = self.calculateSMA(k,kPer)
        d = self.calculateSMA(k,dPer)
        
       
        
        return np.array(k),np.array(d)
        
    def calculateSRSI_Of_Index(self,rsi,period):
        srsi = []
       
        highestPeriod = self.getHighestInPeriod(rsi,period)
        lowestPeriod = self.getLowestInPeriod(rsi,period)
        
        for i in range(0,len(rsi)):
            s = 0
            if(highestPeriod[i] - lowestPeriod[i] == 0):
                s = 0
            else:
                s =  ((rsi[i] - lowestPeriod[i]) / (highestPeriod[i] - lowestPeriod[i])) #*100.0
            srsi.append(s)
            
        return np.array(srsi)
    
    def calculateSRSI_Of_Keys(self,data,period):
        srsi = []
        highs = self.getKey(data,'high')
        lows = self.getKey(data,'low')
        highestPeriod = self.getHighestInPeriod(highs,period)
        lowestPeriod = self.getLowestInPeriod(lows,period)
        
        for i in range(0,len(data)):
            if(highestPeriod[i] - lowestPeriod[i] == 0):
                s = 0
            else:
                s =  (data[i] - (lowestPeriod[i])) / (highestPeriod[i] - lowestPeriod[i])
            srsi.append(s)
            
        return np.array(srsi)
        
    def calculateSTO_Of_Keys(self,data,kPeriod,dPeriod):
        highs = self.getKey(data,'high')
        lows = self.getKey(data,'low')
        highestPeriod = self.getHighestInPeriod(highs,kPeriod)
        lowestPeriod = self.getLowestInPeriod(lows,kPeriod)
        
        print(len(highestPeriod)," ",len(lowestPeriod)," ",len(highs)," ",len(lows))
        k = []
        d = []
        
        for i in range(0,len(highs)):
            if(highestPeriod[i]-lowestPeriod[i]==0):
                k.append(0)
            else:
                k.append(((data[i]['close']-lowestPeriod[i])/(highestPeriod[i]-lowestPeriod[i]))*100.0)
        
        d = self.calculateAverage(k,dPeriod)
        
       
        
        return np.array(k),np.array(d)

    def calculateSTO(self,data,kPeriod,dPeriod):
   
        highestPeriod = self.getHighestInPeriod(data,kPeriod)
        lowestPeriod = self.getLowestInPeriod(data,kPeriod)
        
        print(len(highestPeriod)," ",len(lowestPeriod)," ",len(data)," ",len(data))
        k = []
        d = []
        
        for i in range(0,len(data)):
            if(highestPeriod[i]-lowestPeriod[i]==0):
                k.append(0)
            else:
                k.append(((data[i]-lowestPeriod[i])/(highestPeriod[i]-lowestPeriod[i]))*100.0)
        
        k = self.calculateSMA(k,kPeriod)
        d = self.calculateSMA(k,dPeriod)
        print(len(d)," dlenaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
       
        
        return np.array(k),np.array(d)
    
    def calculateSTO_Of_Index(self,data,kPeriod,dPeriod,kl):
        highs = self.getKey(data,kl.HIGH_INDEX)
        lows = self.getKey(data,kl.LOW_INDEX)
        highestPeriod = self.getHighestInPeriod(highs,kPeriod)
        lowestPeriod = self.getLowestInPeriod(lows,kPeriod)
        
        print(len(highestPeriod)," ",len(lowestPeriod)," ",len(highs)," ",len(lows))
        k = []
        d = []
        
        for i in range(0,len(highs)):
            if(highestPeriod[i]-lowestPeriod[i]==0):
                k.append(0)
            else:
                k.append(((data[i][kl.CLOSE_INDEX]-lowestPeriod[i])/(highestPeriod[i]-lowestPeriod[i]))*100.0)
        
        #k = self.calculateSMA(k,dPeriod)
        d = self.calculateSMA(k,dPeriod)
        
       
        
        return np.array(k),np.array(d)
        
    def getHighestInPeriod(self,data,period):
        highest = []
        for i in range(0,len(data)):
            highest.append(0)
            if(i>=period-1):
                newHighest = -100000000
                
                for j in range((i-period)+1,i+1):
                    if(data[j]>newHighest):
                        newHighest = data[j]
                        
                highest[i] = newHighest
        return np.array(highest)
    
    def getLowestInPeriod(self,data,period):
        lowest = []
        for i in range(0,len(data)):
            lowest.append(0)
            if(i>=period-1):
                newLowest= 10000000000000
                
                for j in range((i-period)+1,i+1):
                    if(data[j]<newLowest):
                        newLowest = data[j]
                        
                lowest[i] = newLowest
                
        return np.array(lowest)
                
    
    #MFI requires multiple keys and does not have a normal MFI function
    def calculateMFI_Of_Keys(self,data,period):
        priceKeys = ["high","low","close"]
        typicalPrice = self.averageMatrix_Of_Keys(data,priceKeys)
        change = self.calculateChange(typicalPrice)
        
        volume = self.getKey(data,"volume")
        rawMoneyFlow = self.multiplyMatrix(volume,typicalPrice)
        
        posMoneyFlow = [0]
        negMoneyFlow = [0]
        
        for i in range(1,len(change)):
            posMoneyFlow.append(0)
            negMoneyFlow.append(0)
            
            if(change[i]>0):
                posMoneyFlow[i] = rawMoneyFlow[i]
            elif(change[i]<0):
                negMoneyFlow[i] = rawMoneyFlow[i]
        
        
        posMoneyFlow14 = self.calculateSum(posMoneyFlow,period)  
        negMoneyFlow14 = self.calculateSum(negMoneyFlow,period)
        
        
        moneyFlowIndex = self.calculateInitialRSI(posMoneyFlow14,negMoneyFlow14)
         
        print("MFI:",len(moneyFlowIndex))
        return np.array(moneyFlowIndex)
      
        
    def calculateMFI_Of_Index(self,data,period,kl):
        priceKeys = [kl.HIGH_INDEX,kl.LOW_INDEX,kl.CLOSE_INDEX]
        typicalPrice = self.averageMatrix_Of_Keys(data,priceKeys)
        change = self.calculateChange(typicalPrice)
        
        volume = self.getKey(data,kl.VOLUME_INDEX)
        rawMoneyFlow = self.multiplyMatrix(volume,typicalPrice)
        
        posMoneyFlow = [0]
        negMoneyFlow = [0]
        
        for i in range(1,len(change)):
            posMoneyFlow.append(0)
            negMoneyFlow.append(0)
            
            if(change[i]>0):
                posMoneyFlow[i] = rawMoneyFlow[i]
            elif(change[i]<0):
                negMoneyFlow[i] = rawMoneyFlow[i]
        
        
        posMoneyFlow14 = self.calculateSum(posMoneyFlow,period)  
        negMoneyFlow14 = self.calculateSum(negMoneyFlow,period)
        
        
        moneyFlowIndex = self.calculateInitialRSI(posMoneyFlow14,negMoneyFlow14)
         
        print("MFI:",len(moneyFlowIndex))
        return np.array(moneyFlowIndex)
    
    def averageMatrix_Of_Keys(self,data,keys):
        avgAgg = []
        numOfKeys = len(keys)
        for i in range(0,len(data)):
            avg = 0.0
            for j in range(0,len(keys)):
                avg = avg+ data[i][keys[j]]   
            avg = avg/numOfKeys
            avgAgg.append(avg)
            
        print("AvgAgg:",len(avgAgg))
        return np.array(avgAgg)
    
    
    def getKey(self,data,key):
        keyData = []
        for i in range(0,len(data)):
            keyData.append(data[i][key]) 
            
        return np.array(keyData)


    def getKeyWithShift(self,data,key,shift):
        keyData = []
        dataLen = len(data)
        for i in range(0,dataLen):
            if(i<(dataLen-shift)):
                keyData.append(data[i+shift][key]) 
            else:
                keyData.append(data[i][key]) 
                
        return np.array(keyData)    
    
    def addKey(self,fromData,toData,key):
        for i in range(0,len(fromData)):
            toData[i][key] = fromData[i]
        
    def calculateRSI_Of_Key(self,data,key,period):
        
        #priceKeys = [kl.HIGH_INDEX,kl.LOW_INDEX,kl.CLOSE_INDEX]
        #typicalPrice = self.averageMatrix_Of_Keys(data,priceKeys)
        
        change = self.calculateChange_Of_Key(data,key)
        #change = self.calculateChange(typicalPrice)
        gain,loss = self.calculateGainAndLoss(change)
        averageGain = self.absoluteMatrix(self.calculateAverage(gain,period))
        averageLoss = self.absoluteMatrix(self.calculateAverage(loss,period))
        rsiInit = self.calculateInitialRSI(averageGain,averageLoss)
        rsi = self.caluclateEMA(rsiInit,period)
        
        
        
        print("RSI:",len(rsi))
        return np.array(rsiInit)

    def calculateRSI(self,data,period):
        change = self.calculateChange(data)
        gain,loss = self.calculateGainAndLoss(change)
        averageGain = self.absoluteMatrix(self.calculateAverage(gain,period))
        averageLoss = self.absoluteMatrix(self.calculateAverage(loss,period))
        rsiInit = self.calculateInitialRSI(averageGain,averageLoss)
        rsi = self.calculateAverage(rsiInit,period)
        
        print("RSI:",len(rsi))
        return np.array(rsi)
        
    def calculateChange_Of_Key(self,data,key):
        change = [0]    
        
        for i in range(1,len(data)):
           change.append(data[i][key]-data[i-1][key])
           
        return np.array(change)
    
    def calculateChange(self,data):
        change = [0]    
        
        for i in range(1,len(data)):
           change.append(data[i]-data[i-1])
           
        return np.array(change)
    
    def calculateGainAndLoss(self,change):
        gain = []
        loss = []
        
        for i in range(0,len(change)):
            gain.append(0)
            loss.append(0)
            
            if(change[i]<0):
                loss[i]=change[i]
            elif(change[i]>0):
                gain[i]=change[i] 
            
        return np.array(gain),np.array(loss)
    
    def absoluteMatrix(self,data):
        for i in range(0,len(data)):
           data[i] = abs(data[i]) 
        return np.array(data)
    
    def calculateAverage(self,data,period):
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
          
        print("A:",len(avg))
        return np.array(avg)

    def calculateSMA(self,data,period):
        avg = []
       
        for i in range(0,len(data)):
            avg.append(0)
            
            avgVal = 0.0
            if(i>=period-1):
                for j in range(i-(period-1),i+1):    
                    avgVal = avgVal+data[j]    
                avgVal = avgVal/period
                avg[i] = avgVal
           
        return np.array(avg)
    
    def caluclateSMA_Of_Key(self,data,index,period):
        avg = []
       
        for i in range(0,len(data)):
            avg.append(0)
            
            avgVal = 0.0
            if(i>=period-1):
                for j in range(i-(period-1),i+1):    
                    avgVal = avgVal+data[j][index]    
                avgVal = avgVal/period
                avg[i] = avgVal
           
        return np.array(avg)

    def calculateSum(self,data,period):
        add = []
        firstAdd = 0.0
        
        for i in range(0,period+1):
            add.append(0)
            firstAdd = firstAdd+data[i]
        
       
        add[len(add)-1] = firstAdd
        
        for i in range(period+1,len(data)):
            add.append(0)
            add[i] = (add[i-1]+data[i])-(data[i-period])
           
          
        print("Sum:",len(add))
        return np.array(add)
    
    def calculateInitialRSI(self,avgGain,avgLoss):
        rsi = []
        for i in range(0,len(avgGain)):
            rsi.append(0)
            if(avgLoss[i]>0):
                rsi[i] = 100.0-(100.0/(1+(avgGain[i]/avgLoss[i])))
            else:
                rsi[i] = 0.0
            
        return np.array(rsi)

    def divideMatrix(self,a,b):
        c= []
        if(not(len(a)==len(b))):
            return None
        else:
            for i in range(0,len(a)):
                if(b[i]==0):
                    c.append(0)
                else:
                    c.append(a[i]/b[i])
            return np.array(c)
                

        
    def calculateMACD_Of_Key(self,data,key,shortEMA,longEMA,signalEMA):
        emaShort = self.caluclateEMA_Of_Key(data,key,shortEMA)
        emaLong = self.caluclateEMA_Of_Key(data,key,longEMA)
        
        macdLine = self.subtractMatrix(emaShort,emaLong)
        signalLine = self.caluclateEMA(macdLine,signalEMA)
        
        histogram = self.subtractMatrix(macdLine,signalLine)
        
        return macdLine,signalLine,histogram
        
    def calculateMACD(self,data,key,shortEMA,longEMA,signalEMA):
        emaShort = self.caluclateEMA(data,key,shortEMA)
        emaLong = self.caluclateEMA(data,key,longEMA)
        
        macdLine = self.subtractMatrix(emaShort,emaLong)
        signalLine = self.caluclateEMA(macdLine,signalEMA)
        
        histogram = self.subtractMatrix(macdLine,signalLine)
        
        return np.array(macdLine),np.array(signalLine),np.array(histogram)
    
    def subtractMatrix(self,a,b):
        c= []
        if(not(len(a)==len(b))):
            return None
        else:
            for i in range(0,len(a)):
                c.append(a[i]-b[i])
            return np.array(c)
        
    def multiplyMatrix(self,a,b):
        c= []
        
        if(not(len(a)==len(b))):
            return None
        else:
            for i in range(0,len(a)):
                c.append(a[i]*b[i])
            return np.array(c)
    
    def multiplyScalar(self,a,b):
        c= []
       
        for i in range(0,len(a)):
            c.append(a[i])
        return np.array(c)
        
    def caluclateEMA(self,data,period):
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
            
            print(len(ema)," ",len(data))
            return np.array(ema)
        
    def caluclateEMA_Of_Key(self,data,key,period):
        ema = []
        if(len(data)<=period):
            return None
        else:
            avg = 0.0
            multi = (2.0/(period+1.0))
            
            for i in range(0,period):
                ema.append(0)
                avg = avg + data[i][key]
            
            avg = avg/period
            ema[len(ema)-1] = avg
            
            for i in range(0,period):
               ema[i] = avg
            
            for i in range(period,len(data)):
                ema.append(0)
                ema[i] = ((data[i][key]-ema[i-1])*multi) + ema[i-1]
            
            print(len(ema)," ",len(data))
            return np.array(ema)
    
    def norm(self,data,minV,maxV):
        '''
        minVal = np.min(data)
        maxVal = np.max(data)
        multi = abs((maxVal+minVal)/2.0)
        '''
        
        scaler = MinMaxScaler(feature_range=(minV, maxV))
        data = scaler.fit_transform(data)
        
        #minVal = np.min(data)
        #maxVal = np.max(data)
        
        #normalized = (data-minVal )/(maxVal -minVal)
        
        #return np.array(data)*(1.0/multi)
        return np.array(data)
    
    #stamp conversion 
    def convertToDateTime(self,stamp):
        strFormat = '%Y-%m-%d %I:%M %p'
        date = datetime.datetime.fromtimestamp(stamp/1000)
        return date.strftime(strFormat)

    def convertToDay(self,stamp):
        strFormat = '%d'
        date = datetime.datetime.fromtimestamp(stamp/1000)
        return date.strftime(strFormat)
        
    def dataBetweenDayIndex(self,data,lowDay,kl):
        low = -1


        for i in range(0,len(data)):
            day = int(self.convertToDay(data[i][kl.TIME_INDEX]))
            
            if(low==-1):
                if(day == lowDay):
                    low = i
                    break;

                
            #print(datetime.datetime.fromtimestamp(data[i][kl.TIME_INDEX]/1000))
            
            #print(self.convertToDateTime(data[i][kl.TIME_INDEX])," ",)
        return low;
    
    
    
    def snip(self,dataset,cutIndex):
        dataset= dataset[cutIndex:len(dataset)]
        return dataset

    
    
    
    
    
    '''
    ---------------------Panda rolling series caluclation---------------------
    '''
    
    
    
    #Moving Average  
    def MA(self,df, n):  
        MA = pd.Series(pd.rolling_mean(df['Close'], n), name = 'MA_' + str(n))  
        df = df.join(MA)  
        return df
    
    #Exponential Moving Average  
    def EMA(self,df, n):  
        EMA = pd.Series(pd.ewma(df['Close'], span = n, min_periods = n - 1), name = 'EMA_' + str(n))  
        df = df.join(EMA)  
        return df
    
    #Momentum  
    def MOM(self,df, n):  
        M = pd.Series(df['Close'].diff(n), name = 'Momentum_' + str(n))  
        df = df.join(M)  
        return df
    
    #Rate of Change  
    def ROC(self,df, n):  
        M = df['Close'].diff(n - 1)  
        N = df['Close'].shift(n - 1)  
        ROC = pd.Series(M / N, name = 'ROC_' + str(n))  
        df = df.join(ROC)  
        return df
    
    #Average True Range  
    def ATR(self,df, n):  
        i = 0  
        TR_l = [0]  
        while i < df.index[-1]:  
            TR = max(df.get_value(i + 1, 'High'), df.get_value(i, 'Close')) - min(df.get_value(i + 1, 'Low'), df.get_value(i, 'Close'))  
            TR_l.append(TR)  
            i = i + 1  
        TR_s = pd.Series(TR_l)  
        ATR = pd.Series(pd.ewma(TR_s, span = n, min_periods = n), name = 'ATR_' + str(n))  
        df = df.join(ATR)  
        return df
    
    #Bollinger Bands  
    def BBANDS(self,df, n):  
        MA = pd.Series(pd.rolling_mean(df['Close'], n))  
        MSD = pd.Series(pd.rolling_std(df['Close'], n))  
        b1 = 4 * MSD / MA  
        B1 = pd.Series(b1, name = 'BollingerB_' + str(n))  
        df = df.join(B1)  
        b2 = (df['Close'] - MA + 2 * MSD) / (4 * MSD)  
        B2 = pd.Series(b2, name = 'Bollinger%b_' + str(n))  
        df = df.join(B2)  
        return df
    
    #Pivot Points, Supports and Resistances  
    def PPSR(self,df):  
        PP = pd.Series((df['High'] + df['Low'] + df['Close']) / 3)  
        R1 = pd.Series(2 * PP - df['Low'])  
        S1 = pd.Series(2 * PP - df['High'])  
        R2 = pd.Series(PP + df['High'] - df['Low'])  
        S2 = pd.Series(PP - df['High'] + df['Low'])  
        R3 = pd.Series(df['High'] + 2 * (PP - df['Low']))  
        S3 = pd.Series(df['Low'] - 2 * (df['High'] - PP))  
        psr = {'PP':PP, 'R1':R1, 'S1':S1, 'R2':R2, 'S2':S2, 'R3':R3, 'S3':S3}  
        PSR = pd.DataFrame(psr)  
        df = df.join(PSR)  
        return df
    
    #Stochastic oscillator %K  
    def STOK(self,df):  
        SOk = pd.Series((df['Close'] - df['Low']) / (df['High'] - df['Low']), name = 'SO%k')  
        df = df.join(SOk)  
        return df
    
    #Stochastic oscillator %D  
    def STO(self,df, n):  
        SOk = pd.Series((df['Close'] - df['Low']) / (df['High'] - df['Low']), name = 'SO%k')  
        SOd = pd.Series(pd.ewma(SOk, span = n, min_periods = n - 1), name = 'SO%d_' + str(n))  
        df = df.join(SOd)  
        return df
    
    #Trix  
    def TRIX(self,df, n):  
        EX1 = pd.ewma(df['Close'], span = n, min_periods = n - 1)  
        EX2 = pd.ewma(EX1, span = n, min_periods = n - 1)  
        EX3 = pd.ewma(EX2, span = n, min_periods = n - 1)  
        i = 0  
        ROC_l = [0]  
        while i + 1 <= df.index[-1]:  
            ROC = (EX3[i + 1] - EX3[i]) / EX3[i]  
            ROC_l.append(ROC)  
            i = i + 1  
        Trix = pd.Series(ROC_l, name = 'Trix_' + str(n))  
        df = df.join(Trix)  
        return df
    
    #Average Directional Movement Index  
    def ADX(self,df, n, n_ADX):  
        i = 0  
        UpI = []  
        DoI = []  
        while i + 1 <= df.index[-1]:  
            UpMove = df.get_value(i + 1, 'High') - df.get_value(i, 'High')  
            DoMove = df.get_value(i, 'Low') - df.get_value(i + 1, 'Low')  
            if UpMove > DoMove and UpMove > 0:  
                UpD = UpMove  
            else: UpD = 0  
            UpI.append(UpD)  
            if DoMove > UpMove and DoMove > 0:  
                DoD = DoMove  
            else: DoD = 0  
            DoI.append(DoD)  
            i = i + 1  
        i = 0  
        TR_l = [0]  
        while i < df.index[-1]:  
            TR = max(df.get_value(i + 1, 'High'), df.get_value(i, 'Close')) - min(df.get_value(i + 1, 'Low'), df.get_value(i, 'Close'))  
            TR_l.append(TR)  
            i = i + 1  
        TR_s = pd.Series(TR_l)  
        ATR = pd.Series(pd.ewma(TR_s, span = n, min_periods = n))  
        UpI = pd.Series(UpI)  
        DoI = pd.Series(DoI)  
        PosDI = pd.Series(pd.ewma(UpI, span = n, min_periods = n - 1) / ATR)  
        NegDI = pd.Series(pd.ewma(DoI, span = n, min_periods = n - 1) / ATR)  
        ADX = pd.Series(pd.ewma(abs(PosDI - NegDI) / (PosDI + NegDI), span = n_ADX, min_periods = n_ADX - 1), name = 'ADX_' + str(n) + '_' + str(n_ADX))  
        df = df.join(ADX)  
        return df
    
    #MACD, MACD Signal and MACD difference  
    def MACD(self,df, n_fast, n_slow):  
        EMAfast = pd.Series(pd.ewma(df['Close'], span = n_fast, min_periods = n_slow - 1))  
        EMAslow = pd.Series(pd.ewma(df['Close'], span = n_slow, min_periods = n_slow - 1))  
        MACD = pd.Series(EMAfast - EMAslow, name = 'MACD_' + str(n_fast) + '_' + str(n_slow))  
        MACDsign = pd.Series(pd.ewma(MACD, span = 9, min_periods = 8), name = 'MACDsign_' + str(n_fast) + '_' + str(n_slow))  
        MACDdiff = pd.Series(MACD - MACDsign, name = 'MACDdiff_' + str(n_fast) + '_' + str(n_slow))  
        df = df.join(MACD)  
        df = df.join(MACDsign)  
        df = df.join(MACDdiff)  
        return df
    
    #Mass Index  
    def MassI(self,df):  
        Range = df['High'] - df['Low']  
        EX1 = pd.ewma(Range, span = 9, min_periods = 8)  
        EX2 = pd.ewma(EX1, span = 9, min_periods = 8)  
        Mass = EX1 / EX2  
        MassI = pd.Series(pd.rolling_sum(Mass, 25), name = 'Mass Index')  
        df = df.join(MassI)  
        return df
    
    #Vortex Indicator: http://www.vortexindicator.com/VFX_VORTEX.PDF  
    def Vortex(self,df, n):  
        i = 0  
        TR = [0]  
        while i < df.index[-1]:  
            Range = max(df.get_value(i + 1, 'High'), df.get_value(i, 'Close')) - min(df.get_value(i + 1, 'Low'), df.get_value(i, 'Close'))  
            TR.append(Range)  
            i = i + 1  
        i = 0  
        VM = [0]  
        while i < df.index[-1]:  
            Range = abs(df.get_value(i + 1, 'High') - df.get_value(i, 'Low')) - abs(df.get_value(i + 1, 'Low') - df.get_value(i, 'High'))  
            VM.append(Range)  
            i = i + 1  
        VI = pd.Series(pd.rolling_sum(pd.Series(VM), n) / pd.rolling_sum(pd.Series(TR), n), name = 'Vortex_' + str(n))  
        df = df.join(VI)  
        return df
    
    
    
    
    
    #KST Oscillator  
    def KST(self,df, r1, r2, r3, r4, n1, n2, n3, n4):  
        M = df['Close'].diff(r1 - 1)  
        N = df['Close'].shift(r1 - 1)  
        ROC1 = M / N  
        M = df['Close'].diff(r2 - 1)  
        N = df['Close'].shift(r2 - 1)  
        ROC2 = M / N  
        M = df['Close'].diff(r3 - 1)  
        N = df['Close'].shift(r3 - 1)  
        ROC3 = M / N  
        M = df['Close'].diff(r4 - 1)  
        N = df['Close'].shift(r4 - 1)  
        ROC4 = M / N  
        KST = pd.Series(pd.rolling_sum(ROC1, n1) + pd.rolling_sum(ROC2, n2) * 2 + pd.rolling_sum(ROC3, n3) * 3 + pd.rolling_sum(ROC4, n4) * 4, name = 'KST_' + str(r1) + '_' + str(r2) + '_' + str(r3) + '_' + str(r4) + '_' + str(n1) + '_' + str(n2) + '_' + str(n3) + '_' + str(n4))  
        df = df.join(KST)  
        return df
    
    #Relative Strength Index  
    def RSI(self,df, n):  
        i = 0  
        UpI = [0]  
        DoI = [0]  
        while i + 1 <= df.index[-1]:  
            UpMove = df.get_value(i + 1, 'High') - df.get_value(i, 'High')  
            DoMove = df.get_value(i, 'Low') - df.get_value(i + 1, 'Low')  
            if UpMove > DoMove and UpMove > 0:  
                UpD = UpMove  
            else: UpD = 0  
            UpI.append(UpD)  
            if DoMove > UpMove and DoMove > 0:  
                DoD = DoMove  
            else: DoD = 0  
            DoI.append(DoD)  
            i = i + 1  
        UpI = pd.Series(UpI)  
        DoI = pd.Series(DoI)  
        PosDI = pd.Series(pd.ewma(UpI, span = n, min_periods = n - 1))  
        NegDI = pd.Series(pd.ewma(DoI, span = n, min_periods = n - 1))  
        RSI = pd.Series(PosDI / (PosDI + NegDI), name = 'RSI_' + str(n))  
        df = df.join(RSI)  
        return df
    
    #True Strength Index  
    def TSI(self,df, r, s):  
        M = pd.Series(df['Close'].diff(1))  
        aM = abs(M)  
        EMA1 = pd.Series(pd.ewma(M, span = r, min_periods = r - 1))  
        aEMA1 = pd.Series(pd.ewma(aM, span = r, min_periods = r - 1))  
        EMA2 = pd.Series(pd.ewma(EMA1, span = s, min_periods = s - 1))  
        aEMA2 = pd.Series(pd.ewma(aEMA1, span = s, min_periods = s - 1))  
        TSI = pd.Series(EMA2 / aEMA2, name = 'TSI_' + str(r) + '_' + str(s))  
        df = df.join(TSI)  
        return df
    
    #Accumulation/Distribution  
    def ACCDIST(self,df, n):  
        ad = (2 * df['Close'] - df['High'] - df['Low']) / (df['High'] - df['Low']) * df['Volume']  
        M = ad.diff(n - 1)  
        N = ad.shift(n - 1)  
        ROC = M / N  
        AD = pd.Series(ROC, name = 'Acc/Dist_ROC_' + str(n))  
        df = df.join(AD)  
        return df
    
    #Chaikin Oscillator  
    def Chaikin(self,df):  
        ad = (2 * df['Close'] - df['High'] - df['Low']) / (df['High'] - df['Low']) * df['Volume']  
        Chaikin = pd.Series(pd.ewma(ad, span = 3, min_periods = 2) - pd.ewma(ad, span = 10, min_periods = 9), name = 'Chaikin')  
        df = df.join(Chaikin)  
       
        return df
    
    #Money Flow Index and Ratio  
    def MFI(self,df, n):  
        PP = (df['High'] + df['Low'] + df['Close']) / 3  
        i = 0  
        PosMF = [0]  
        while i < df.index[-1]:  
            if PP[i + 1] > PP[i]:  
                PosMF.append(PP[i + 1] * df.get_value(i + 1, 'Volume'))  
            else:  
                PosMF.append(0)  
            i = i + 1  
        PosMF = pd.Series(PosMF)  
        TotMF = PP * df['Volume']  
        MFR = pd.Series(PosMF / TotMF)  
        MFI = pd.Series(pd.rolling_mean(MFR, n), name = 'MFI_' + str(n))  
        df = df.join(MFI)  
        return df
    
    #On-balance Volume  
    def OBV(self,df, n):  
        i = 0  
        OBV = [0]  
        while i < df.index[-1]:  
            if df.get_value(i + 1, 'Close') - df.get_value(i, 'Close') > 0:  
                OBV.append(df.get_value(i + 1, 'Volume'))  
            if df.get_value(i + 1, 'Close') - df.get_value(i, 'Close') == 0:  
                OBV.append(0)  
            if df.get_value(i + 1, 'Close') - df.get_value(i, 'Close') < 0:  
                OBV.append(-df.get_value(i + 1, 'Volume'))  
            i = i + 1  
        OBV = pd.Series(OBV)  
        OBV_ma = pd.Series(pd.rolling_mean(OBV, n), name = 'OBV_' + str(n))  
        df = df.join(OBV_ma)  
        return df
    
    #Force Index  
    def FORCE(self,df, n):  
        F = pd.Series(df['Close'].diff(n) * df['Volume'].diff(n), name = 'Force_' + str(n))  
        df = df.join(F)  
        return df
    
    #Ease of Movement  
    def EOM(self,df, n):  
        EoM = (df['High'].diff(1) + df['Low'].diff(1)) * (df['High'] - df['Low']) / (2 * df['Volume'])  
        Eom_ma = pd.Series(pd.rolling_mean(EoM, n), name = 'EoM_' + str(n))  
        df = df.join(Eom_ma)  
        return df
    
    #Commodity Channel Index  
    def CCI(self,df, n):  
        PP = (df['High'] + df['Low'] + df['Close']) / 3  
        CCI = pd.Series((PP - pd.rolling_mean(PP, n)) / pd.rolling_std(PP, n), name = 'CCI_' + str(n))  
        df = df.join(CCI)  
        return df
    
    #Coppock Curve  
    def COPP(self,df, n):  
        M = df['Close'].diff(int(n * 11 / 10) - 1)  
        N = df['Close'].shift(int(n * 11 / 10) - 1)  
        ROC1 = M / N  
        M = df['Close'].diff(int(n * 14 / 10) - 1)  
        N = df['Close'].shift(int(n * 14 / 10) - 1)  
        ROC2 = M / N  
        Copp = pd.Series(pd.ewma(ROC1 + ROC2, span = n, min_periods = n), name = 'Copp_' + str(n))  
        df = df.join(Copp)  
        return df
    
    #Keltner Channel  
    def KELCH(self,df, n):  
        KelChM = pd.Series(pd.rolling_mean((df['High'] + df['Low'] + df['Close']) / 3, n), name = 'KelChM_' + str(n))  
        KelChU = pd.Series(pd.rolling_mean((4 * df['High'] - 2 * df['Low'] + df['Close']) / 3, n), name = 'KelChU_' + str(n))  
        KelChD = pd.Series(pd.rolling_mean((-2 * df['High'] + 4 * df['Low'] + df['Close']) / 3, n), name = 'KelChD_' + str(n))  
        df = df.join(KelChM)  
        df = df.join(KelChU)  
        df = df.join(KelChD)  
        return df
    
    #Ultimate Oscillator  
    def ULTOSC(self,df):  
        i = 0  
        TR_l = [0]  
        BP_l = [0]  
        while i < df.index[-1]:  
            TR = max(df.get_value(i + 1, 'High'), df.get_value(i, 'Close')) - min(df.get_value(i + 1, 'Low'), df.get_value(i, 'Close'))  
            TR_l.append(TR)  
            BP = df.get_value(i + 1, 'Close') - min(df.get_value(i + 1, 'Low'), df.get_value(i, 'Close'))  
            BP_l.append(BP)  
            i = i + 1  
        UltO = pd.Series((4 * pd.rolling_sum(pd.Series(BP_l), 7) / pd.rolling_sum(pd.Series(TR_l), 7)) + (2 * pd.rolling_sum(pd.Series(BP_l), 14) / pd.rolling_sum(pd.Series(TR_l), 14)) + (pd.rolling_sum(pd.Series(BP_l), 28) / pd.rolling_sum(pd.Series(TR_l), 28)), name = 'Ultimate_Osc')  
        df = df.join(UltO)  
        return df
    
    #Donchian Channel  
    def DONCH(self,df, n):  
        i = 0  
        DC_l = []  
        while i < n - 1:  
            DC_l.append(0)  
            i = i + 1  
        i = 0  
        while i + n - 1 < df.index[-1]:  
            DC = max(df['High'].ix[i:i + n - 1]) - min(df['Low'].ix[i:i + n - 1])  
            DC_l.append(DC)  
            i = i + 1  
        DonCh = pd.Series(DC_l, name = 'Donchian_' + str(n))  
        DonCh = DonCh.shift(n - 1)  
        df = df.join(DonCh)  
        return df
    
    #Standard Deviation  
    def STDDEV(self,df, n):  
        df = df.join(pd.Series(pd.rolling_std(df['Close'], n), name = 'STD_' + str(n)))  
        return df  
        