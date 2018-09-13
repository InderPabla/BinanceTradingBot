from TraderControl import TraderControl as TraderControl
    
if __name__=="__main__":
    #print("Main Start")
    config = 'config.json'
    tc = TraderControl(config,None)
    tc.run_strategies() 
        
        