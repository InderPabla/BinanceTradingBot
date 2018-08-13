from binance.client import Client
from klines_indicies import KlineIndicies
import matplotlib.pyplot as plt
import numpy as np
def convert_all_string_to_float(array,indexAffect):
    for i in range(0,len(array)):
        for j in range(0,len(indexAffect)): 
            array[i][indexAffect[j]] =  float(array[i][indexAffect[j]]);
        
    
def compile_closing_price(ticks,kl):
    closing_prices = []
    for i in range(0,len(ticks)):
        closing_prices.append(ticks[i][kl.CLOSE_INDEX])
    return closing_prices

def calculate_EMA(todayPrice, N, previousEMA):
    k = 2.0/(N+1);
    return (todayPrice*k)+(previousEMA*(1.0-k))

 

def calculate_MACD(closing_prices,MACD_HIGH_EMA, MACD_LOW_EMA, MACD_STR_EMA):
    ema_high = []
    ema_low = []
    macd_line = []
    ema_macd = []
    ema_high_average = 0;
    ema_low_average = 0;
    ema_macd_average = 0;
    histogram = []   
    
    ########################
    for i in range(0,MACD_HIGH_EMA):
        ema_high.append(0)
        ema_high_average = ema_high_average+closing_prices[i];
    
    ema_high_average = ema_high_average/MACD_HIGH_EMA;
    ema_high[MACD_HIGH_EMA-1] = ema_high_average;
    for i in range(MACD_HIGH_EMA,len(closing_prices)):
        ema_high.append(calculate_EMA(closing_prices[i], MACD_HIGH_EMA, ema_high[i-1]));
    

    ########################
    for i in range(0,MACD_LOW_EMA):
        ema_low.append(0)
        ema_low_average = ema_low_average+closing_prices[i];
    
    ema_low_average = ema_low_average/MACD_LOW_EMA;
    ema_low[MACD_LOW_EMA-1] = ema_low_average;
    for i in range(MACD_LOW_EMA,len(closing_prices)):
        ema_low.append(calculate_EMA(closing_prices[i], MACD_LOW_EMA, ema_low[i-1]));
    

    ########################
    for i in range(0,len(closing_prices)):
        macd_line.append(ema_low[i]-ema_high[i]);
    

    ########################
    for i in range(0,MACD_HIGH_EMA+MACD_STR_EMA): 
        ema_macd.append(0)
        if(i>=MACD_HIGH_EMA): 
            ema_macd_average += macd_line[i]
        
    
    ema_macd_average = ema_macd_average/MACD_STR_EMA;
    ema_macd[(MACD_HIGH_EMA+MACD_STR_EMA)-1] = ema_macd_average;

    ########################
    for i in range(MACD_HIGH_EMA+MACD_STR_EMA,len(closing_prices)): 
        ema_macd.append(calculate_EMA(macd_line[i], MACD_STR_EMA, ema_macd[i-1]));
    

    ########################
    for i in range(0,len(closing_prices)):
        histogram.append(macd_line[i]-ema_macd[i]);
    
    
    return macd_line,ema_macd,histogram

