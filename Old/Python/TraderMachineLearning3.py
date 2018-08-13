from TraderStrategy import TraderStrategy as TraderStrategy
from TraderControl import TraderControl as TraderControl
from TraderPlot import TraderPlot as TraderPlot
from TraderDetail import TraderDetail as TraderDetail
from TraderBinance import TraderBinance as tb
from sklearn.preprocessing import MinMaxScaler
from sklearn.utils import shuffle
from TraderMath import TraderMath as TraderMath

import numpy as np
import math as mt


xSet = []
ySet = []
xTrain = []
yTrain = []
xTest = []
yTest = []

math = TraderMath()
tp = TraderPlot()

hideAmount = 1
max_view = 2000 #len(ops["close1"])

ops = {}

inputSeqLen = 50
outputSeqLen = 2
outputFrameLen = 5
scaler = MinMaxScaler(feature_range=(0, 1))
scaler_0 = MinMaxScaler(feature_range=(-1, 1))

#5m 45799 ADA and 40701 ICX

kline1 = np.load("ADABTC_5m_Binance_Numpy.txt.npy")
print(len(kline1))
index_window = {"start":(len(kline1)-3000),"end":400000}
#index_window = {"start":9000,"end":400000}
kline_detail1 = TraderDetail(kline1)

normal_heikin_detail1 = kline_detail1
heikin_detail1 = kline_detail1 #TraderDetail(TraderDetail(TraderDetail(kline_detail1.HEIKIN()).HEIKIN()).HEIKIN())
 
for i in range(0,0):
    heikin_detail1 = TraderDetail(heikin_detail1.HEIKIN())

ema341 = heikin_detail1.EMA(heikin_detail1.close,34)
mtm10closesma = heikin_detail1.SMA(heikin_detail1.MTM(heikin_detail1.close,10),10)#math.change(ema341) #math.change(math.change(math.change(math.change(math.change(math.change(math.change(ema341)))))))
mtm10closeema = heikin_detail1.EMA(heikin_detail1.MTM(heikin_detail1.close,10),10)

mtm10volumesma = heikin_detail1.SMA(heikin_detail1.MTM(heikin_detail1.volume,10),10)
mtm10volumeema = heikin_detail1.EMA(heikin_detail1.MTM(heikin_detail1.volume,10),10)

mtm10closeemacfi1 = heikin_detail1.CFI(mtm10closeema,heikin_detail1.volume,13)
mtm10closeemacfi2 = heikin_detail1.CFI(mtm10closeema,mtm10volumeema,13)

KAMA = heikin_detail1.KAMA(10,2,30)

atr = heikin_detail1.ATR(14)#heikin_detail1.CKAMA(heikin_detail1.ATR(14),10,2,30)#heikin_detail1.EMA(heikin_detail1.MTM(heikin_detail1.ATR(14),10),10)
std = heikin_detail1.STDEV(heikin_detail1.close,10) #heikin_detail1.EMA(heikin_detail1.MTM(heikin_detail1.STDEV(heikin_detail1.close,10),10),10) 
mfi = heikin_detail1.EMA(heikin_detail1.MFI(14),1)/100.0

volume1 = heikin_detail1.volume
efi131 = heikin_detail1.EFI(13)
efiema121 = heikin_detail1.EMA(efi131,12)
bb20_up1,bb20_mid1,bb20_low1 = heikin_detail1.BB(20)
bbw = heikin_detail1.math.subtract_matrix(bb20_up1,bb20_low1)
rsi,k_srsi,d_srsi = heikin_detail1.SRSI(3,3,14,14)
rsi = rsi/100.0
rsisma = heikin_detail1.SMA(heikin_detail1.MTM(rsi,10),10)
rsiema = heikin_detail1.EMA(heikin_detail1.MTM(rsi,10),10)
k_srsi = k_srsi/100.0
d_srsi = d_srsi/100.0
macd_line,signal_line,histogram = heikin_detail1.MACD(12,26,9)

