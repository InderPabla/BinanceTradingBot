from TraderControl import TraderControl as TraderControl
import sys
import signal
import codecs, json 
import numpy as np
import json as json

class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(MyEncoder, self).default(obj)
        

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

    asset_price = -1
    tasks = [
        {
            'id': 1,
            'title': u'Buy groceries',
            'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
            'done': False
        },
        {
            'id': 2,
            'title': u'Learn Python',
            'description': u'Need to find a good Python tutorial on the web', 
            'done': False
        }
    ]
    
    run = False
    config = 'config.json'
        
    from TraderPlot import TraderPlot as TraderPlot 
    
    
    if(run==True):
        tp = TraderPlot()
        tp.temp_plt()
        tc = TraderControl(config,None)
        tc.run_strategies() 
    else:  
        def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):

            if methods is not None:
                methods = ', '.join(sorted(x.upper() for x in methods))
            if headers is not None and not isinstance(headers, str):
                headers = ', '.join(x.upper() for x in headers)
            if not isinstance(origin, str):
                origin = ', '.join(origin)
            if isinstance(max_age, timedelta):
                max_age = max_age.total_seconds()
        
            def get_methods():
                if methods is not None:
                    return methods
        
                options_resp = current_app.make_default_options_response()
                return options_resp.headers['allow']
        
            def decorator(f):
                def wrapped_function(*args, **kwargs):
                    if automatic_options and request.method == 'OPTIONS':
                        resp = current_app.make_default_options_response()
                    else:
                        resp = make_response(f(*args, **kwargs))
                    if not attach_to_all and request.method != 'OPTIONS':
                        return resp
        
                    h = resp.headers
                    
                    h['Access-Control-Allow-Origin'] = origin
                    h['Access-Control-Allow-Methods'] = get_methods()
                    h['Access-Control-Max-Age'] = str(max_age)
                    if headers is not None:
                        h['Access-Control-Allow-Headers'] = headers
                    return resp
        
                f.provide_automatic_options = False
                return update_wrapper(wrapped_function, f)
            return decorator
        
        
        
        
        print("FLASK NOW TO RUN")
        '''
        tc = TraderControl(config,None)
        ops,buy_index,sell_index,evaled = tc.test_run_strategy() 
        print(buy_index)
        '''
        
        from flask import request, abort
        from flask import Flask, jsonify
        from flask_cors import CORS, cross_origin
        from dateutil.relativedelta import relativedelta
        from datetime import datetime, timedelta
        from flask import make_response, current_app
        from functools import update_wrapper
        import os, re

        app = Flask(__name__)
        CORS(app)
        #origin = 'http://127.0.0.1:5000'
        origin = '*'
        
        
        
        def shutdown_server():
            func = request.environ.get('werkzeug.server.shutdown')
            if func is None:
                raise RuntimeError('Not running with the Werkzeug Server')
            func()
    
        @app.route('/shutdown', methods=['GET'])
        #@crossdomain(origin=origin)
        def shutdown():
            shutdown_server()
            return 'Server shutting down...'
    
        @app.route('/config', methods=['GET'])
        def get_config():
            return json.dumps(json.load(open(config)))
        
        @app.route('/strategies', methods=['GET'])
        def get_strategies():
            
            dirname, filename = os.path.split(os.path.abspath(__file__))
            strat_list = os.listdir(dirname)
            strategy_regex_py = re.compile(r'Strategy_[a-zA-Z0-9]+_v[0-9]+.py')
            strategy_regex = re.compile(r'Strategy_[a-zA-Z0-9]+_v[0-9]+')
            matched_list = []
            for i in range(0,len(strat_list)):
                if(bool(strategy_regex.match(strat_list[i])) and bool(strategy_regex_py.match(strat_list[i]))):
                    matched_list.append(strat_list[i][:-3])
                    
            
            
            return json.dumps({'default':json.load(open(config))['strategy'],'strategies':matched_list})
    
        @app.route('/tickers', methods=['GET'])
        def get_tickers():
            tc = TraderControl(config,None,ignoreInit=True)
            return json.dumps(tc.get_tickers())
        
        @app.route('/server-time', methods=['GET'])
        def get_server_time():
            tc = TraderControl(config,None,ignoreInit=True)
            return json.dumps({'servertime':tc.tb.get_current_server_time()})
        
        @app.route('/init-strategy', methods=['POST'])
        @app.errorhandler(404)
        def get_init_strategy():
            print("===========================================================")
            print("===========================================================")
            print("===========================================================")
            data = json.loads(request.data)
            print(data)
            time = data["time"]
            pair = data["ticker"]
            strategy = data["strategy"]
            lastCloseTime=-1
            lastBuyIndex=-1
            
            opBuyIndices = []
            opSellIndices = []
            opLastBuyIndex = -1
            opLastIndexBeforeOperation = -1
            debugVal = -1
            tickIndex = 0
            
            if ("tickIndex" in data):
                tickIndex = data["tickIndex"]
                
            if ("debugVal" in data):
                debugVal = data["debugVal"]
                
            if ("lastCloseTime" in data):
                lastCloseTime = data["lastCloseTime"]
            
            if ("lastBuyIndex" in data):
                lastBuyIndex = data["lastBuyIndex"]
                
            if ("forceState" in data):
                if ("buyIndex" in data['forceState']):
                    opBuyIndices = data['forceState']["buyIndex"]
                if ("sellIndex" in data['forceState']):
                    opSellIndices = data['forceState']["sellIndex"]
                if ("lastBuyIndex" in data['forceState']):
                    opLastBuyIndex = data['forceState']["lastBuyIndex"]
                if ("lastBuyIndex" in data['forceState']):
                    opLastIndexBeforeOperation = data['forceState']["lastIndexBeforeOperation"]
                
            todayDate = datetime.today()
            todayDateFormatted = todayDate.strftime('%Y-%m-%d')
            file = "Historical/"+pair+"_"+time+"_Binance_Numpy_"+todayDateFormatted+".npy"
            
            if(not os.path.exists(file)):
                todayDate = datetime.today() - timedelta(days=1)
                todayDateFormatted = todayDate.strftime('%Y-%m-%d')
                file = "Historical/"+pair+"_"+time+"_Binance_Numpy_"+todayDateFormatted+".npy"
                print("New file not found, checking from yesterday",file)
            
            if(not os.path.exists(file)):
                return jsonify({'error': file+" not found."}),404 
                
                
            base = ""
            asset = ""
            
            if(pair.endswith("BNB")):
                asset = "BNB"
                base = pair[0:len(pair)-3]
            elif(pair.endswith("BTC")):
                asset = "BTC"
                base = pair[0:len(pair)-3]
            elif(pair.endswith("ETH")):
                asset = "ETH"
                base = pair[0:len(pair)-3]
            elif(pair.endswith("USDT")):
                asset = "USDT"     
                base = pair[0:len(pair)-4]
            else:  
                 return jsonify({'error': pair+" does not exist."}),404
             
            override = {"base":base,"asset":asset,"time":time,"file":file,"strategy":strategy}
            print ("Override",override)
     
            global asset_price
            print("ASSET PRICE",asset_price,"AAAAAAAAAAAAAAAAAAAAAAAAA")
            tc = TraderControl(config,None,override=override,debugVal=debugVal,asset_price=asset_price)
            asset_price = tc.asset_price    
           
            if(debugVal>-1):
                print("=======DEBUGGING MODE=====")
            ops,buy_index,sell_index,evaled = tc.test_run_strategy(lastCloseTime=lastCloseTime,lastBuyIndex=lastBuyIndex,opBuyIndices=opBuyIndices,opSellIndices=opSellIndices,opLastBuyIndex=opLastBuyIndex,opLastIndexBeforeOperation=opLastIndexBeforeOperation,tickIndex=tickIndex) 
            complete_ops = {'ops':ops,'buy_index':buy_index,'sell_index':sell_index,'evaled':evaled}
            
            print("===========================================================")
            print("===========================================================")
            print("===========================================================")
            
            if(debugVal>-1):
                debugVal = debugVal +1
            return json.dumps(complete_ops,cls=MyEncoder)
            
            #return jsonify({'status': "niceee"})
        
        @app.route('/historical', methods=['POST'])
        def get_historial():
            data = json.loads(request.data)
            
            #try:
            print(data)
            
            time = data["time"]
            pair = data["ticker"]
            
            
            todayDate = datetime.today()
            todayDateFormatted = todayDate.strftime('%Y-%m-%d')
            previousDate = todayDate - relativedelta(months=5)
            previousDateFormatted = previousDate.strftime('%Y-%m-%d')

            filename = "Historical/"+pair+"_"+time+"_Binance_Numpy_"+todayDateFormatted+".npy"
            
            if(os.path.exists(filename)):
                print(filename,"exists.")
                return jsonify({'status': "success"})
            
            #check for previous day (don't really want to keep downloading every day)
            todayDate = datetime.today() - timedelta(days=1)
            todayDateFormatted = todayDate.strftime('%Y-%m-%d')
            filename = "Historical/"+pair+"_"+time+"_Binance_Numpy_"+todayDateFormatted+".npy"
            
            if(os.path.exists(filename)):
                print("File from yesterday",filename,"exists.")
                return jsonify({'status': "success"})
            else:
                 todayDate = datetime.today()
                 todayDateFormatted = todayDate.strftime('%Y-%m-%d')
                 filename = "Historical/"+pair+"_"+time+"_Binance_Numpy_"+todayDateFormatted+".npy"
            
            print(filename,"does not exists. Starting Download.")
            
            global asset_price
            tc = TraderControl(config,None,ignoreInit=True,asset_price=asset_price)
            asset_price = tc.asset_price
            
            utcdate = datetime.strptime(previousDateFormatted, '%Y-%m-%d').strftime ("%Y-%m-%d %H:%M:%S")
            ticks = tc.historical(time,pair,utcdate)
            print("Download for",pair,"-",time,"-",previousDateFormatted,"-",todayDateFormatted,"completed. Saving...")
            np.save(filename,ticks)
            print("Data saved under Historial folder.",filename)

            return jsonify({'status': "success"})
        
        
        @app.route('/test1', methods=['GET'])
        #@crossdomain(origin=origin)
        def get_test1():
            return jsonify({'tasks': tasks})
         
        @app.route('/test2', methods=['GET'])
        #@crossdomain(origin=origin)
        def get_test2():
            print("For some reason running this?")
            tc = TraderControl(config,None)
            #ops,buy_index,sell_index,evaled = tc.test_run_strategy() 
            #print(buy_index)
            #print(sell_index)
            #print(evaled)
            
            ops,buy_index,sell_index,evaled,group = tc.test_run_strategy() 
            complete_ops = {'ops':ops,'buy_index':buy_index,'sell_index':sell_index,'evaled':evaled,'group':group}
            
            print(group)
            print(evaled)
            
            return json.dumps(complete_ops,cls=MyEncoder)
            
        app.run(debug=True)

        

    '''
    while(True):
        time.sleep(0.5)
    '''
        


