from TraderControl import TraderControl as TraderControl
import abc
from astropy.table import Table

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
    def plot(self,ops,buy_index,sell_index,risk_NORMAL,total_NORMAL,risk_LOW,total_LOW):
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
            
            amount_normal = (self.tc.asset_amount/self.ops['close'][0])
            USD_CONVERT = self.tc.asset_price
            
            
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
                        
                    
            
            self.evaluate_strategy(ops)
        else:
            self.plot(ops,[],[])
        
    def append_buy(self,index):
        self.buy_index.append(index)
    
    def append_sell(self,index):
        self.sell_index.append(index)
    
    def evaluate_strategy(self,ops):
        profit_normal = 0.0
        profit_low = 0.0
        #profit_medium = 0.0
        amount = (self.tc.asset_amount/self.ops['close'][0])
        #column_names = ('count', 'risk_NORMAL','total_NORMAL','risk_MEDIUM','total_MEDIUM','risk_LOW','total_LOW')
        column_names = ('count', 'risk_NORMAL','total_NORMAL','risk_LOW','total_LOW')
        count = []
        risk_NORMAL = []
        risk_LOW = []
        #risk_MEDIUM = []
        total_NORMAL = []
        total_LOW = []
        #total_MEDIUM = []
        currency_amount = self.tc.currency_amount
        
        #amount_normal = (self.tc.asset_amount/self.ops['close'][0])
        
        USD_CONVERT = self.tc.asset_price
        
        print(len(self.sell_index))
        for i in range(0,len(self.sell_index)):
            
            
            count.append(i)
            buy_index = self.buy_index[i]
            sell_index = self.sell_index[i]
            
            #add_index = 1
            #if(sell_index==len(self.ops['close'])-1):
                #add_index = 0
                
            buy_normal_price = self.ops['close'][buy_index]
            sell_normal_price = self.ops['close'][sell_index]
  
            #buy_medium_price = max(self.ops['close'][buy_index],self.ops['open'][buy_index+add_index]) #self.ops['close'][buy_index+add_index]
            #sell_medium_price = min(self.ops['close'][sell_index],self.ops['open'][sell_index+add_index]) #self.ops['close'][sell_index+add_index]
            
            buy_low_price = buy_normal_price+(max(abs(self.ops['high'][buy_index]-self.ops['close'][buy_index]),abs(self.ops['low'][buy_index]-self.ops['close'][buy_index]))*0.25)
            sell_low_price = sell_normal_price-(max(abs(self.ops['low'][sell_index]-self.ops['close'][sell_index]),abs(self.ops['high'][sell_index]-self.ops['close'][sell_index]))*0.25)
            
  
            
            
            if('btcClose' in self.ops):
                USD_CONVERT = self.ops["btcClose"][len(ops["btcClose"])-1]
            
                amount = (currency_amount/self.ops["btcClose"][len(ops["btcClose"])-1])/self.ops["close"][buy_index]
                amount_normal = (currency_amount/self.ops["btcClose"][len(ops["btcClose"])-1])/self.ops["close"][buy_index]
            
            profit_normal_new = ((sell_normal_price-buy_normal_price)*amount)*USD_CONVERT
            currency_amount = currency_amount+profit_normal_new
            
            profit_normal = profit_normal+profit_normal_new
            risk_NORMAL.append('{:.2f}'.format(profit_normal_new))
            total_NORMAL.append('{:.2f}'.format(profit_normal))
            #b = amount_normal
            # = amount+((profit_normal/USD_CONVERT)/(self.ops['close'][sell_index]))
            #print(b,amount_normal,profit_normal)
            
            profit_low_new = ((sell_low_price-buy_low_price)*amount)*USD_CONVERT
            profit_low = profit_low+profit_low_new
            risk_LOW.append('{:.2f}'.format(profit_low_new))
            total_LOW.append('{:.2f}'.format(profit_low))
            
            #profit_medium_new = ((sell_medium_price-buy_medium_price)*amount)*USD_CONVERT
            #profit_medium = profit_medium+profit_medium_new
            #risk_MEDIUM.append('{:.2f}'.format(profit_medium_new))
            #total_MEDIUM.append('{:.2f}'.format(profit_medium))
            
        #table = Table([count,risk_NORMAL,total_NORMAL,risk_MEDIUM,total_MEDIUM,risk_LOW,total_LOW], names=column_names)    
        table = Table([count,risk_NORMAL,total_NORMAL,risk_LOW,total_LOW], names=column_names)    
        Table.pprint(table)

        self.plot(ops,self.buy_index,self.sell_index,risk_NORMAL,total_NORMAL,risk_LOW,total_LOW)   
        #print('P R O F I T')  
        #print(profit*self.tc.asset_price)
        pass
    
    def print_operation_keys(self,ops):
        ops_keys = ""
        first = True
        
        for key, value in ops.items():
            if(first == False):
                ops_keys += ", "       
            ops_keys += key
            first = False
        
        print(ops_keys)
                