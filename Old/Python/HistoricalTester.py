# -*- coding: utf-8 -*-
"""
Created on Thu Jan 11 19:27:18 2018

@author: InderTheGreat
"""
import numpy as np
import os
import time
from pprint import pprint
import io,json
from TechnicalIndicatorMath import TechnicalIndicatorMath

import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
import matplotlib.pyplot as plt

from sklearn.preprocessing import MinMaxScaler

from keras import optimizers
add_indicator = False
orgFile = 'XRP_ORG.json'
techFile = 'XRP_TECH_IND.json'

if (add_indicator==True):
    tim = TechnicalIndicatorMath()
    data = json.load(open(orgFile))
    
    
    
    
    
    ema34 = tim.caluclateEMA_Of_Key(data,"close",34)
    macdLine,signalLine,histogram = tim.calculateMACD_Of_Key(data,"close",12,26,9)
    rsi = tim.calculateRSI_Of_Key(data,"close",14)
    mfi = tim.calculateMFI_Of_Keys(data,14)
    k,d = tim.calculateSTO_Of_Keys(data,14,3)
    
    target = tim.getKeyWithShift(data,"close",1)
    close = tim.getKey(data,"close")
    high = tim.getKey(data,"high")
    low = tim.getKey(data,"low")
    open2 = tim.getKey(data,"open")
    
   
    ema34 = np.array(ema34)
    macdLine= np.array(macdLine)
    signalLine= np.array(signalLine)
    histogram= np.array(histogram)
    rsi= np.array(rsi)
    mfi= np.array(mfi)
    k= np.array(k)
    d= np.array(d)
    
    open2= np.array(open2)
    high= np.array(high)
    close= np.array(close)
    low= np.array(low)
    target= np.array(target)
    
    
    tim.addKey(target*1000000.0,data,"target")
    tim.addKey(ema34*1000000.0,data,"ema34")
    
    tim.addKey(high*1000000.0,data,"high2")
    tim.addKey(close*1000000.0,data,"close2")
    tim.addKey(low*1000000.0,data,"low2")
    tim.addKey(open2*1000000.0,data,"open2")

    tim.addKey(macdLine*1000000.0,data,"macdLine")
    tim.addKey(signalLine*1000000.0,data,"signalLine")
    tim.addKey(histogram*1000000.0,data,"histogram")
    tim.addKey(rsi,data,"rsi")
    tim.addKey(mfi,data,"mfi")
    
    tim.addKey(k,data,"k")
    tim.addKey(k,data,"d")
    
    with open(techFile, 'w') as f:
      json.dump(data, f, ensure_ascii=False)
      
else:   
    
    inputKeys = ['close2','high2','low2','rsi','mfi','macdLine','signalLine','k','d']
    
    inputSeqLen = 40
    inputFeatures = len(inputKeys)
    outputSeqLen = 2
    trainRatio = 0.8
    epochs = 10000
    saveEpoch = 25
    
    tim = TechnicalIndicatorMath()
    data = json.load(open(techFile))    
    
    #ignoring volume and target for now.
    
    
    result = []
    for i in range(0,len(data)):
        row = []
        for j in range(0,len(inputKeys)):
            row.append(data[i][inputKeys[j]])
        
        result.append(row)
    
    '''
    result[0][0] = 0
    result[1][0] = 1
    result[2][0] = 2
    result[3][0] = 3
    result[4][0] = 4
    result[5][0] = 5
    result[6][0] = 6
    result[7][0] = 7
    result[8][0] = 8
    '''
    
    result = np.array(result)
    result = result[100:len(result)]
    
    # normalize features
    scaler = MinMaxScaler(feature_range=(0, 1))
    result = scaler.fit_transform(result)
    result = np.array(result)
    
    print("Result Size: ",len(result))
    print("Example Result: ",result[14000])
    
    print("-------------") 
    print("-------------") 
    
    #result = result[10000:11000]
    
    xSet = []
    ySet = []
    
    xTrain = []
    yTrain = []
    
    xTest = []
    yTest = []
    
    
    for i in range(inputSeqLen,len(result)-outputSeqLen):
        xSet.append(result[(i-inputSeqLen):i])
        ySet.append(result[i:(i+outputSeqLen),0])
        
        '''
        index = len(xSet)-1
        p = xSet[index][0][0]
        for j in range(0,inputSeqLen):
            xSet[index][j] =  xSet[index][j]*(1.0/(p*2.0))
            
        ySet[index] = ySet[index]*(1.0/(p*2.0))
        '''
        
    xSet = np.array(xSet)
    ySet = np.array(ySet)
    
    trainEndIndex = int(trainRatio*len(xSet))
    xTrain = xSet[0:trainEndIndex]
    yTrain = ySet[0:trainEndIndex]
    xTest = xSet[trainEndIndex:len(xSet)]
    yTest = ySet[trainEndIndex:len(xSet)]
    
    print("xSet:",xSet.shape)
    print("ySet:",ySet.shape)
    print("xTrian:",xTrain.shape)
    print("xTrain:",yTrain.shape)
    print("xTest:",xTest.shape)
    print("yTest:",yTest.shape)


    print("-------------") 
    print("-------------") 
    
    model = Sequential()
    model.add(LSTM(512,input_shape=(xTrain.shape[1], xTrain.shape[2]),return_sequences=True))
    print(model.output_shape)
    
    model.add(LSTM(512,input_shape=(xTrain.shape[1], xTrain.shape[2]),return_sequences=False))
    print(model.output_shape)
    
 
    
    #model.add(Dense(512, activation='tanh'))
    #print(model.output_shape)
    
    #model.add(Dense(1024, activation='tanh'))
    #print(model.output_shape)
    #model.add(Dense(32,kernel_initializer="uniform",activation='sigmoid'))  

    model.add(Dense(1024))
    model.add(Dense(1024))  
    model.add(Dense(outputSeqLen,activation='linear'))
    
    
    print(model.output_shape)
    
    model.load_weights("test1 - Copy.h5") 
    model.compile(loss='mse',optimizer="adam")
   
    print(model.summary())
    
    

    
    pricePred = model.predict(np.array(xTest[0:len(yTest)-2000]))
    priceCompile = []
    for j in range(0,len(pricePred),outputSeqLen):
        priceCompile.append(pricePred[j])
    priceCompile = np.array(priceCompile).flatten()
  
    
    price = np.array(yTest[0:len(yTest)-2000])
    reaPriceCompile = []
    for j in range(0,len(price),outputSeqLen):
        reaPriceCompile.append(price[j])
    reaPriceCompile = np.array(reaPriceCompile).flatten()
    
    fig = plt.gcf()
    fig.set_size_inches(35.5, 10.5,forward=True)
    plt.plot(priceCompile, color = "blue")
    plt.plot(reaPriceCompile, color = "red")
    plt.show()
    
    b = 0
    profit = 0
    for i in range(1,len(reaPriceCompile)):
        cur = reaPriceCompile[i-1]
        nex = priceCompile[i]
        
        if (nex>cur):
            profit = reaPriceCompile[i]-reaPriceCompile[i-1]

    print(profit)
    
    
    
    
    

    