zigzag,obsLow,obsHigh = heikin_detail1.ZIGZAG(0,len(kline_detail1.close),1,3)

ops["kclose1"] = heikin_detail1.snip(kline_detail1.close,index_window)
ops["close1"] = heikin_detail1.snip(heikin_detail1.close,index_window)
#ops["close2"] = heikin_detail1.snip(normal_heikin_detail1.close,index_window)
ops["bb20_up1"] = heikin_detail1.snip(bb20_up1,index_window)
ops["bb20_mid1"] = heikin_detail1.snip(bb20_mid1,index_window)
ops["bb20_low1"] = heikin_detail1.snip(bb20_low1,index_window)
ops["bbw"] = heikin_detail1.snip(bbw,index_window)
ops["ema341"] = heikin_detail1.snip(ema341,index_window)
ops["efi131"] = heikin_detail1.snip(efi131,index_window)
ops["efiema121"] = heikin_detail1.snip(efiema121,index_window)
ops["rsi1"] = heikin_detail1.snip(rsi,index_window)
ops["rsi1sma"] = heikin_detail1.snip(rsisma,index_window)
ops["rsi1ema"] = heikin_detail1.snip(rsiema,index_window)
ops["k_srsi1"] = heikin_detail1.snip(k_srsi,index_window)
ops["d_srsi1"] = heikin_detail1.snip(d_srsi,index_window)
ops["mtm10closesma"] = heikin_detail1.snip(mtm10closesma,index_window)
ops["mtm10closeema"] = heikin_detail1.snip(mtm10closeema,index_window)
ops["mtm10volumesma"] = heikin_detail1.snip(mtm10volumesma,index_window)
ops["mtm10volumeema"] = heikin_detail1.snip(mtm10volumeema,index_window)
ops["mtm10closeemacfi1"] = heikin_detail1.snip(mtm10closeemacfi1,index_window)
ops["mtm10closeemacfi2"] = heikin_detail1.snip(mtm10closeemacfi2,index_window)
ops["kama"] = heikin_detail1.snip(KAMA,index_window)
ops["atr"] = heikin_detail1.snip(atr,index_window)
ops["std"] = heikin_detail1.snip(std,index_window)
ops["mfi"] = heikin_detail1.snip(mfi,index_window)


ops["macd_line"] = heikin_detail1.snip(macd_line,index_window) 
ops["signal_line"] = heikin_detail1.snip(signal_line,index_window) 
ops["histogram"] = heikin_detail1.snip(histogram,index_window) 


ops["macd_line1"] = heikin_detail1.norm_to_data_ref_simple(ops["macd_line"],ops["macd_line"])*0.25
ops["signal_line1"] = heikin_detail1.norm_to_data_ref_simple(ops["signal_line"],ops["macd_line"])*0.25
ops["histogram1"] = heikin_detail1.norm_to_data_ref_simple(ops["histogram"],ops["macd_line"])*0.25


sclose = scaler.fit_transform(ops["close1"][0:max_view])
sema34 = scaler.fit_transform(ops["ema341"][0:max_view])
skama = scaler.fit_transform(ops["kama"][0:max_view])
smtm = scaler.fit_transform(ops["mtm10closeemacfi1"][0:max_view])
sstd = scaler.fit_transform(ops["std"][0:max_view])
macd_line1 = ops["macd_line1"][0:max_view]
signal_line1 = ops["signal_line1"][0:max_view]
histogram1 = ops["histogram1"][0:max_view]


tp.fig()
#tp.plot_check_previous(scaler.fit_transform(ops["close1"][0:max_view]),'black','black')
tp.plot_check_previous(ops["kclose1"][0:max_view],'cyan','cyan')

'''
tp.plot_check_previous(ops["macd_line1"][0:max_view],'black','black')
tp.plot_check_previous(ops["signal_line1"][0:max_view],'purple','purple')
tp.fill(ops["histogram1"][0:max_view],0,'red','green')
tp.plot_check_previous(scaler.fit_transform(ops["bbw"][0:max_view]),'blue','blue')
'''

