from TraderStrategy import TraderStrategy as TraderStrategy
from TraderControl import TraderControl as TraderControl
from TraderPlot import TraderPlot as TraderPlot
from TraderDetail import TraderDetail as TraderDetail
from TraderBinance import TraderBinance as tb
from sklearn.preprocessing import MinMaxScaler
from sklearn.utils import shuffle

from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.layers import LSTM
from keras import optimizers
from keras import regularizers

import numpy as np
import tensorflow as tf


xSet = []
ySet = []
xTrain = []
yTrain = []
xTest = []
yTest = []


tp = TraderPlot()
index_window = {"start":250,"end":400000}
hideAmount = 1000
ops = {}

inputSeqLen = 50
outputSeqLen = 2
outputFrameLen = 5
scaler = MinMaxScaler(feature_range=(0, 1))
t = []
classCount = [0,0] 



kline1 = np.load("ETHBTC_1h_Binance_Numpy.txt.npy")

kline_detail1 = TraderDetail(kline1)

heikin1 = kline_detail1.HEIKIN()
heikin_detail1 =  TraderDetail(heikin1)
ema341 = heikin_detail1.EMA(heikin_detail1.close,34)
volume1 = heikin_detail1.volume
efi131 = heikin_detail1.EFI(13)
efiema121 = heikin_detail1.EMA(efi131,12)
bb20_up1,bb20_mid1,bb20_low1 = heikin_detail1.BB(20)
rsi,k_srsi,d_srsi = heikin_detail1.SRSI(3,3,14,14)
rsi = rsi/100.0
k_srsi = k_srsi/100.0
d_srsi = d_srsi/100.0




#index_window = {"start":len(ema34)-35000,"end":len(ema34)-1000}
ops["heikin1"] = heikin_detail1.snip(heikin1,index_window)
ops["close1"] = heikin_detail1.snip(heikin_detail1.close,index_window)
ops["bb20_up1"] = heikin_detail1.snip(bb20_up1,index_window)
ops["bb20_mid1"] = heikin_detail1.snip(bb20_mid1,index_window)
ops["bb20_low1"] = heikin_detail1.snip(bb20_low1,index_window)
ops["ema341"] = heikin_detail1.snip(ema341,index_window)
ops["efi131"] = heikin_detail1.snip(efi131,index_window)
ops["efiema121"] = heikin_detail1.snip(efiema121,index_window)
ops["rsi1"] = heikin_detail1.snip(efiema121,index_window)
ops["k_srsi1"] = heikin_detail1.snip(efiema121,index_window)
ops["d_srsi1"] = heikin_detail1.snip(efiema121,index_window)




