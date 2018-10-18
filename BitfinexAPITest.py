#import requests
#import pandas as pd

#r = requests.get('https://api.bitfinex.com/v2/candles/trade:1h:tBTCUSD/hist', params={'start': 1434764470000, 'end': 1497922870000})

#print(r.text) 


from TraderStrategy import TraderStrategy as TraderStrategy
from TraderControl import TraderControl as TraderControl
from TraderPlot import TraderPlot as TraderPlot
from TraderDetail import TraderDetail as TraderDetail
from TraderControl import TraderControl as TraderControl
from datetime import datetime
import numpy as np

import codecs, json 

config = 'config.json'
convert_to_json = False




pair ="MDAETH"
time = "5m"
name = "Historical/"+pair+"_"+time+"_Binance_Numpy_Oct_07.txt"



if(convert_to_json==False):
    tc = TraderControl(config,None)
    date = "2018-05-10"
    utcdate = datetime.strptime(date, '%Y-%m-%d').strftime ("%Y-%m-%d %H:%M:%S")
    ticksICX = tc.historical(time,pair,utcdate) #2015-02-24T13:00:00-00:00
    
    
    
    print (len(ticksICX))
    
    print (name)
    np.save(name,ticksICX)
else:
    new_name = name+'.npy.json'
    a = np.load(name+'.npy')
    b = a.tolist() 
    json.dump(b, codecs.open(new_name, 'w', encoding='utf-8'), separators=(',', ':'), sort_keys=True, indent=4) 