def calculate_rsi(ticks,closing_prices, RSI_PERIOD,kl):
    change = [0];
    rsi = [0];
    srsi = [0]

    average_loss = 0;
    average_gain = 0;
    alpha = 1.0 / ( RSI_PERIOD + 1.0 );
    lowest = 100000
    highest = 0
    

    for i in range(1,len(ticks)):
        rsi.append(0);
        srsi.append(0);
        change.append(ticks[i][kl.CLOSE_INDEX]-ticks[i-1][kl.CLOSE_INDEX]);

        if(i>=RSI_PERIOD): 
            if(change[i]>0):
                ##average_gain = ((average_gain*(RSI_PERIOD-1.0))+change[i])/RSI_PERIOD;
                ##average_loss = ((average_loss*(RSI_PERIOD-1.0))+(0))/RSI_PERIOD;

                average_gain = (alpha*change[i]) + ((1-alpha)*average_gain);
                average_loss = (alpha*(0)) + ((1-alpha)*average_loss);

                ##average_gain = ((1.0/14.0)*change[i]) + (13.0/14.0)*average_gain;
                ##average_loss = ((1.0/14.0)*(0*-1.0)) + (13.0/14.0)*average_loss;
            
            elif(change[i]<0):
                ##average_loss = ((average_loss*(RSI_PERIOD-1.0))+(change[i]*-1.0))/RSI_PERIOD;
                ##average_gain = ((average_gain*(RSI_PERIOD-1.0))+0)/RSI_PERIOD;

                average_loss = (alpha*(change[i]*-1.0)) + ((1-alpha)*average_loss);
                average_gain = (alpha*0) + ((1-alpha)*average_gain);

                ##average_loss = ((1.0/14.0)*(change[i]*-1.0)) + (13.0/14.0)*average_loss;
                ##average_gain = ((1.0/14.0)*0) + (13.0/14.0)*average_gain;
            
            else:
                ##average_gain = ((average_gain*(RSI_PERIOD-1.0))+0)/RSI_PERIOD;
                ##average_loss = ((average_loss*(RSI_PERIOD-1.0))+0)/RSI_PERIOD;

                average_loss = (alpha*0) + ((1-alpha)*average_loss);
                average_gain = (alpha*0) + ((1-alpha)*average_gain);

                ##average_loss = ((1.0/14.0)*0) + (13.0/14.0)*average_loss;
                ##average_gain = ((1.0/14.0)*0) + (13.0/14.0)*average_gain;
            
    
            rsi[i]=(single_rsi(average_gain/average_loss));
            
            #calculate sri
            lowest = 100000
            highest = 0
            for j in range(i-13,i+1):
                if(lowest>rsi[j]):
                    lowest = rsi[j]
                if(highest<rsi[j]):
                    highest = rsi[j]
                
                diff = highest - lowest
                if(diff<=0):
                    diff = 0.0001
                
            srsi[i] = ((rsi[i] -lowest) / (diff))*100.0
                    
        elif(i<RSI_PERIOD):
            if(change[i]>0): 
                average_gain = average_gain+change[i];
            
            elif(change[i]<0): 
                average_loss = average_loss+(change[i]*-1.0);
            

            if(i == RSI_PERIOD-1): 
                average_gain = average_gain/RSI_PERIOD;
                average_loss = average_loss/RSI_PERIOD;
            
       
        
    

    return rsi,srsi


def single_rsi(rs):
    return 100.0-(100.0/(1.0+rs))



def calculate_adx(ticks,kl):
    dmp = [0];
    dmn = [0];
    tr = [0];

    tr14 = [0];
    dmp14 = [0];
    dmn14 = [0];
    dip14 = [0];
    din14 = [0];
    di14_sum = [0];
    di14_diff  = [0];
    dx = [0];

    tr14_1 = 0;
    dmp14_1 = 0;
    dmn14_1 = 0;

    dx_1 = 0;

    adx = [0];

    did14 = [0]
    TR_PERIOD = 14;
    AR_PERIOD = 14;

    for i in range(1,len(ticks)):
        dmp.append(0);
        dmn.append(0);
        tr.append(0);
        tr14.append(0);
        dmp14.append(0);
        dmn14.append(0); 
        dip14.append(0); 
        din14.append(0); 
        di14_sum.append(0);
        di14_diff.append(0);
        dx.append(0); 
        adx.append(0)
        did14.append(0)
        
        dmp_cur = ticks[i][kl.HIGH_INDEX]- ticks[i-1][kl.HIGH_INDEX]; 
        dmn_cur = ticks[i-1][kl.LOW_INDEX]- ticks[i][kl.LOW_INDEX]; 

        if(dmp_cur<0):
            dmp_cur = 0;
        if(dmn_cur<0):
            dmn_cur = 0;

        dmp[i]=(dmp_cur);
        dmn[i]=(dmn_cur);

        if(dmp[i]>dmn[i]):
            dmn[i] = 0;
        elif(dmp[i]<dmn[i]):
            dmp[i] = 0;

        tr[i]=(ticks[i][kl.HIGH_INDEX]-ticks[i][kl.LOW_INDEX]);


        if(i<=TR_PERIOD): 
            tr14_1 += tr[i];
            tr14[i] = tr14_1;

            dmp14_1 += dmp[i];
            dmp14[i] = dmp14_1;

            dmn14_1 += dmn[i];
            dmn14[i] = dmn14_1;

            
        
        elif(i == TR_PERIOD+1):
            tr14[i] = tr14_1 - (tr14_1/TR_PERIOD) + tr[i];
            dmp14[i] = dmp14_1 - (dmp14_1/TR_PERIOD) + dmp[i];
            dmn14[i] = dmn14_1 - (dmn14_1/TR_PERIOD) + dmn[i];
        
        elif(i>TR_PERIOD+1):
            tr14[i] = tr14[i-1] - (tr14[i-1]/TR_PERIOD) + tr[i];
            dmp14[i] = dmp14[i-1] - (dmp14[i-1]/TR_PERIOD) + dmp[i];
            dmn14[i] = dmn14[i-1] - (dmn14[i-1]/TR_PERIOD) + dmn[i];
        

        if(i >= TR_PERIOD):
            dip14[i] = (dmp14[i]/tr14[i])*100.0;
            din14[i] = (dmn14[i]/tr14[i])*100.0;

            di14_sum[i] =  abs(dip14[i]+ din14[i]);
            di14_diff[i] =  abs(dip14[i]- din14[i]);

            dx[i] =  (di14_diff[i]/di14_sum[i])*100.0;
        
            did14[i] = dip14[i]- din14[i]
            
        if(i >= TR_PERIOD and i<(TR_PERIOD+AR_PERIOD)): 
            dx_1 = dx_1+dx[i]; 

            if(i == ((TR_PERIOD+AR_PERIOD))-1): 
                dx_1 = dx_1/AR_PERIOD;
                adx[i] = dx_1;
            
        
        elif(i>=(TR_PERIOD+AR_PERIOD)):
            adx[i] = ((adx[i-1]*(AR_PERIOD-1)) + dx[i])/AR_PERIOD;
        



    

    return adx,dx,dip14,din14,did14



