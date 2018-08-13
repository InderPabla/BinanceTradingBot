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
from keras import optimizers
from sklearn.preprocessing import MinMaxScaler

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
    target = tim.getKeyWithShift(data,"close",1)
    
    tim.addKey(target,data,"target")
    tim.addKey(ema34,data,"ema34")
    tim.addKey(macdLine,data,"macdLine")
    tim.addKey(signalLine,data,"signalLine")
    tim.addKey(histogram,data,"histogram")
    tim.addKey(rsi,data,"rsi")
    tim.addKey(mfi,data,"mfi")
    
    
    with open(techFile, 'w') as f:
      json.dump(data, f, ensure_ascii=False)
      
else:   
    
    inputKeys = ['close','open','high','low','rsi','mfi','ema34','signalLine','macdLine','signalLine','histogram']
    
    inputSeqLen = 32
    inputFeatures = len(inputKeys)
    outputSeqLen = 8
    trainRatio = 0.8
    epochs = 500
    saveEpoch = 50
    
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
    result = result[100:len(result)]
    result = np.array(result)
    
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
        xSet.append(result[(i-inputSeqLen):i].flatten())
        ySet.append(result[i:(i+outputSeqLen),0])
        
        '''
        index = len(xSet)-1
        p = xSet[index][0][0]
        for j in range(0,inputSeqLen):
            xSet[index][j] =  xSet[index][j]*(1.0/(p*2.0))
            
        ySet[index] = ySet[index]*(1.0/(p*2.0))
        '''
        
        '''
        index = len(xSet)-1
        p = xSet[index][0]
        
        xSet[index] = xSet[index]*(1.0/(p))
        ySet[index] = ySet[index]*(1.0/(p))
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
    print("yTrain:",yTrain.shape)
    print("xTest:",xTest.shape)
    print("yTest:",yTest.shape)


    print("-------------") 
    print("-------------") 
    
    model = Sequential()
    model.add(Dense(1024,input_shape=(352,),activation='tanh',kernel_initializer="uniform"))
    print(model.output_shape)
    
    model.add(Dense(2048,activation='tanh'))
    print(model.output_shape)
    
    model.add(Dense(4096,activation='tanh'))
    print(model.output_shape)
    
    model.add(Dense(2048,activation='tanh'))
    print(model.output_shape)
    
    model.add(Dense(1024,activation='tanh'))
    print(model.output_shape)
    
    #model.add(Dense(512, activation='tanh'))
    #print(model.output_shape)
    
    #model.add(Dense(1024, activation='tanh'))
    #print(model.output_shape)
    #model.add(Dense(32,kernel_initializer="uniform",activation='sigmoid'))        
    model.add(Dense(outputSeqLen,kernel_initializer="uniform",activation='linear'))
    
    
    print(model.output_shape)
    
    sgd = optimizers.SGD(lr=0.001, decay=1e-7, momentum=0.9, nesterov=True)
    model.compile(loss='mean_squared_error', optimizer=sgd)
    #model.compile(loss='mse',optimizer="rmsprop")
    
    print(model.summary())
    
    
   
    
    
    
    plt.plot(yTest[len(yTest)-1], color = "red")
    plt.show()
    
    for i in range(0,int(epochs/saveEpoch)):
        
        history = model.fit(xTrain, yTrain, 
                            epochs=saveEpoch, 
                            batch_size=512, 
                            validation_data=(xTest, yTest),
                            verbose=1, 
                            shuffle=True)
        print("Saving ",i)
        model.save_weights("test1.h5")
        
        pricePred = model.predict(np.array([xTrain[len(xTrain)-100]]))[0]
        plt.plot(pricePred, color = "blue")
        plt.show()
        
        plt.plot(yTrain[len(yTrain)-100], color = "red")
        plt.show()
        
        plt.plot(history.history['loss'], label='train')
        plt.plot(history.history['val_loss'], label='test')
        plt.legend()
        plt.show()
    
    
    
    
    
    
    
    
    

    '''
    print(result[0][0])
    print(result[1][0])
    print(result[2][0])
    print(result[3][0])
    print(result[4][0])
    print(result[5][0])
    print(result[6][0])
    print(result[7][0])
    print(result[8][0])
    print(result[9][0])
    print("-------------") 
    print("-------------")  
    print("0",xTrain[0][0][0])
    print("0",xTrain[0][1][0])
    print("0",xTrain[0][2][0])
    print("1",xTrain[1][0][0])
    print("1",xTrain[1][1][0])
    print("1",xTrain[1][2][0])
    print("2",xTrain[2][0][0])
    print("2",xTrain[2][1][0])
    print("2",xTrain[2][2][0])
    print("3",xTrain[3][0][0])
    print("3",xTrain[3][1][0])
    print("3",xTrain[3][2][0])
    print("-------------") 
    print("-------------")  
    print("0",yTrain[0][0])
    print("0",yTrain[0][1])
    print("1",yTrain[1][0])
    print("1",yTrain[1][1])
    print("2",yTrain[2][0])
    print("2",yTrain[2][1])
    print("3",yTrain[3][0])
    print("3",yTrain[3][1])
    '''
   
    
    
    

'''
result =  np.array([[1,2,3],[4,5,6],[7,8,9],[3,6478,49],[7647,3568,9134],[745,842,95],[724,258,9],[457,28,59],[17,181,9],[27,28,29],[37,48,49],[67,58,7],[337,8536,736],[77,78,79],[97,98,99],[-314,-7,-45]])

row = round(0.9 * result.shape[0])
train = result[:int(row), :]

x_train = train[:, :-1]
y_train = train[:, -1]

print(row)
print(len(result))
print(len(x_train)," ",x_train[0]," ",x_train[1]," ",x_train[2])
print(len(y_train)," ",y_train[0]," ",y_train[1]," ",y_train[2]," ",y_train[3]," ",y_train[4])

def normalise_windows(window_data):
    normalised_data = []
    for window in window_data:
        normalised_window = [((float(p) / float(window[0])) - 1) for p in window]
        normalised_data.append(normalised_window)
    return normalised_data

def load_data(filename, seq_len, normalise_window):
    f = open(filename, 'rb').read()
    data = f.decode().split('\n')

    sequence_length = seq_len + 1
    result = []
    for index in range(len(data) - sequence_length):
        result.append(data[index: index + sequence_length])
    
    if normalise_window:
        result = normalise_windows(result)

    result = np.array(result)

    row = round(0.9 * result.shape[0])
    train = result[:int(row), :]
    np.random.shuffle(train)
    x_train = train[:, :-1]
    y_train = train[:, -1]
    x_test = result[int(row):, :-1]
    y_test = result[int(row):, -1]


   
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
    x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))  


    
    return [x_train, y_train, x_test, y_test]

seq_len = 50
X_train, y_train, X_test, y_test = load_data('sp500.csv', seq_len, True)

print(len(X_train)," ",len(X_train[0]))
print(len(y_train)," ",y_train[0])
'''