#zigzag,obsLow,obsHigh = heikin_detail1.ZIGZAG(index_window['start'],index_window['start']+max_view,1,3)
#zigzag,obsLow,obsHigh = heikin_detail1.CKAMAZIGZAG(KAMA,10,2,30,index_window['start'],index_window['start']+max_view,1,3)

print (len(zigzag))

snip_index_start = 0
snip_index_end = 0

for i in range(0,len(zigzag)):
    if(snip_index_start ==0 and zigzag[i][2]>=index_window['start']):
        snip_index_start = i
    elif(snip_index_start>0 and zigzag[i][2]>=index_window['start']+max_view):
        snip_index_end = i-1
        break
zigzag = zigzag[snip_index_start:snip_index_end]  
 
isBuy = False
buyPrice = 0
profit = 0

amount = 5000
btcusd = 8309.72
counter_buy = 0
for i in range(1,len(zigzag)):
    buy = False
    
    index1 = zigzag[i][2]-index_window['start']
    index2 = zigzag[i][1]-index_window['start']
    
    if(not (skama[index1]<skama[index1-1] and skama[index1-1]<skama[index1-2] and skama[index1-2]<skama[index1-3] and skama[index1-3]<skama[index1-4])):
        buy = True
    
    if(zigzag[i][0]==1):
            sellPrice = min([kline_detail1.low[zigzag[i][1]+1],kline_detail1.low[zigzag[i][1]]]) #kline_detail1.close[zigzag[i][1]+1]
            
            if(isBuy == True and sellPrice-buyPrice>0):
                tp.plot_array([zigzag[i][1]-index_window['start'],zigzag[i-1][1]-index_window['start']],[kline_detail1.close[zigzag[i][1]],kline_detail1.close[zigzag[i-1][1]]],'lime')    
                tp.v_line(zigzag[i][1]-index_window['start'],'lime','-')
            elif(isBuy == True and sellPrice-buyPrice<0):
                tp.plot_array([zigzag[i][1]-index_window['start'],zigzag[i-1][1]-index_window['start']],[kline_detail1.close[zigzag[i][1]],kline_detail1.close[zigzag[i-1][1]]],'blue')    
                tp.v_line(zigzag[i][1]-index_window['start'],'blue','-')    
                
            
            if(isBuy==True):
                isBuy = False
                #buyPrice = buyPrice+(buyPrice*0.005)
                #sellPrice = sellPrice-(sellPrice*0.005)
                
                profit = profit + (sellPrice-buyPrice)
                percent = ((sellPrice-buyPrice)/buyPrice)*100.0
                #print(profit, buyPrice, sellPrice)
                print('{:.0f} {:.2f} {:.2f} {:.9f} {:.9f} {:.3f}'.format(counter_buy,(profit*amount*btcusd), ((sellPrice-buyPrice)*amount*btcusd), buyPrice, sellPrice,percent))
    
    if(zigzag[i][0]==0):
        isBuy = True
        tp.v_line(index1,'orange','-')
        buyPrice = max([kline_detail1.high[zigzag[i][2]+1],kline_detail1.high[zigzag[i][2]]])
        counter_buy = counter_buy+1
        #tp.text(index1, 0, str(counter_buy), 12)
    
    '''            
    if(buy == True):
        if(zigzag[i][0]==0):
            isBuy = True
            tp.v_line(index1,'orange','-')
            buyPrice = kline_detail1.close[zigzag[i][2]+1]
            counter_buy = counter_buy+1
            #tp.text(index1, 0, str(counter_buy), 12)
            
    else:
        if(zigzag[i][0]==0):
            isBuy = True
            tp.v_line(index1,'orange','-')
            buyPrice = kline_detail1.close[zigzag[i][2]+1]
            counter_buy = counter_buy+1
            #tp.text(index1, 0, str(counter_buy), 12)
   '''
print("FINAL")
print(profit*amount*btcusd)   
 
tp.show()