'''
print('Loading Con 1')
for i in range(inputSeqLen,len(ops["close1"])-(outputSeqLen+outputFrameLen)):
    if(i%10000==0):
        print (i)
    vclose = scaler.fit_transform(ops["close1"][(i-inputSeqLen):i])
    vema34 = scaler.fit_transform(ops["ema341"][(i-inputSeqLen):i])
    vbb20_up = scaler.fit_transform(ops["bb20_up1"][(i-inputSeqLen):i])
    vbb20_mid = scaler.fit_transform(ops["bb20_mid1"][(i-inputSeqLen):i])
    vbb20_low = scaler.fit_transform(ops["bb20_low1"][(i-inputSeqLen):i])
    vefiema12 = scaler.fit_transform(ops["efiema121"][(i-inputSeqLen):i])
    vefi13 = scaler.fit_transform(ops["efi131"][(i-inputSeqLen):i])
    vrsi = ops["rsi1"][(i-inputSeqLen):i]
    vk_srsi = ops["k_srsi1"][(i-inputSeqLen):i]
    vd_srsi = ops["d_srsi1"][(i-inputSeqLen):i]

    
    #x = np.vstack((vclose,vema34,vbb20_up,vbb20_mid,vbb20_low,vefiema12,vefi13,vrsi,vk_srsi,vd_srsi)).T
    x = np.vstack((vclose,vema34,vefi13,vrsi,vk_srsi,vd_srsi)).T
    
    y = [0.0,0.0]
    buy = True
    countema = 0
    for j in range(i,i+outputFrameLen):
        if(ops["ema341"][j]<ops["ema341"][j-1]):
            buy = False
            #break
        else:
            countema = countema+1
    
    countrsi = 0
    for j in range(i,i+outputFrameLen):
        if(ops["rsi1"][j]<ops["rsi1"][j-1]):
            buy = False
        else:
            #break
            countrsi = countrsi+1
    
    if(countema>=5 and ops["ema341"][i]<ops["ema341"][i+(outputFrameLen-1)]):

        buy = True
    else:
        buy = False
        
    if buy:
        y[0] = 1.0
        classCount[0] = classCount[0]+1
        t.append(0.8)
    else:
        y[1] = 1.0
        t.append(0.2)
        classCount[1] = classCount[1]+1
     
    if(i>=inputSeqLen+hideAmount):
        if buy:
            ySet.insert(0,y)
            xSet.insert(0,x.flatten())
        else:
            ySet.append(y)
            xSet.append(x.flatten())




xSet = np.array(xSet)    
ySet = np.array(ySet)  
t = np.array(t)     


print('Legths')
print(len(xSet))
print(len(ySet))
print(len(t))
print("Buy: ",classCount[0]," Sell: ",classCount[1])

    
xSet, ySet  = shuffle(xSet, ySet, random_state=42)


tp.fig()
tp.plot_check_previous(scaler.fit_transform(ops["close1"][inputSeqLen:len(ops["close1"])-(outputSeqLen+outputFrameLen)][0:1000]),'blue','cyan')
tp.plot_check_previous(scaler.fit_transform(ops["ema341"][inputSeqLen:len(ops["ema341"])-(outputSeqLen+outputFrameLen)][0:1000]),'green','red')
tp.plot(t[0:1000],'orange')
tp.show()

trainRatio = 0.7

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



model = Sequential()
model.add(Dense(2048,input_shape=(inputSeqLen*6,),activation='relu',
                ))
print(model.output_shape)
model.add(Dropout(0.1))
model.add(Dense(1024,activation='relu',
                ))
print(model.output_shape)
model.add(Dropout(0.1)) 
model.add(Dense(512,activation='relu',
                ))
print(model.output_shape)

model.add(Dense(256,activation='relu',
               ))
print(model.output_shape)

model.add(Dense(128,activation='relu',
                ))
print(model.output_shape)

model.add(Dense(64,activation='relu',
                ))
print(model.output_shape)

model.add(Dense(32,activation='relu',
                ))
print(model.output_shape)

model.add(Dense(16,activation='relu',
                ))
print(model.output_shape)

model.add(Dense(outputSeqLen,activation='softmax'))


print(model.output_shape)

#model.compile(loss='categorical_crossentropy', optimizer='adam')
#sgd = optimizers.SGD(lr=0.0001, decay=1e-7, momentum=0.9, nesterov=True)
#model.compile(loss='mean_squared_error', optimizer=sgd)




#opt = optimizers.SGD(lr=0.01)
#model.compile(loss = "categorical_crossentropy", optimizer = opt)



model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

#sgd = optimizers.SGD(lr=0.0001, decay=1e-7, momentum=0.9, nesterov=True)
#model.compile(loss='mean_squared_error', optimizer=sgd, metrics=['accuracy'])

print(model.summary())

preTest=[]
price_last = []
for i in range(inputSeqLen,1000+inputSeqLen):
    vclose = scaler.fit_transform(ops["close1"][(i-inputSeqLen):i])
    vema34 = scaler.fit_transform(ops["ema341"][(i-inputSeqLen):i])
    vbb20_up = scaler.fit_transform(ops["bb20_up1"][(i-inputSeqLen):i])
    vbb20_mid = scaler.fit_transform(ops["bb20_mid1"][(i-inputSeqLen):i])
    vbb20_low = scaler.fit_transform(ops["bb20_low1"][(i-inputSeqLen):i])
    vefiema12 = scaler.fit_transform(ops["efiema121"][(i-inputSeqLen):i])
    vefi13 = scaler.fit_transform(ops["efi131"][(i-inputSeqLen):i])
    vrsi = ops["rsi1"][(i-inputSeqLen):i]
    vk_srsi = ops["k_srsi1"][(i-inputSeqLen):i]
    vd_srsi = ops["d_srsi1"][(i-inputSeqLen):i]

    
    #x = np.vstack((vclose,vema34,vbb20_up,vbb20_mid,vbb20_low,vefiema12,vefi13,vrsi,vk_srsi,vd_srsi)).T
    x = np.vstack((vclose,vema34,vefi13,vrsi,vk_srsi,vd_srsi)).T

    #vvolume = scaler.fit_transform(ops["volume"][(i-inputSeqLen):i].flatten())
    
    price_last.append(vclose[len(vclose)-1])
    
    preTest.append(x.flatten())

preTest= np.array(preTest)

for i in range(0,100000):
    
    buy=False
    price = 0.0
    profit = 0.0
   
    if(i%50==0 or i>=0):
        pred = model.predict(preTest)
        g = []
        for j in range(0,len(pred)):
            if(buy==False and np.argmax(pred[j])==0):
                buy=True
                price = price_last[j]
            elif(buy==True and np.argmax(pred[j])==1):
                buy=False
                profit = profit+(price_last[j]-price)

            if(buy==True):
                g.append(0.6)
            else:
                g.append(0.3)
        
        tp.fig()
        tp.plot_check_previous(scaler.fit_transform(ops["close1"][inputSeqLen:len(ops["close1"])-(outputSeqLen+outputFrameLen)][0:1000]),'blue','cyan')
        tp.plot_check_previous(scaler.fit_transform(ops["ema341"][inputSeqLen:len(ops["ema341"])-(outputSeqLen+outputFrameLen)][0:1000]),'green','red')
        tp.plot_check_previous(scaler.fit_transform(ops["rsi1"][inputSeqLen:len(ops["rsi1"])-(outputSeqLen+outputFrameLen)][0:1000]),'green','red')
        tp.plot(t[0:1000],'orange')
        tp.plot(g[0:1000],'red')
        tp.show()        
        print (profit)
        
        
    xTrain, yTrain  = shuffle(xTrain, yTrain, random_state=42)    
    history = model.fit(xTrain, yTrain, 
                            epochs=25, 
                            batch_size=512, 
                            validation_data=(xTest, yTest),
                            verbose=1, 
                            shuffle=True)
    
'''        














