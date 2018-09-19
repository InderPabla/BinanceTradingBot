from TraderControl import TraderControl as TraderControl
    
if __name__=="__main__":
    '''
    import signal
    import sys
    import time
    def signal_handler(sig, frame):
            print('You pressed Ctrl+C!')
            sys.exit(0)
    signal.signal(signal.SIGINT, signal_handler)
    print('Press Ctrl+C')
    '''
    #print("Main Start")
    
    config = 'config.json'
    
    from TraderPlot import TraderPlot as TraderPlot 
    tp = TraderPlot()
    tp.temp_plt()
    tc = TraderControl(config,None)
    tc.run_strategies() 
            
    
    
    '''
    while(True):
        time.sleep(0.5)
    '''
        