def calculate_wr(ticks,kl,WR_PERIOD,srsi):
    
   
    high14 = [];
    low14 = [];
    wr = []
    for i in range(0,len(ticks)):
        high14.append(0)
        low14.append(0)
        wr.append(0)
        
        if(i>=WR_PERIOD-1):
            high = -1000;
            low = 10000000;

            for j in range(i-(WR_PERIOD-1),i+1):
                if(high<ticks[j][kl.HIGH_INDEX]):
                    high = ticks[j][kl.HIGH_INDEX]
                if(low>ticks[j][kl.LOW_INDEX]):
                    low = ticks[j][kl.LOW_INDEX]
            

            high14[i] = high;
            low14[i] = low;

            wr[i] = 100.0-((((high14[i] - ticks[i][kl.CLOSE_INDEX])/(high14[i] - low14[i])) * -100)*-1)
            #print(wr[i]) 
            if(srsi[i]>80 and wr[i]<srsi[i]):
                wr[i] = srsi[i]
            if(srsi[i]<20 and wr[i]>srsi[i]):
                wr[i] = srsi[i]
 
    return wr


def calculate_pmo(ticks,kl):
    
   PER_20 = 20
   PER_10 =10
   PER_35 = 35;
   
   roc = []
   ema_roc_1 = []
   ema_roc_2 = []
   pmo_line = []
   pmo_signal = []
   pmo_histogram = []

   pmo_signal_avg = 0
   pmo_signal_avg_counter = 0
   
   pmo_line_slope = []
   
   for i in range(0,len(ticks)):
       roc.append(0)
       ema_roc_1.append(0);
       ema_roc_2.append(0)
       pmo_line.append(0)
       pmo_signal.append(0)
       pmo_histogram.append(0)
       pmo_line_slope.append(0)
       
       if(i>0):
           roc[i] = ((ticks[i][kl.CLOSE_INDEX]-ticks[i-1][kl.CLOSE_INDEX])/ticks[i-1][kl.CLOSE_INDEX])*100.0
           ema_roc_1[i] = ((roc[i]-ema_roc_1[i-1])*(2.0/PER_35))+(ema_roc_1[i-1])
           ema_roc_2[i] = ema_roc_1[i]*100;
           pmo_line[i] = ((ema_roc_2[i]-pmo_line[i-1])*(2.0/PER_20))+(pmo_line[i-1])
           
           
           if(pmo_signal_avg_counter<PER_10):
               pmo_signal_avg = pmo_signal_avg+pmo_line[i]
               
           elif(pmo_signal_avg_counter==PER_10):
               pmo_signal_avg = pmo_signal_avg/PER_10
               pmo_signal[i] = pmo_signal_avg
           elif(pmo_signal_avg_counter>PER_10):
               pmo_signal[i] = calculate_EMA(pmo_line[i], MACD_STR_EMA, pmo_signal[i-1])
               
           pmo_histogram[i] = pmo_line[i]-pmo_signal[i]
           pmo_signal_avg_counter = pmo_signal_avg_counter+1
           
           if(i>1):
               pmo_line_slope[i] = ((pmo_line[i]-pmo_line[i-1])+(pmo_line[i-1]-pmo_line[i-2]))*5
    
   #for i in range(0,len(ticks)):
         
   return pmo_line,pmo_signal,pmo_histogram,pmo_line_slope


        
