from TraderStrategy import TraderStrategy as TraderStrategy
from TraderControl import TraderControl as TraderControl
from TraderPlot import TraderPlot as TraderPlot
from TraderDetail import TraderDetail as TraderDetail

class Strategy (TraderStrategy):
        
    def __init__(self, tc:TraderControl):
        super().__init__(tc)
        self.className = "Strategy"
        self.strategy_name = "Strategy Heikin 1"
        self.tc = tc
        self.tp = TraderPlot()
    
    def run_strategy(self):
        kline = self.tc.get_kline_candles()#use_config = False,pair = "ADABTC",time="15m")
        
        kline_detail = TraderDetail(kline)
        
        heikin = kline_detail.HEIKIN()
        heikin_detail = TraderDetail(heikin)
        #heikin_detail = kline_detail
        
        trades = heikin_detail.trades;
        assetVolume = heikin_detail.assetVolume;
        
        macd_line,signal_line,histogram = heikin_detail.MACD(12,26,9)

        rsi,k_srsi,d_srsi = heikin_detail.SRSI(3,3,14,14)
        
        ema34 = heikin_detail.EMA(heikin_detail.close,(34))
        
        efi13 = heikin_detail.EFI(13)
        efiema12 = heikin_detail.EMA(efi13,12)
        
        
        bb20_up,bb20_mid,bb20_low = heikin_detail.BB(20)
        
        index_window = {"start":250,"end":len(heikin_detail.close)}
        
        ops = {}
        ops["heikin"] = heikin_detail.snip(heikin,index_window)
        ops["close"] = heikin_detail.snip(heikin_detail.close,index_window)
        ops["closekline"] = kline_detail.snip(kline_detail.close,index_window)
        ops['ema34'] = heikin_detail.snip(ema34,index_window)
        
        ops["macd1"] = {}
        ops["macd1"]["macdline"] = heikin_detail.snip(macd_line,index_window)
        ops["macd1"]["signalline"] = heikin_detail.snip(signal_line,index_window)
        ops["macd1"]["histogram"] = heikin_detail.snip(histogram,index_window)
        ops["macd1"]["macdlinef"] = heikin_detail.norm_to_data_ref_simple(ops["macd1"]["macdline"],ops["macd1"]["macdline"])*100   
        ops["macd1"]["signallinef"] = heikin_detail.norm_to_data_ref_simple(ops["macd1"]["signalline"],ops["macd1"]["macdline"])*100  
        ops["macd1"]["histogramf"] = heikin_detail.norm_to_data_ref_simple(ops["macd1"]["histogram"],ops["macd1"]["macdline"])*100  
        ops["srsi1"] = {}
        ops["srsi1"]["rsi14"] = heikin_detail.snip(rsi,index_window)
        ops["srsi1"]["k3"] = heikin_detail.snip(k_srsi,index_window)
        ops["srsi1"]["d3"] = heikin_detail.snip(d_srsi,index_window)
        ops["srsi1"]["rsi14f"] = heikin_detail.norm_to_data(ops['close'],ops["srsi1"]["rsi14"])   
        ops["srsi1"]["k3f"] = heikin_detail.norm_to_data(ops['close'],ops["srsi1"]["k3"])
        ops["srsi1"]["d3f"] = heikin_detail.norm_to_data(ops['close'],ops["srsi1"]["d3"])
        
        ops['closef'] = heikin_detail.norm_to_data_ref(ops["close"],ops["close"])
        ops['ema34f'] = heikin_detail.norm_to_data_ref(ops["ema34"],ops["close"])
        
        ops['efi13'] = heikin_detail.snip(efi13,index_window)
        ops['efi13f'] = heikin_detail.norm_to_data_ref_simple(ops['efi13'],ops['efi13'])*100.0
        ops['efiema12'] = heikin_detail.snip(efiema12,index_window)
        ops['efiema12f'] = heikin_detail.norm_to_data_ref_simple(ops['efiema12'],ops['efiema12'])*100.0
        
        ops['bb20'] = {}
        ops["closef"] = heikin_detail.norm_to_data_ref_simple(ops["close"],ops["close"])*100.0
        ops['bb20']['up'] = heikin_detail.snip(bb20_up,index_window)
        ops['bb20']['mid'] = heikin_detail.snip(bb20_mid,index_window)
        ops['bb20']['low'] = heikin_detail.snip(bb20_low,index_window)
        
        ops['bb20']['upf'] = heikin_detail.norm_to_data_ref_simple(ops['bb20']['up'],ops["close"])*100.0
        ops['bb20']['midf'] = heikin_detail.norm_to_data_ref_simple(ops['bb20']['mid'],ops["close"])*100.0
        ops['bb20']['lowf'] = heikin_detail.norm_to_data_ref_simple(ops['bb20']['low'],ops["close"])*100.0
        
        ops['closediff'] = heikin_detail.math.subtract_matrix(ops["close"],ops["close"])
        ops['updiff'] = heikin_detail.math.subtract_matrix(heikin_detail.norm_to_data_ref_simple(ops["close"],ops["close"]),heikin_detail.norm_to_data_ref_simple(ops['bb20']['up'],ops["close"]))*1000.0
        ops['middiff'] = heikin_detail.math.subtract_matrix(heikin_detail.norm_to_data_ref_simple(ops["close"],ops["close"]),heikin_detail.norm_to_data_ref_simple(ops['bb20']['mid'],ops["close"]))*1000.0
        ops['lowdiff'] = heikin_detail.math.subtract_matrix(heikin_detail.norm_to_data_ref_simple(ops["close"],ops["close"]),heikin_detail.norm_to_data_ref_simple(ops['bb20']['low'],ops["close"]))*1000.0
         
        ops['trades'] = trades
        ops['assetVolume'] = assetVolume
        #ops['updifff'] = (ops['updiff']/max(ops['updiff']))*(max(ops["close"]))
       # ops['middifff'] = (ops['middiff']/max(ops['updiff']))*(max(ops["close"]))
        #ops['lowdifff'] = (ops['lowdiff']/max(ops['updiff']))*(max(ops["close"]))
        
        self.plot(ops) #visualize plots with ops
        self.print_operation_keys(ops)
        self.define_strategy(ops) #define a custom staratgy using ops
    
    def plot(self,ops):
        self.tp.fig()
        self.tp.plot(ops['srsi1']['rsi14'],"black")
        self.tp.plot(ops['srsi1']['k3'],"cyan")
        self.tp.plot(ops['srsi1']['d3'],"orange")
        self.tp.custom_plot_color_decision(ops['closef'],ops,self.custom_plot_color_1)
        self.tp.plot_check_previous(ops['efiema12f'],'green','red')
        #self.tp.plot_check_previous(ops['closef'],'green','red')
        self.tp.plot_check_previous(ops['ema34f'],'green','red')
        #self.tp.plot(ops['efi13f'],"purple")
        
        self.tp.h_line(100,'black','-')
        self.tp.h_line(95,'black','-')
        self.tp.h_line(90,'black','-')
        self.tp.h_line(80,'black','-')
        self.tp.h_line(70,'black','-')
        self.tp.h_line(60,'black','-')
        self.tp.h_line(50,'black','-')
        self.tp.h_line(40,'black','-')
        self.tp.h_line(30,'black','-')
        self.tp.h_line(20,'black','-')
        self.tp.h_line(10,'black','-')
        self.tp.h_line(5,'black','-')
        self.tp.h_line(0,'black','-')
        self.tp.show()
        
        self.tp.fig()
        self.tp.plot(ops['macd1']['macdlinef'],"purple")
        self.tp.plot(ops['macd1']['signallinef'],"orange")
        self.tp.fill(ops['macd1']['histogramf'],0,'red','green')
        self.tp.show()
        
        self.tp.fig()  
        self.tp.plot_check_previous(ops['efiema12'],'green','red')
        self.tp.plot(ops['efi13'],"purple")
        self.tp.h_line(0,'black','-')
        self.tp.show()
        
        self.tp.fig()
        self.tp.plot_check_previous(ops['closef'],'green','red')
        self.tp.plot(ops['bb20']['midf'],"purple")
        self.tp.plot(ops['bb20']['lowf'],"purple")
        self.tp.plot(ops['bb20']['upf'],"purple")
        self.tp.plot_check_previous(ops['efiema12f'],'green','red')
        self.tp.plot(ops['efi13f'],"purple")
        self.tp.h_line(0,'black','-')
        #self.tp.plot_check_previous(ops['ema34'],'green','red')     
        self.tp.show()
        
        self.tp.fig()
        #self.tp.plot(ops['closediff'],"black")
        self.tp.plot(ops['updiff'],"red")
        self.tp.plot(ops['middiff'],"green")
        self.tp.plot(ops['lowdiff'],"blue")
        self.tp.show()
        
        self.tp.fig();
        self.tp.custom_plot_color_decision(ops['close'],ops,self.custom_plot_color_1)
        self.tp.plot_check_previous(ops['ema34'],'green','red')
        self.tp.show()
        
        self.tp.fig();
        self.tp.plot_check_previous(ops['trades'],'green','red')
        self.tp.show()
        
        self.tp.fig();
        self.tp.plot_check_previous(ops['assetVolume'],'green','red')
        self.tp.show()

        
    def custom_plot_color_1(self,ops,index,prev_state):
        #buy_check = ops['close'][index]>ops['bb20']['mid'][index] and (not (ops['ema34'][index]<ops['ema34'][index-1]))
        if(index>0):
            if (prev_state == 0): #buy state active
                if(self.buy(ops,index) == True):
                    return 'green',1    
                else:
                    return 'red',0       
            else: #sell state active
                if(self.sell(ops,index) == True):
                    return 'red',0       
                else:
                    return 'green',1    
                    
        else:
            return 'black',0  
        '''
        if(index>0):
            if(buy_check):
                return 'green',ops['closekline'][index]
            elif(not (buy_check) or ops['ema34'][index]<ops['ema34'][index-1] 
            or(ops['bb20']['mid'][index]<ops['bb20']['mid'][index-1] 
            and ops['bb20']['low'][index]<ops['bb20']['low'][index-1]
            and ops['bb20']['up'][index]<ops['bb20']['up'][index-1])):
                return 'red',ops['closekline'][index]
        else:
            return 'black',ops['closekline'][index] 
        '''
    def buy(self,ops,index):
        valid = False
        '''START: WRITE CUSTOM BUY ORDER'''
        '''#############################'''
        '''#############################'''
        
        buy_check = (ops['close'][index]>ops['bb20']['mid'][index] and (not (ops['ema34'][index]<ops['ema34'][index-1]))) or (ops['bb20']['mid'][index]>ops['bb20']['mid'][index-1] and ops['bb20']['mid'][index-1]>ops['bb20']['mid'][index-2] and ops['bb20']['low'][index]>ops['bb20']['low'][index-1] and ops['bb20']['low'][index-1]>ops['bb20']['low'][index-2] and ops['bb20']['low'][index-1]>ops['bb20']['low'][index-2] and ops['efiema12'][index] > ops['efiema12'][index-1] and ops['ema34'][index]>ops['ema34'][index-1])  
                    
        
        if(ops['close'][index]>ops['bb20']['mid'][index]):
            valid = True
        
        if(buy_check):
            valid = buy_check
            
        '''#############################'''    
        '''END: WRITE CUSTOM BUY ORDER'''
        '''#############################'''
        return valid    
      
    def sell(self,ops,index):
        valid = False
        '''#############################'''
        '''START: WRITE CUSTOM SELL ORDER'''
        '''#############################'''
        
        
        if(not (ops['close'][index]>ops['bb20']['mid'][index])):
            valid = True
        buy_check = (ops['close'][index]>ops['bb20']['mid'][index] and (not (ops['ema34'][index]<ops['ema34'][index-1]))) or (ops['bb20']['mid'][index]>ops['bb20']['mid'][index-1] and ops['bb20']['mid'][index-1]>ops['bb20']['mid'][index-2] and ops['bb20']['low'][index]>ops['bb20']['low'][index-1] and ops['bb20']['low'][index-1]>ops['bb20']['low'][index-2] and ops['bb20']['low'][index-1]>ops['bb20']['low'][index-2] and ops['efiema12'][index] > ops['efiema12'][index-1] and ops['ema34'][index]>ops['ema34'][index-1])
        if(not (buy_check) or ops['ema34'][index]<ops['ema34'][index-1] 
            or(ops['bb20']['mid'][index]<ops['bb20']['mid'][index-1] 
            and ops['bb20']['low'][index]<ops['bb20']['low'][index-1]
            and ops['bb20']['up'][index]<ops['bb20']['up'][index-1])):
            valid = True
            
            
        '''#############################'''    
        '''END: WRITE CUSTOM SELL ORDER'''
        '''#############################'''
        return valid 



if __name__=="__main__":
    print("Main Start")
    from TraderControl import TraderControl as TraderControl
    config = 'config.json'
    tc = TraderControl(config,None)
    tc.run_strategies() 
        
        