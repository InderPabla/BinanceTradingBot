// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors       = require('cors');
var trader_service = require('./trader-service');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

var port = 8000; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/candles', function(req, res) {
    console.log("=====> POST /candles");
    trader_service.postCandles(req.body,function(err,state){
        if(err)
            res.json(err);  
        else 
            res.json(state); 
    })
    
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(cors());
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port,function(){
    console.log("API running with CORS on port "+port+".");
});