client = Client('EOPjqtZS0LyRIY0c45GiYUwSvHbhazklro5aemRz55TcIEuyufKDSCIgmHJPdPx4', 'vVEqkYseauQ3NNPolrLgaNxfspz7OmJ42I0ANI9QjHLmcJRRekq3DdWHQfF3wIiz')

kl = KlineIndicies()


MACD_HIGH_EMA = 26
MACD_LOW_EMA = 12
MACD_STR_EMA = 9 

RSI_PERIOD = 14
WR_PERIOD = 14
symbol = "ADABTC";
buyingAmount = 1982;
btcusd = 14080

time_frame = client.KLINE_INTERVAL_5MINUTE

all_tick = client.get_ticker()
for i in range(0,len(all_tick)):
    if(all_tick[i]['symbol']=='BTCUSDT'):
        print(all_tick[i])
ticks = client.get_klines(symbol=symbol, interval=time_frame)
convert_all_string_to_float(ticks,[kl.OPEN_INDEX,kl.HIGH_INDEX,kl.LOW_INDEX,kl.CLOSE_INDEX,kl.VOLUME_INDEX,kl.ASSET_VOLUME_INDEX,kl.TRADES_INDEX,kl.BUY_ASSETS_VOLUME_INDEX,kl.BUY_BASE_VOLUME_INDEX,kl.IGNORED_INDEX])
closing_prices = compile_closing_price(ticks,kl)


'''
plt.plot(closing_prices)
plt.ylabel('some numbers')
plt.show()
'''




macd_line,signal_line,histogram=calculate_MACD(closing_prices, MACD_HIGH_EMA, MACD_LOW_EMA, MACD_STR_EMA);
pmo_line,pmo_signal,pmo_histogram,pmo_line_slope = calculate_pmo(ticks,kl)


adx,dx,dip14,din14,did14 = calculate_adx(ticks,kl)

signal_line2 = np.array(signal_line)*10000000.0
macd_line2 = np.array(macd_line)*10000000.0
histogram2 = np.array(histogram)*10000000.0
closing_prices2 = np.array(closing_prices)*50000.0#1000000.0

rsi,srsi = calculate_rsi(ticks,closing_prices, RSI_PERIOD,kl)
wr = calculate_wr(ticks,kl,WR_PERIOD,srsi)

srsi2 = []
srsi3 = []
for i in range(0,len(srsi)):
    val = rsi[i]-30.0
    if(val<0):
        val= 0
    elif(val>40.0):
        val = 40.0
    val = val/40.0
    val = val*val
    srsi2.append(srsi[i]*val)
    srsi3.append(srsi[i]*0.25)
    


offset = 35 #MACD_HIGH_EMA+MACD_STR_EMA

xadx = np.arange(0, 500-offset, 1)
yadx = np.zeros(shape=(500-offset,))

fig1 = plt.gcf()
fig1.set_size_inches(35.5, 10.5,forward=True)

plt.ylabel('1-100')
plt.fill_between(xadx, did14[offset:], yadx, where=yadx >= did14[offset:], facecolor='red', interpolate=True)
plt.fill_between(xadx, did14[offset:], yadx, where=yadx <= did14[offset:], facecolor='green', interpolate=True)
plt.plot(adx[offset:],color="blue")
plt.plot(dip14[offset:],color="green")
plt.plot(din14[offset:],color="red")

plt.axhline(y=20, color='black', linestyle='-')
plt.show()

fig3 = plt.gcf()
fig3.set_size_inches(35.5, 10.5,forward=True)
x = np.arange(0, 500-offset, 1)
y = np.zeros(shape=(500-offset,))
y30 = np.full(shape=(500-offset,),fill_value=30)
y70 = np.full(shape=(500-offset,),fill_value=70)
y50 = np.full(shape=(500-offset,),fill_value=50)
y20 = np.full(shape=(500-offset,),fill_value=20)
y80 = np.full(shape=(500-offset,),fill_value=80)

yp2_5 = np.full(shape=(500-offset,),fill_value=2.5)
yn2_5 = np.full(shape=(500-offset,),fill_value=-2.5)


closing_prices3_norm = []
max_v = max(closing_prices2)
min_v = min(closing_prices2)

