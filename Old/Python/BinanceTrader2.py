# -*- coding: utf-8 -*-
"""
Created on Thu Jan 11 19:27:18 2018

@author: InderTheGreat
"""
import numpy as np
from binance.client import Client
from klines_indicies import KlineIndicies
from Plotter import Plotter
import matplotlib.pyplot as plt
from TechnicalIndicatorMath import TechnicalIndicatorMath

import pandas as pd

#CM-Guppy-EMA
#CM_SlingShotSystem
#CM_Ultimate_MA_MTF_V2
#CM Gann Swing High Low V2
#CM Ultimate MACD MTF
#VDUB 

'''
CM_Ultimate_MA_MTF
Stoch RSI
CM_Ult_MacD_MTF
'''


def convert_all_string_to_float(array,indexAffect):
    for i in range(0,len(array)):
        for j in range(0,len(indexAffect)): 
            array[i][indexAffect[j]] =  float(array[i][indexAffect[j]]);

    
   
client = Client('EOPjqtZS0LyRIY0c45GiYUwSvHbhazklro5aemRz55TcIEuyufKDSCIgmHJPdPx4', 'vVEqkYseauQ3NNPolrLgaNxfspz7OmJ42I0ANI9QjHLmcJRRekq3DdWHQfF3wIiz')
kl = KlineIndicies()   
tim = TechnicalIndicatorMath()   
pl = Plotter()   
 
symbol = "ADABTC";
buyingAmount = 2463 ;
btcusd = 11345    
time_frame = client.KLINE_INTERVAL_5MINUTE   
 
all_tick = client.get_ticker()

for i in range(0,len(all_tick)):
    if(all_tick[i]['symbol']=='BTCUSDT'):
        print("---------------------------------")
        print("---------------------------------")
        print(all_tick[i])
        print("---------------------------------")
        print("---------------------------------")
        
ticks = client.get_klines(symbol=symbol, interval=time_frame)
convert_all_string_to_float(ticks,[kl.OPEN_INDEX,kl.HIGH_INDEX,kl.LOW_INDEX,kl.CLOSE_INDEX,kl.VOLUME_INDEX,kl.ASSET_VOLUME_INDEX,kl.TRADES_INDEX,kl.BUY_ASSETS_VOLUME_INDEX,kl.BUY_BASE_VOLUME_INDEX,kl.IGNORED_INDEX])

heikin = tim.createHeikinAshi(ticks,kl)

#heikin = tim.createHeikinAshi(heikin,kl)

#ticks = heikin

closing_prices = tim.getKey(ticks,kl.CLOSE_INDEX)
closing_prices2 = tim.getKey(ticks,kl.CLOSE_INDEX)
closing_prices_org = tim.getKey(ticks,kl.CLOSE_INDEX)


#ticks = heikin


heikin_close = tim.getKey(heikin,kl.CLOSE_INDEX)
heikin_close2 = tim.getKey(ticks,kl.CLOSE_INDEX)

high_prices = tim.getKey(ticks,kl.HIGH_INDEX)
low_prices = tim.getKey(ticks,kl.LOW_INDEX)
ema34 = tim.caluclateEMA_Of_Key(ticks,kl.CLOSE_INDEX,34)
sma20 = tim.caluclateSMA_Of_Key(ticks,kl.CLOSE_INDEX,20)
macdLine9,signalLine9,histogram9 = tim.calculateMACD_Of_Key(ticks,kl.CLOSE_INDEX,12,26,9)
macdLine18,signalLine18,histogram18 = tim.calculateMACD_Of_Key(ticks,kl.CLOSE_INDEX,24,52,18)
rsi = tim.calculateRSI_Of_Key(ticks,kl.CLOSE_INDEX,14)
kSRSI,dSRSI = tim.calculateSTORSI_Of_Index(ticks,3,3,14,14,kl.CLOSE_INDEX)

lowIndex =  55 #tim.dataBetweenDayIndex(ticks,20,kl) 

closing_prices = tim.snip(closing_prices,lowIndex)
heikin_close = tim.snip(heikin_close,lowIndex)
closing_prices_org = tim.snip(closing_prices_org,lowIndex)

high_prices = tim.snip(high_prices,lowIndex)
low_prices = tim.snip(low_prices,lowIndex)
ema34 = tim.snip(ema34,lowIndex)
sma20 = tim.snip(sma20,lowIndex)
macdLine9 = tim.snip(macdLine9,lowIndex)
signalLine9 = tim.snip(signalLine9,lowIndex)
histogram9 = tim.snip(histogram9,lowIndex)
macdLine18 = tim.snip(macdLine18,lowIndex)
signalLine18 = tim.snip(signalLine18,lowIndex)
histogram18 = tim.snip(histogram18,lowIndex)
rsi = tim.snip(rsi,lowIndex)
kSRSI = tim.snip(kSRSI,lowIndex)
dSRSI = tim.snip(dSRSI,lowIndex)

heikin_close2 = tim.norm(heikin_close2,0,100)
closing_prices2 = tim.norm(closing_prices2,0,100)
ema342 = tim.caluclateEMA(heikin_close2,34)
sma202 = tim.calculateSMA(heikin_close2,20)

heikin_close2 = tim.snip(heikin_close2,lowIndex)
closing_prices2 = tim.snip(closing_prices2,lowIndex)
ema342 = tim.snip(ema342,lowIndex)
sma202 = tim.snip(sma202,lowIndex)


minClose = min(closing_prices)
maxClose = max(closing_prices) 

diff = maxClose-minClose

kSRSI2 = ((kSRSI/100.0)*diff)+minClose
dSRSI2 = ((dSRSI/100.0)*diff)+minClose

pl.fig()
pl.hLine(minClose,'black','-')
pl.hLine(maxClose,'black','-')
pl.hLine((((5/100.0)*diff)+minClose),'black','-')
pl.hLine((((20/100.0)*diff)+minClose),'black','-')
pl.hLine((((80/100.0)*diff)+minClose),'black','-')
pl.plot(closing_prices,'black')
#pl.plot(heikin_close,'black')
#pl.plotCheckPrevious(sma20,'green','red')
pl.plotCheckPrevious(ema34,'green','red')
pl.plot(kSRSI2,'blue') #plot kSRSI and set color blue
#pl.plot(dSRSI2,'orange')


inTrade = False;
buyPrice = 0;
sellPrice = 0;
profit = 0;
previousProfit  = 0;



buyx = []
sellx = []
for i  in range(0,len(closing_prices_org)):
    
    
    
    if(inTrade==False):
        buy = False
        
       
       
            
        if(buy == True ):
            inTrade = True
            buyPrice = closing_prices_org[i];
            buyx.append(i) 
        
       

    
    else:

        sell = False
       
        if(sell == True):
            inTrade = False
            sellPrice = closing_prices_org[i];

            thisTradeProfit = sellPrice-buyPrice;
            previousProfit = thisTradeProfit;
       
            profit += thisTradeProfit; 
            sellx.append(i)



for i in range(0,len(sellx)):
    pl.vLine(buyx[i],'green','-')    
    pl.vLine(sellx[i],'red','-')   


pl.save("heikin.png")
pl.show()

            
print(profit)
print((profit*buyingAmount)*btcusd)

pl.fig()
pl.plot(macdLine9*100.0,'purple')
pl.plot(signalLine9*100.0,'orange')
pl.plot(histogram9*100.0,'black')
pl.fill(histogram9*100.0,0,'red','green')
pl.show()





