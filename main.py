from TraderControl import TraderControl as TraderControl
import sys
import signal
import codecs, json 
import numpy as np

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
    #print("Main Start")
    
    
        
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
        
        from flask import request
        from flask import Flask, jsonify
        from flask_cors import CORS, cross_origin
        from datetime import timedelta
        from flask import make_response, current_app
        from functools import update_wrapper


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
            
            ops,buy_index,sell_index,evaled = tc.test_run_strategy() 
            #print(ops)
            
            #return jsonify({'tasks': ops})
            return json.dumps(ops,cls=MyEncoder)
            
        app.run(debug=True)

        

    '''
    while(True):
        time.sleep(0.5)
    '''
        