for i in range(0,len(closing_prices2)):
    closing_prices3_norm.append((((closing_prices2[i]-min_v)/(max_v-min_v))*35.0)-10)

plt.plot(x, yp2_5, color='red')
plt.plot(x, yn2_5, color='red')
plt.plot(closing_prices3_norm[offset:], color='black')

plt.plot(x, histogram2[offset:], x, y, color='black')
plt.fill_between(x, histogram2[offset:], y, where=y >= histogram2[offset:], facecolor='red', interpolate=True)
plt.fill_between(x, histogram2[offset:], y, where=y <= histogram2[offset:], facecolor='green', interpolate=True)
plt.plot(macd_line2[offset:], color="purple")
plt.plot(signal_line2[offset:],color="orange")
#plt.plot(x, rsi[offset:], color='black')
#plt.plot(x, srsi[offset:], color='blue')
plt.plot(x, wr[offset:], color='cyan')
plt.plot(closing_prices3_norm[offset:], color='red')

#plt.plot(x, y30, color='black')
#plt.plot(x, y70, color='black')
#plt.plot(x, y50, color='black')
#plt.plot(x, y20, color='red')
#plt.plot(x, y80, color='red')

plt.ylabel('some numbers')
plt.savefig("macd.png")
plt.show()

fig1 = plt.gcf()
fig1.set_size_inches(35.5, 10.5,forward=True)
plt.plot(closing_prices2[offset:])
plt.ylabel('some numbers')
plt.show()
'''
pmo_line = macd_line2
pmo_signal = signal_line2
pmo_histogram = histogram2
'''


fig3 = plt.gcf()
fig3.set_size_inches(35.5, 10.5,forward=True)
plt.plot(x, pmo_histogram[offset:], x, y, color='black')
#plt.fill_between(xadx, did14[offset:], yadx, where=yadx >= did14[offset:], facecolor='pink', interpolate=True)
#plt.fill_between(xadx, did14[offset:], yadx, where=yadx <= did14[offset:], facecolor='lime', interpolate=True)
plt.fill_between(x, pmo_histogram[offset:], y, where=y >= pmo_histogram[offset:], facecolor='red', interpolate=True)
plt.fill_between(x, pmo_histogram[offset:], y, where=y <= pmo_histogram[offset:], facecolor='green', interpolate=True)
plt.plot(pmo_line[offset:], color="purple")
plt.plot(pmo_signal[offset:],color="orange")
plt.plot(x, srsi3[offset:], color='blue')
#plt.plot(adx[offset:],color="orange")
#plt.axhline(y=20, color='black', linestyle='-')
#plt.plot(pmo_line_slope[offset:],color="cyan")


#plt.fill_between(x, histogram2[offset:], y, where=y >= histogram2[offset:], facecolor='pink', interpolate=True)
#plt.fill_between(x, histogram2[offset:], y, where=y <= histogram2[offset:], facecolor='lime', interpolate=True)
#plt.plot(macd_line2[offset:], color="red")
#plt.plot(signal_line2[offset:],color="blue")





inTrade = False;
buyPrice = 0;
sellPrice = 0;
profit = 0;
previousProfit  = 0;

buy_x = []
sell_x = []

#ys = np.arange(-10, 50, 1)




