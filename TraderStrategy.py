from TraderControl import TraderControl as TraderControl
import abc
from astropy.table import Table
import numpy as np
from colorama import Fore, Style, Back, init

def pin(foreColor):
        return Style.BRIGHT+foreColor
    
def rst():
        return Fore.WHITE+Style.BRIGHT+Back.RESET
    
class TraderStrategy(object):
    
    def __init__(self, tc:TraderControl):
        self.className = "TraderStrategy"
        self.tc = tc
        self.ops = {}
        self.buy_index = []
        self.sell_index = []
        self.asset_amount = self.tc.get_asset_amount()
        self.run = True
        self.visual_sell = False
        self.visual_buy = False
        self.visual_sell_size = 500
        
    @abc.abstractmethod
    def run_strategy(self):
        raise NotImplementedError("Method should be implemented in subclass.")
    
    @abc.abstractmethod
    def init_variables(self,ops):
        raise NotImplementedError("Method should be implemented in subclass.")  
        
    @abc.abstractmethod
    def buy(self,ops,index):
        raise NotImplementedError("Method should be implemented in subclass.")  
    
    @abc.abstractmethod
    def sell(self,ops,index,buy_index):
        raise NotImplementedError("Method should be implemented in subclass.")  
        
    @abc.abstractmethod 
    def plot(self,ops,buy_index,sell_index,evaled):#risk_NORMAL,total_NORMAL,risk_LOW,total_LOW):
        raise NotImplementedError("Method should be implemented in subclass.")  
    
    @abc.abstractmethod 
    def plot_sell(self,ops,index,size):
        raise NotImplementedError("Method should be implemented in subclass.") 
    
    '''     
    person = input('Enter your name: ')
    print('Hello', person)person = input('Enter your name: ')
    print('Hello', person)
    '''
    
    def define_strategy(self,ops):
        if(self.run):
            self.ops = ops    
            
            self.init_variables(ops)
            
            size = len(ops['close'])
            buy_state = True
            skip_sell = False

            for index in range(1,size):
                
                # BUY STATE #################################################
                if (buy_state == True): #buy state active
                
                    # VISUAL BUY FALSE ################################################# 
                    if(self.visual_buy==False):
                        if(self.buy(ops,index) == True):
                            self.append_buy(index)
                            buy_state = False 
                            
                    # VISUAL BUY TRUE ################################################# 
                    else:
                        if(self.buy(ops,index) == True):
                            self.plot_sell(ops,index,self.visual_sell_size)
                            buy_input = input('BUY? 1=Yes, 2=No, 3=Skip To Next Buy, 4=Done All \n>> ')
                            if(buy_input=='1'):
                                self.append_buy(index)
                                buy_state = False
                            elif(buy_input=='3'):
                                buy_state = False
                                skip_sell = True
                            elif(buy_input=='4'):
                                break
                
                # SELL STATE #################################################
                else: #sell state active
                
                    # VISUAL SELL FALSE ################################################# 
                    if(self.visual_sell==False or skip_sell == True):
                        last_buy_index = -1
                        if (skip_sell == False):
                            last_buy_index = self.buy_index[len(self.buy_index)-1]
                            
                        if(self.sell(ops,index,last_buy_index) == True):
                            if(skip_sell == False):
                                self.append_sell(index)
                            else:
                                skip_sell = False
                            buy_state = True 
                            
                    # VISUAL SELL TRUE ################################################# 
                    else:
                        
                        self.plot_sell(ops,index,self.visual_sell_size)
                        sell_input = input('SELL? 1=Yes, 2=No, 4=Done All \n>> ')
                        if(sell_input=='1'):
                            self.append_sell(index)
                            buy_state = True 
                        elif(sell_input=='4'):
                            break
                        
                    
            
            return self.evaluate_strategy(ops)
        else:
            if(self.tc.isPlot==True):
                self.plot(ops,[],[])
                
            return {}
        
    def append_buy(self,index):
        self.buy_index.append(index)
    
    def append_sell(self,index):
        self.sell_index.append(index)
    
    def evaluate_strategy(self,ops):
        profit_normal = 0.0
        profit_low = 0.0

        amount = 0 #(self.tc.asset_amount/self.ops['close'][len(self.ops['close'])-1])
        

        column_names = ('TRADE #','SELL INDEX', 'BUY', 'SELL', 'AMOUNT', 'NORM','TTL NORM','LOW','TLL LOW')

        evaled = {
                "low":[],
                "lowTotal":[],
                "normal":[],
                "normalTotal":[],
                "sellIndex":[],
                "count":[],
                
                "buyLow":[],
                "buyNormal":[],
                "selLow":[],
                "sellNormal":[],
                
                "amount":[],
                
                "colors":[]
                
        }

        USD_CONVERT = self.tc.asset_price
        
        print(pin(Fore.YELLOW)+"\tAsset amount",self.tc.asset_amount," Current close",str(self.ops['close'][0])+rst())
        print(pin(Fore.YELLOW)+"\tUSD CONV",USD_CONVERT," Amount",str(amount)+rst())
        print(pin(Fore.YELLOW)+"\tNUMBER OF SELLS",str(len(self.sell_index))+rst())
        
        evaled["colors"].append(Fore.WHITE)
        for i in range(0,len(self.buy_index)):
            sell_index = -1
            if(i<len(self.sell_index)):
                sell_index = self.sell_index[i]
            
            buy_index = self.buy_index[i]
            buy_normal_price = self.ops['close'][buy_index]
            buy_low_price = buy_normal_price+(max(abs(self.ops['high'][buy_index]-self.ops['close'][buy_index]),abs(self.ops['low'][buy_index]-self.ops['close'][buy_index]))*0.25)
            if(sell_index>-1 and sell_index<(len(ops["close"])-1)):
                    buy_low_price2 = buy_normal_price+(max(abs(self.ops['high'][buy_index+1]-self.ops['close'][buy_index+1]),abs(self.ops['low'][buy_index+1]-self.ops['close'][buy_index+1]))*0.25)
                    if(buy_low_price2>buy_low_price):
                        buy_low_price = buy_low_price2          
            amount = (self.tc.asset_amount/self.ops['close'][buy_index])
            
            if(sell_index>-1):
                evaled["sellIndex"].append(self.sell_index[i])
                evaled["count"].append(i+1)

                sell_normal_price = self.ops['close'][sell_index]
                sell_low_price = sell_normal_price-(max(abs(self.ops['low'][sell_index]-self.ops['close'][sell_index]),abs(self.ops['high'][sell_index]-self.ops['close'][sell_index]))*0.25)
                if(sell_index<(len(ops["close"])-1)):
                    sell_low_price2 = sell_normal_price-(max(abs(self.ops['low'][sell_index+1]-self.ops['close'][sell_index+1]),abs(self.ops['high'][sell_index+1]-self.ops['close'][sell_index+1]))*0.25)    
                    if(sell_low_price2<sell_low_price):
                        sell_low_price = sell_low_price2  

                profit_normal_new = ((sell_normal_price-buy_normal_price)*amount)*USD_CONVERT
                profit_normal = profit_normal+profit_normal_new
                evaled["normal"].append('{:.2f}'.format(profit_normal_new))
                evaled["normalTotal"].append('{:.2f}'.format(profit_normal))
       
                profit_low_new = ((sell_low_price-buy_low_price)*amount)*USD_CONVERT
                profit_low = profit_low+profit_low_new
                evaled["low"].append('{:.2f}'.format(profit_low_new))
                evaled["lowTotal"].append('{:.2f}'.format(profit_low))
                
                evaled["buyLow"].append(str(buy_low_price))
                evaled["buyNormal"].append(str(buy_normal_price))
                evaled["selLow"].append(str(sell_low_price))
                evaled["sellNormal"].append(str(sell_normal_price))
                
                if(profit_low_new<=0): 
                    evaled["colors"].append(Fore.RED) 
                else: 
                    evaled["colors"].append(Fore.GREEN)
                
            else:
                evaled["sellIndex"].append(-1)    
                evaled["count"].append(i+1)
                evaled["normal"].append('??')
                evaled["normalTotal"].append('??')
                evaled["low"].append('??')
                evaled["lowTotal"].append('??')
                
                evaled["buyLow"].append(str(buy_low_price))
                evaled["buyNormal"].append(str(buy_normal_price))
                evaled["selLow"].append('??')
                evaled["sellNormal"].append('??')
                
                evaled["colors"].append(Fore.CYAN) 
             
            if(amount>0.5):
                evaled["amount"].append('{:.2f}'.format(amount))
            else:
                evaled["amount"].append(str(amount))
                
   
        tableVals = [evaled["count"],evaled["sellIndex"],evaled["buyLow"],evaled["selLow"],evaled["amount"],evaled["low"],evaled["lowTotal"],evaled["normal"],evaled["normalTotal"]]
        tableVals2 = np.array(tableVals).T.tolist()

        self.print_table(tableVals2, evaled["colors"],header=column_names, wrap=False, max_col_width=10, wrap_style='wrap',row_line=False, fix_col_width=True)

        if(self.tc.isPlot==True):
            self.plot(ops,self.buy_index,self.sell_index,evaled)

        return evaled
    
    def print_table(self,items, colors, header=None, wrap=True, max_col_width=20, wrap_style="wrap", row_line=False, fix_col_width=False):
        ''' Prints a matrix of data as a human readable table. Matrix
        should be a list of lists containing any type of values that can
        be converted into text strings.
        Two different column adjustment methods are supported through
        the *wrap_style* argument:
        
           wrap: it will wrap values to fit max_col_width (by extending cell height)
           cut: it will strip values to max_col_width
        If the *wrap* argument is set to False, column widths are set to fit all
        values in each column.
        This code is free software. Updates can be found at
        https://gist.github.com/jhcepas/5884168
        
        '''
        color_index  = 0
        if fix_col_width:
            c2maxw = dict([(i, max_col_width) for i in range(0,len(items[0]))])
            wrap = True
        elif not wrap:
            c2maxw = dict([(i, max([len(str(e[i])) for e in items])) for i in range(0,len(items[0]))])
        else:
            c2maxw = dict([(i, min(max_col_width, max([len(str(e[i])) for e in items])))
                            for i in range(0,len(items[0]))])
        if header:
            current_item = -1
            row = header
            if wrap and not fix_col_width:
                for col, maxw in c2maxw.iteritems():
                    c2maxw[col] = max(maxw, len(header[col]))
                    if wrap:
                        c2maxw[col] = min(c2maxw[col], max_col_width)
        else:
            current_item = 0
            row = items[current_item]
        while row:
            color = colors[color_index]
            color_index = color_index+1
            is_extra = False
            values = []
            extra_line = [""]*len(row)
            for col, val in enumerate(row):
                cwidth = c2maxw[col]
                wrap_width = cwidth
                val = str(val)
                try:
                    newline_i = val.index("\n")
                except ValueError:
                    pass
                else:
                    wrap_width = min(newline_i+1, wrap_width)
                    val = val.replace("\n", " ", 1)
                if wrap and len(val) > wrap_width:
                    if wrap_style == "cut":
                        val = val[:wrap_width-1]+"+"
                    elif wrap_style == "wrap":
                        extra_line[col] = val[wrap_width:]
                        val = val[:wrap_width]
                val = val.ljust(cwidth)
                values.append(val)
            
            print (pin(color)+' | '.join(values)+rst())
            if not set(extra_line) - set(['']):
                if header and current_item == -1:
                    print (' | '.join(['='*c2maxw[col] for col in range(0,len(row)) ]))
                current_item += 1
                try:
                    row = items[current_item]
                except IndexError:
                    row = None
            else:
                row = extra_line
                is_extra = True
     
            if row_line and not is_extra and not (header and current_item == 0):
                if row:
                    print (' | '.join(['-'*c2maxw[col] for col in range(0,len(row)) ]))
                else:
                    print (' | '.join(['='*c2maxw[col] for col in range(0,len(extra_line)) ]))
                
    def print_operation_keys(self,ops):
        ops_keys = ""
        first = True
        
        for key, value in ops.items():
            if(first == False):
                ops_keys += ", "       
            ops_keys += key
            first = False
        
        print(ops_keys)
                