tp.fig()
tp.plot_check_previous(scaler.fit_transform(ops["kclose1"][0:max_view]),'cyan','cyan')
#tp.plot_check_previous(scaler.fit_transform(ops["close1"][0:max_view]),'cyan','cyan')
tp.plot_check_previous(scaler.fit_transform(ops["ema341"][0:max_view]),'green','red')
tp.plot_check_previous(scaler.fit_transform(ops["kama"][0:max_view]),'purple','pink')
tp.plot_check_previous(scaler.fit_transform(ops["mtm10closeemacfi1"][0:max_view]),'orange','black')
#tp.plot_check_previous(scaler.fit_transform(ops["std"][0:max_view]),'blue','blue')
tp.plot_check_previous(scaler.fit_transform(ops["bbw"][0:max_view]),'blue','blue')

tp.plot_check_previous(ops["macd_line1"][0:max_view],'black','black')
tp.plot_check_previous(ops["signal_line1"][0:max_view],'purple','purple')
tp.fill(ops["histogram1"][0:max_view],0,'red','green')

#tp.plot_check_previous(ops["d_srsi1"][0:max_view],'blue','blue')






y = [0]

for i in range(0,max_view):
    buy = False
    if(i>=1):
        '''
        if(sema34[i]>sema34[i-1] and skama[i]>skama[i-1] ):
            buy = True
        elif(macd_line1[i]>macd_line1[i-1] and signal_line1[i]>signal_line1[i-1]):
            buy = True
            
        if(macd_line1[i]<macd_line1[i-1] and macd_line1[i-1]<macd_line1[i-2] and signal_line1[i]<signal_line1[i-1] and  signal_line1[i-1]<signal_line1[i-2]):
            buy = False
        
        
        if(sema34[i]<sema34[i-1] and sema34[i-1]<sema34[i-2]):
            buy = False
        '''
        
        
        if(
                
            (
                   (smtm[i]>smtm[i-1] and skama[i]>skama[i-1])
                   or (sema34[i]>sema34[i-1] and skama[i]>skama[i-1])
            ) 
           
           and (not (sema34[i-1]<sema34[i-2] and sema34[i-2]<sema34[i-3] and sema34[i-3]<sema34[i-4]))
           and (sstd[i]>0.25 and  not (sema34[i]<sema34[i-1] and skama[i]<skama[i-1]))
           ):
                buy = True
        
        '''
        slope_of_ema = sema34[i]-sema34[i-1] 
        slope_of_kama = skama[i]-skama[i-1]
        angle = (mt.atan(slope_of_kama)*360.0)/mt.pi
        #print(angle)
        
        if(
            (
              (slope_of_kama>0 and angle >0.1)
            )  
          ):
            buy = True
        '''
        if(buy==False):
            y.append(0)
            '''
            if(y[i-1]==1):
                tp.v_line(i,'red','-')
                '''
        else:
            y.append(1)
            if(y[i-1]==0):
                tp.v_line(i,'green','-')
            
   
#tp.plot_check_previous(y,'green','red')


tp.show()

'''
tp.fig()
tp.plot_check_previous(scaler.fit_transform(ops["close1"][0:max_view]),'blue','cyan')
tp.plot_check_previous(scaler.fit_transform(ops["ema341"][0:max_view]),'green','red')
tp.plot_check_previous(scaler_0.fit_transform(ops["mtm10volumeema"][0:max_view]),'orange','black')
tp.show()


tp.fig()
tp.plot_check_previous(scaler.fit_transform(ops["close1"][0:max_view]),'blue','cyan')
tp.plot_check_previous(scaler.fit_transform(ops["ema341"][0:max_view]),'green','red')
tp.plot_check_previous(scaler.fit_transform(ops["efi131"][0:max_view]),'orange','orange')
tp.show()


tp.fig()
tp.plot_check_previous(ops["close1"][0:max_view],'blue','cyan')
tp.plot_check_previous(ops["ema341"][0:max_view],'green','red')
tp.plot_check_previous(ops["kama"][0:max_view],'orange','black')
tp.show()
'''


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