for i  in range(offset,len(ticks)):
    '''
    if(inTrade==False):
        buy = False
        if(pmo_signal[i]>pmo_signal[i-1] ):
            buy = True
        else:
            slope1 = pmo_signal[i]-pmo_signal[i-1]
            slope2 = pmo_signal[i-1]-pmo_signal[i-2]
            
           
            

            slope3 = slope1+slope2
            
            if(slope3>0 or (slope3+slope3)>0):
                buy = True
        
        
        if(pmo_signal[i]<pmo_line[i]):
            buy = True
        
        else:
            slope11 = pmo_signal[i]-pmo_signal[i-1]
            
            slope12 = pmo_line[i]-pmo_line[i-1]
           
            
            new_sig= slope11+pmo_signal[i]
            new_line= slope12+pmo_line[i]
            
            if(new_sig<new_line or (new_sig<new_line+slope12)):
                buy = True
             
            
        if(buy == True ):
            inTrade = True
            buyPrice = closing_prices[i];
            buy_x.append(i)    
        
       

    
    else:
        sell = False
        if(pmo_signal[i]<pmo_signal[i-1] and not (pmo_histogram[i]>pmo_histogram[i-1])):
            sell = True
        else:
            slope1 = pmo_signal[i]-pmo_signal[i-1]
            slope2 = pmo_signal[i-1]-pmo_signal[i-2]
            
           
            

            slope3 = slope1+slope2
            
            if(slope3<0 or (slope3+slope3)<0):
                sell = True

            
        if(sell == True):
            inTrade = False
            sellPrice = closing_prices[i];

            thisTradeProfit = sellPrice-buyPrice;
            previousProfit = thisTradeProfit;
           
            profit += thisTradeProfit; 
            sell_x.append(i)
            

            print((len(sell_x))," ",previousProfit*btcusd*buyingAmount)
            
    '''
    
    
    if(inTrade==False):
        buy = False
        if(pmo_line[i]>pmo_line[i-1] ):
            #if(len(sell_x)==0 or i-sell_x[len(sell_x)-1]>1):
                #if(srsi3[i]<24):#if(srsi[i]>= srsi[i-1]):
                    buy = True
        
        else: # VERY GOOD BULL
            
            slope1 = pmo_line[i]-pmo_line[i-1]
            slope2 = pmo_line[i-1]-pmo_line[i-2]
            diff = slope1 -  slope2
            slope3 = slope1+diff
            if(slope3>0):
                #if(len(sell_x)==0 or i-sell_x[len(sell_x)-1]>1):
                    #if(srsi[i]>= srsi[i-1]):
                        buy = True
               
           
          # VERY GOOD BEAR abs(((pmo_line[i-2]-pmo_line[i-1]))*100.0)<15
          
        if(buy == True ):#and abs(((pmo_line[i-2]-pmo_line[i-1]))*100.0)<15):
            inTrade = True
            buyPrice = closing_prices[i];
            buy_x.append(i)    
        
       

    
    else:
        sell = False
        if(pmo_line[i]<pmo_line[i-1] or srsi[i]>20):
            sell = True
        
        else:
            slope1 = pmo_line[i]-pmo_line[i-1]
            slope2 = pmo_line[i-1]-pmo_line[i-2]
            #slope3 = pmo_line[i-2]-pmo_line[i-3]
            
            diff = slope1 -  slope2
            slope3 = slope1+diff
            if(slope3<0):
                sell = True
        
        
            
            
        if(sell == True):
            inTrade = False
            sellPrice = closing_prices[i];

            thisTradeProfit = sellPrice-buyPrice;
            previousProfit = thisTradeProfit;
           
            profit += thisTradeProfit; 
            sell_x.append(i)
            
            buyin = buy_x[len(buy_x)-1]
            selin = sell_x[len(sell_x)-1]
            ratio1 = abs(((pmo_line[buyin-1]-pmo_line[buyin-1]))*100.0)
            ratio2 = abs(((pmo_line[buyin-2]-pmo_line[buyin-1]))*100.0)
            
            print((len(sell_x))," ",previousProfit*btcusd*buyingAmount," ",ratio1," ",ratio2)

          
    
print((profit*buyingAmount)*btcusd)
    
x_len = len(buy_x)
if(len(buy_x)>len(sell_x)):
    x_len = len(sell_x)

for i in range(0,x_len):
    plt.axvline(x=buy_x[i]-offset, color='green', linestyle='-')   
    plt.text(x=buy_x[i]-offset,y=-10,s=str(i+1))
    #plt.figtext(0.99, 0.01, 'footnote text', horizontalalignment='right')
    #plt.annotate(s,(0,0), (0, -20), xycoords='axes fraction', textcoords='offset points', va='top')
    
for i in range(0,x_len):
    plt.axvline(x=sell_x[i]-offset, color='red', linestyle='-')  
    
plt.ylabel('some numbers')
plt.savefig("pmo.png")

#plt.xticks(x)
plt.show()


print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
'''
inTrade = False;
buyPrice = 0;
sellPrice = 0;
profit = 0;
previousProfit  = 0;
btcusd = 12800
for i  in range(offset,len(ticks)):
    if(inTrade==False):
        
        if(srsi[i]>=10 and srsi[i-1]<=10):
            inTrade = True
            buyPrice = closing_prices[i];
    else:
        if(srsi[i]< srsi[i-1]):
            inTrade = False
            sellPrice = closing_prices[i];

            thisTradeProfit = sellPrice-buyPrice;
            previousProfit = thisTradeProfit;
            print(previousProfit*btcusd*buyingAmount)

            profit += thisTradeProfit; 
    
print((profit*buyingAmount)*btcusd)
'''


