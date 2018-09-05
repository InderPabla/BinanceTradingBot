import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime

class TraderPlot:
    def __init__(self):
       self.className = 'TraderPlot'
       ax = plt.gca()
       plt.rcParams.update({
       "lines.color": "white",
       "patch.edgecolor": "white",
       "text.color": "black",
       "axes.facecolor": "black",
       "axes.edgecolor": "lightgray",
       "axes.labelcolor": "white",
       "xtick.color": "white",
       "ytick.color": "white",
       "grid.color": "lightgray",
       "figure.facecolor": "black",
       "figure.edgecolor": "black",
       "savefig.facecolor": "black",
       "savefig.edgecolor": "black"})
       ax.set_facecolor('black')
        
    def fig(self):
        
        fig = plt.gcf()
        fig.set_size_inches(40, 13,forward=True)
        ax = plt.gca()
        plt.rcParams.update({
        "lines.color": "white",
        "patch.edgecolor": "white",
        "text.color": "black",
        "axes.facecolor": "black",
        "axes.edgecolor": "lightgray",
        "axes.labelcolor": "white",
        "xtick.color": "white",
        "ytick.color": "white",
        "grid.color": "lightgray",
        "figure.facecolor": "black",
        "figure.edgecolor": "black",
        "savefig.facecolor": "black",
        "savefig.edgecolor": "black"})
        ax.set_facecolor('black')
        
    def fig_cust(self,width,height):
        fig = plt.gcf()
        fig.set_size_inches(width, height,forward=True) 
        ax = plt.gca()
        plt.rcParams.update({
        "lines.color": "white",
        "patch.edgecolor": "white",
        "text.color": "black",
        "axes.facecolor": "black",
        "axes.edgecolor": "lightgray",
        "axes.labelcolor": "white",
        "xtick.color": "white",
        "ytick.color": "white",
        "grid.color": "lightgray",
        "figure.facecolor": "black",
        "figure.edgecolor": "black",
        "savefig.facecolor": "black",
        "savefig.edgecolor": "black"})
        ax.set_facecolor('black')
        
    def fig_custom(self,x,y):
        fig = plt.gcf()
        fig.set_size_inches(x, y,forward=True)
        ax = plt.gca()
        plt.rcParams.update({
        "lines.color": "white",
        "patch.edgecolor": "white",
        "text.color": "black",
        "axes.facecolor": "black",
        "axes.edgecolor": "lightgray",
        "axes.labelcolor": "white",
        "xtick.color": "white",
        "ytick.color": "white",
        "grid.color": "lightgray",
        "figure.facecolor": "black",
        "figure.edgecolor": "black",
        "savefig.facecolor": "black",
        "savefig.edgecolor": "black"})
        ax.set_facecolor('black')

    def temp_plt(self):
        fig = plt.gcf()
        fig.set_size_inches(0.1, 0.1,forward=True)
        plt.plot([1,1],'white')
        ax = plt.gca()
        plt.rcParams.update({
        "lines.color": "white",
        "patch.edgecolor": "white",
        "text.color": "black",
        "axes.facecolor": "black",
        "axes.edgecolor": "lightgray",
        "axes.labelcolor": "white",
        "xtick.color": "white",
        "ytick.color": "white",
        "grid.color": "lightgray",
        "figure.facecolor": "black",
        "figure.edgecolor": "black",
        "savefig.facecolor": "black",
        "savefig.edgecolor": "black"})
        ax.set_facecolor('black')
        
        plt.show()
        
    def plot(self,data,color):
        
        plt.plot(data, color = color)

    def plot_with_colors(self,data,colors):
        for index in range(1,len(data)):
            if(index>0):
                plt.plot([index-1,index],[data[index-1],data[index]],colors[index])        
        
    def plot_check_previous(self,data,color1,color2):
        GREATER = 'G'
        LOWER = 'L'
        
        xArray = []
        yArray = []
        followingState = -1
        #0 following state is when data[i]>=data[i-1] 
        #1 following state is when data[i]<=data[i-1] 
        for i in range(0,len(data)):
            if(i == 0):
                xArray.append(i)
                yArray.append(data[i])
                pass
            else:
                if(followingState == GREATER):
                    if(data[i]>=data[i-1]):    
                        xArray.append(i)
                        yArray.append(data[i])        
                    else:  
                        plt.plot(xArray,yArray,color1)

                        followingState = LOWER
                        xArray = []
                        yArray = []
                        xArray.append(i-1)
                        yArray.append(data[i-1])   
                        xArray.append(i)
                        yArray.append(data[i])   
                elif(followingState == LOWER):
                    if(data[i]<=data[i-1]):    
                        xArray.append(i)
                        yArray.append(data[i])        
                    else:  
                        plt.plot(xArray,yArray,color2)

                        followingState = GREATER
                        xArray = []
                        yArray = []
                        xArray.append(i-1)
                        yArray.append(data[i-1])   
                        xArray.append(i)
                        yArray.append(data[i])   
                else:
                    if(data[i]>data[i-1]):
                        followingState = GREATER
                    else:
                        followingState = LOWER
                        
                    xArray.append(i)
                    yArray.append(data[i])
                        
        
        if(followingState == GREATER):
            plt.plot(xArray,yArray,color1)
        else:
            plt.plot(xArray,yArray,color2)
    
    def plot_array(self,x,y,color) :
        plt.plot(x,y,color)
        
    def text(self,x,y,stri,fontsize):
        plt.xticks(x, y, stri, fontsize=fontsize)
        
    def custom_plot_color_decision(self,out,ops,custom_method):
        
        color,state = custom_method(ops,0,0)
        old_y = out[0]
        for index in range(1,len(out)):
            color,state = custom_method(ops,index,state)
            y_value = out[index]
            if(index>0):
                plt.plot([index-1,index],[old_y,y_value],color)
 
            old_y = y_value
        
    def axvlines(self,xs, color,linestyle):
        """
        Draw vertical lines on plot
        :param xs: A scalar, list, or 1D array of horizontal offsets
        :param plot_kwargs: Keyword arguments to be passed to plot
        :return: The plot object corresponding to the lines.
        """
        #for xc in xs:
        plt.axvline(x=xs[0], color=color, linestyle=linestyle)

    
    def fill(self,data,yPoint,color1,color2):
        x = np.arange(0, len(data), 1)
        y = np.full(shape=(len(data),),fill_value=yPoint)
        plt.fill_between(x, data, y, where=y >= data, facecolor=color1, interpolate=True)
        plt.fill_between(x, data, y, where=y <= data, facecolor=color2, interpolate=True)
        
    def show(self):
        plt.show()
    
    #- -- -. : 
    def h_line(self,y,color,style):
        plt.axhline(y=y, color=color, linestyle=style)
    
    #- -- -. : 
    def v_line(self,x,color,style):
        plt.axvline(x=x, color=color, linestyle=style)
    
    def plot_time(self,time,color,style):
        previous_hour = datetime.fromtimestamp(time[0]/1000).hour
        x_ind = []
        y_lab = []
        
        for i in range(1,len(time)):
            stamp = datetime.fromtimestamp(time[i]/1000)
            current_weekday = stamp.weekday()
            current_hour = stamp.hour
            if((not(previous_hour==current_hour)) 
            #and (current_hour == 6 or current_hour==12 or current_hour ==18 or current_hour == 0)):
            and (current_hour==12  or current_hour == 0)):
                self.v_line(i,color,style)
                #self.text(i,0,str(current_hour),12)
                #plt.xticks(i, str(current_hour), rotation='vertical')
                x_ind.append(i)
                
                if(current_hour==0):
                    y_lab.append('12 '+str(current_weekday))
                elif(current_hour==6):
                    
                    #y_lab.append('6 AM '+str(current_weekday))
                    pass
                elif(current_hour==12):
                    y_lab.append('0 '+str(current_weekday))
                elif(current_hour==18):
                    #y_lab.append('6 PM '+str(current_weekday))
                    pass
                
            previous_hour = current_hour
        plt.xticks(x_ind, y_lab, rotation='horizontal')
        
        
    def plot_orders(self,ops,buy_index,sell_index,buy_color,sell_color,var):
        if(len(sell_index)>0):
            for i in range(0,len(sell_index)):
                if(ops[var][sell_index[i]]-ops[var][buy_index[i]]<0):
                    self.v_line(sell_index[i],sell_color,":")    
                    self.v_line(buy_index[i],buy_color,":")
                else:
                    self.v_line(sell_index[i],sell_color,"-")    
                    self.v_line(buy_index[i],buy_color,"-")
            
        if(len(buy_index)>len(sell_index)):
            self.v_line(buy_index[len(buy_index)-1],"cyan","-")    
    
    def plot_profit(self,ops,buy_index,sell_index,evaled):
        #for i in range(0,len(risk_NORMAL)):
        self.fig_cust(12,5)
        if(len(buy_index)==len(sell_index)):
            self.plot(evaled["normalTotal"],'red')
            self.plot(evaled["lowTotal"],'lime')
        else:
            self.plot(evaled["normalTotal"][0:len(evaled["normalTotal"])-1],'red')
            self.plot(evaled["lowTotal"][0:len(evaled["normalTotal"])-1],'lime')
        self.show()
                
    def save(self,file):
        plt.savefig(file)