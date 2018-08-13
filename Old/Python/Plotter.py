# -*- coding: utf-8 -*-
"""
Created on Sun Jan 14 17:02:38 2018

@author: InderTheGreat
"""
import matplotlib.pyplot as plt
import numpy as np

class Plotter:
    def __init__(self):
       print("Plotter")
      
    def fig(self):
        fig = plt.gcf()
        fig.set_size_inches(40, 13,forward=True)
    
    def plot(self,data,color):
        plt.plot(data, color = color)
      
    def plotCheckPrevious(self,data,color1,color2):
        GREATER = 'G'
        LOWER = 'L'
        
        xArray = []
        yArray = []
        followingState = -1
        #0 following state is when data[i]>=data[i-1] 
        #1 following state is when data[i]<=data[i-1] 
        for i in range(0,len(data)):
            if(i == 0):
                plt.plot([0],data[0],'white')  
                xArray.append(i)
                yArray.append(data[i])
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
            
        '''
        d = data[0]
        data2 = np.full(shape=(100,),fill_value=d)
        x = np.arange(10, 110, 1)
        plt.plot(x,data2,color1)
        '''
        
    def fill(self,data,yPoint,color1,color2):
        x = np.arange(0, len(data), 1)
        y = np.full(shape=(len(data),),fill_value=yPoint)
        plt.fill_between(x, data, y, where=y >= data, facecolor=color1, interpolate=True)
        plt.fill_between(x, data, y, where=y <= data, facecolor=color2, interpolate=True)
        
    def show(self):
        plt.show()
    
    #- -- -. : 
    def hLine(self,y,color,style):
        plt.axhline(y=y, color=color, linestyle=style)
    
    #- -- -. : 
    def vLine(self,x,color,style):
        plt.axvline(x=x, color=color, linestyle=style)
    
    def save(self,file):
        plt.savefig(file)