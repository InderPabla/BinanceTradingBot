var mongo = require('mongodb');
var MongoClient = mongo.MongoClient
var ObjectID = mongo.ObjectID;

const databaseName = "CryptoDB"
const mongoURL = 'mongodb://localhost:27017'
const COLLECTIONS = {
    CANDLES:"candles",
}

/* 
CANDLES: _id, frameID, time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume,ignore
*/



function postCandles(json,callback) {
    let frameID = new ObjectID();
    
    let candles = json.candles;
    let pair = json.pair;
    let timeFrame = json.timeFrame;
    let openTime = json.candles[0].time;

    for(let i = 0; i<candles.length;i++) {
        candles[i].frameID = frameID;
    }

    console.log(pair+" "+timeFrame+" "+candles.length);
    console.log(candles[0]);
    console.log(frameID);

    insertMany(COLLECTIONS.CANDLES,candles)
}

function insertMany(collection,objects){
    
    
    let database = null;
    let _db;
    open()
    .then((db)=>{
        _db = db;
        database = db.db(databaseName);
        return database.collection(collection)    
    })
    .then((dbs)=>{
        return dbs.insertMany(objects)
    })
    .then((result)=>{
        console.log(result.result);
        _db.close();
    })
    .catch((err)=>{
        console.error(err)
    })
}


function insert(collection,object){
    let database = null;
    let _db;
    open()
    .then((db)=>{
        _db = db;
        database = db.db(databaseName);
        return database.collection(collection)    
    })
    .then((dbs)=>{
        return dbs.insert(object)
    })
    .then((result)=>{
        console.log(result);
        _db.close();
    })
    .catch((err)=>{
        console.error(err)
    })
}


function open(){
    
    // Connection URL. This is where your mongodb server is running.

    return new Promise((resolve, reject)=>{
        // Use connect method to connect to the Server
        MongoClient.connect(mongoURL, (err, db) => {
            if (err) {
                reject(err);
            } else {
                resolve(db);
            }
        });
    });
}

function close(db){
    //Close connection
    if(db){
        db.close();
    }
}



module.exports = {
    postCandles
}

