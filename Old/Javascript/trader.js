
const TIME_INDEX = 0;
const OPEN_INDEX = 1;
const HIGH_INDEX = 2;
const LOW_INDEX = 3;
const CLOSE_INDEX = 4;
const VOLUME_INDEX = 5;
const CLOSE_TIME_INDEX = 6;
const ASSET_VOLUME_INDEX = 7;
const TRADES_INDEX = 8;
const BUY_BASE_VOLUME_INDEX = 9;
const BUY_ASSETS_VOLUME_INDEX = 10;
const IGNORED_INDEX = 10;

const MACD_HIGH_EMA = 26
const MACD_LOW_EMA = 12
const MACD_STR_EMA = 9 //strength EMA

const RSI_PERIOD = 14

const A_MAX = 0.2;
const A_ADD = 0.02;
const A_START = 0.02;
const SAR_START_INDEX = 4;



const time_frame = process.argv[2]; 
const symbol = process.argv[3];

var buyingAmount = 1500;

const binance = require('node-binance-api');
binance.options({
  'APIKEY':'',
  'APISECRET':'',
  'recvWindow': 60000
});

btcusd = 18000.90 
WR_PERIOD = 14

test_mode = true;
binance.prices(function(ticker) { 
    let p = ticker[symbol]*ticker["BTCUSDT"];
    buyingAmount = Math.round((buyingAmount/p));
    console.log("Price of "+symbol+": ", ticker[symbol]+" USD: $"+p+" Buying Power: "+buyingAmount+" coins. "+ticker["BTCUSDT"]);
    
    start();


  });




function start() {
    if(test_mode == true){
        binance.candlesticks(symbol, time_frame, function(ticks, symbol) {
            
             convert_all_string_to_float(ticks,[OPEN_INDEX,HIGH_INDEX,LOW_INDEX,CLOSE_INDEX,VOLUME_INDEX,ASSET_VOLUME_INDEX,TRADES_INDEX,BUY_ASSETS_VOLUME_INDEX,BUY_BASE_VOLUME_INDEX,IGNORED_INDEX]);
         
             let closing_price = compile_closing_price(ticks);
         
             let macd_calc = calculate_macd(closing_price, ticks,MACD_HIGH_EMA, MACD_LOW_EMA, MACD_STR_EMA);
             let rsi_calc = calculate_rsi(ticks,closing_price, RSI_PERIOD);
         
             let adx_calc = calculate_adx(ticks);
             
             let wr_calc = calculate_wr(ticks,WR_PERIOD,rsi_calc.srsi);
             console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
             
             test_strategy_pspm_v1(ticks,closing_price,macd_calc);
             test_strategy_pspm_v2(ticks,closing_price,macd_calc,rsi_calc);
             test_strategy_rsi_3(ticks,closing_price,macd_calc,rsi_calc);
         
             
             test_strategy_adx_4(ticks,closing_price,macd_calc,adx_calc);
             test_strategy_srsi(ticks,closing_price,rsi_calc,macd_calc,wr_calc);
             test_strategy_macd_v1(ticks,closing_price,macd_calc,rsi_calc,wr_calc) 
         });
         
    }
    else {
        
    }
}



 
    
  

function test_strategy_srsi(ticks,closing_price,rsi_calc,macd_calc,wr_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0;
    let previousProfit  = 0;
    let start_index = 150;

    //console.log("Strategy: ADX");
   // console.log("Buying Power: 8000 ADA");
    //console.log("Closing Time Frame: "+time_frame);

    
    for(let i = start_index; i<ticks.length-1; i++) {
        if(in_trade == false) {
            
            hisi =  macd_calc.histogram[i]*10000000.0
            hisi1 =  macd_calc.histogram[i-1]*10000000.0
            histd = hisi1-hisi
            histn = hisi-histd
            if(rsi_calc.srsi[i]<=5 && rsi_calc.srsi[i-1]>rsi_calc.srsi[i] && !(hisi>0 && hisi1>0 && histn<0) && !(macd_calc.histogram[i]<0 && macd_calc.histogram[i-1]<0 && macd_calc.histogram[i-1]-macd_calc.histogram[i]<0) //&& (rsi_calc.rsi[i]-rsi_calc.rsi[i-1])>-2
                
               
           ) {
                    if(!(hisi<0 && hisi1<0 && wr_calc.wrBounce[i]>1)){
                        let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                        //console.log(date+" "+rsi_calc.rsi[i].toFixed(2)+" "+rsi_calc.rsi[i-1].toFixed(2)+" "+rsi_calc.rsi[i-2].toFixed(2)+" "+closing_price[i]);
                        
    
                        console.log(date+" "+rsi_calc.srsi[i]+" "+rsi_calc.srsi[i-1]+" "+rsi_calc.rsi[i].toFixed(2)+" "+rsi_calc.rsi[i-1].toFixed(2)+" "+closing_price[i]+" "+hisi.toFixed(2)+" "+hisi1.toFixed(2)+" "+histd.toFixed(2)+" "+histn.toFixed(2)+" "+wr_calc.wrBounce[i]+"----");
                        //console.log("------------------------------------------------------------------------------");
                        ///console.log("1. "+adx_calc.adx[i]);
                        ///console.log("MACD-SIGNAL-BUY: ");
                        ///console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                        
                        buyPrice = closing_price[i];
                        in_trade = true;
                    }
                    
                
            }
   
          
            
        }
        else {
            if(rsi_calc.srsi[i]<rsi_calc.srsi[i-1]) {
                
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                sellPrice = closing_price[i];

                let thisTradeProfit = sellPrice-buyPrice;
                previousProfit = thisTradeProfit;
                in_trade = false;

                profit += thisTradeProfit;
                previousProfit = sellPrice-buyPrice
                
                console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+(previousProfit*btcusd*buyingAmount).toFixed(2)+" "+rsi_calc.rsi[i].toFixed(2)+" "+rsi_calc.rsi[i-1].toFixed(2)+" "+rsi_calc.rsi[i-2].toFixed(2)+" "+sellPrice);
                //console.log("------------------------------------------------------------------------------");
               //console.log("MACD-SIGNAL-SELL: ");
                //console.log("   BUY-PRICE: "+buyPrice+" BTC.\n   SELL-PRICE: "+sellPrice+"BTC.\n   ORDER-SELL: 8000.\n   TRADE-PROFIT: "+thisTradeProfit+" BTC.\n   TIMESTAMP: "+date);
            }
        } 
    }
    
    console.log("TOAL-PROFIT: "+(profit*buyingAmount)*btcusd+" USD.");
    console.log("====================================================");
}


function test_strategy_adx_4(ticks,closing_price,macd_calc,adx_calc,macd_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0.00000000000001;
    let previousProfit  = 0.0000000000001;
    let start_index = 150;

    //console.log("Strategy: ADX");
   // console.log("Buying Power: 8000 ADA");
    //console.log("Closing Time Frame: "+time_frame);

    
    for(let i = start_index; i<ticks.length; i++) {
        if(in_trade == false) {
            
            if(adx_calc.adx[i]>20 && adx_calc.adx[i-1]<adx_calc.adx[i] && adx_calc.din14<adx_calc.dip14
               
           ) {
                    
                    let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                    
                    //console.log("------------------------------------------------------------------------------");
                    ///console.log("1. "+adx_calc.adx[i]);
                    ///console.log("MACD-SIGNAL-BUY: ");
                    ///console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                    buyPrice = closing_price[i];
                    in_trade = true;
                
            }
   
          
            
        }
        else {
            if(adx_calc.din14>adx_calc.dip14) {
                
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                sellPrice = closing_price[i];

                let thisTradeProfit = sellPrice-buyPrice;
                previousProfit = thisTradeProfit;
                in_trade = false;

                profit += thisTradeProfit;
                previousProfit = sellPrice-buyPrice
                
                console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+previousProfit*btcusd*buyingAmount);
                //console.log("------------------------------------------------------------------------------");
               //console.log("MACD-SIGNAL-SELL: ");
                //console.log("   BUY-PRICE: "+buyPrice+" BTC.\n   SELL-PRICE: "+sellPrice+"BTC.\n   ORDER-SELL: 8000.\n   TRADE-PROFIT: "+thisTradeProfit+" BTC.\n   TIMESTAMP: "+date);
            }
        } 
    }
    
    console.log("TOAL-PROFIT: "+(profit*buyingAmount)*btcusd+" USD.");
    console.log("====================================================");
}

function test_strategy_rsi_3(ticks,closing_price,macd_calc,rsi_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0.00000000000001;
    let previousProfit  = 0.0000000000001;
    let start_index = macd_calc.start_index>rsi_calc.start_index?macd_calc.start_index:rsi_calc.start_index;

    //console.log("Strategy: RSI");
    //console.log("Buying Power: 8000 ADA");
    //console.log("Closing Time Frame: "+time_frame);

    
    for(let i = start_index+1; i<ticks.length; i++) {
        if(in_trade == false) {
            
            if(rsi_calc.rsi[i]<30 && rsi_calc.rsi[i]>rsi_calc.rsi[i-1]
               
           ) {
                    
                    let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                    
                    //console.log("------------------------------------------------------------------------------");
                    //console.log("1. "+rsi_calc.rsi[i]);
                    //console.log("MACD-SIGNAL-BUY: ");
                    //console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                    buyPrice = closing_price[i];
                    in_trade = true;
                
            }
   
          
            
        }
        else {
            if(rsi_calc.rsi[i]>60) {
                
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                sellPrice = closing_price[i];

                let thisTradeProfit = sellPrice-buyPrice;
                previousProfit = thisTradeProfit;
                in_trade = false;

                profit += thisTradeProfit;
                previousProfit = sellPrice-buyPrice
                
                console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+previousProfit*btcusd*buyingAmount);
                //console.log("------------------------------------------------------------------------------");
                //console.log("MACD-SIGNAL-SELL: ");
                //console.log("   BUY-PRICE: "+buyPrice+" BTC.\n   SELL-PRICE: "+sellPrice+"BTC.\n   ORDER-SELL: 8000.\n   TRADE-PROFIT: "+thisTradeProfit+" BTC.\n   TIMESTAMP: "+date);
            }
        } 
    }
    
    console.log("TOAL-PROFIT: "+(profit*buyingAmount)*btcusd+" USD.");
    console.log("====================================================");
}

  function test_strategy_pspm_v2(ticks,closing_price,macd_calc,rsi_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0.00000000000001;
    let previousProfit  = 0.0000000000001;
    let start_index = macd_calc.start_index>rsi_calc.start_index?macd_calc.start_index:rsi_calc.start_index;

    //console.log("Strategy: Postive Signal-Positive MACD V2 (PSPM V2)");
   // console.log("Buying Power: 8000 ADA");
    //console.log("Closing Time Frame: "+time_frame);

    
    for(let i = start_index+1; i<ticks.length; i++) {
        if(in_trade == false) {
            
            if(macd_calc.histogram[i-1]<0 
                && macd_calc.histogram[i]>0 
                && macd_calc.macd_line[i]>0
                && macd_calc.ema_macd[i]>0
               
            && closing_price[i]>closing_price[i-1] ) {
                    
                    let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                    
                   //console.log("------------------------------------------------------------------------------");
                    //console.log("1. "+rsi_calc.rsi[i]);
                    //console.log("MACD-SIGNAL-BUY: ");
                    //console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                    buyPrice = closing_price[i];
                    in_trade = true;
                
            }
            else if(
                closing_price[i]>closing_price[i-1]
                && closing_price[i-1]>closing_price[i-2]
                && macd_calc.histogram[i-1]<0 
                && macd_calc.histogram[i]>0 
                && previousProfit >0
                && macd_calc.macd_line[i]<0 
                && macd_calc.ema_macd[i]<0
                && rsi_calc.rsi[i]<50
                && rsi_calc.rsi[i]>rsi_calc.rsi[i-1]
                && rsi_calc.rsi[i-1]>rsi_calc.rsi[i-2]
                && (ticks[i][CLOSE_INDEX]-ticks[i][OPEN_INDEX])>0 
                && (ticks[i-1][CLOSE_INDEX]-ticks[i-1][OPEN_INDEX])>0 
             ) {
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                
               // console.log("------------------------------------------------------------------------------");
                //console.log("2. "+rsi_calc.rsi[i]);
                //console.log("MACD-SIGNAL-BUY: ");
                //console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                buyPrice = closing_price[i];
                in_trade = true;    
            } 
          
            
        }
        else {
            if(macd_calc.histogram[i-1]>0 
            && macd_calc.histogram[i]<0) {
                
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                sellPrice = closing_price[i];

                let thisTradeProfit = sellPrice-buyPrice;
                previousProfit = thisTradeProfit;
                in_trade = false;

                profit += thisTradeProfit;
                previousProfit = sellPrice-buyPrice
                
                console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+previousProfit*btcusd*buyingAmount);
                //console.log("------------------------------------------------------------------------------");
                //console.log("MACD-SIGNAL-SELL: ");
                //console.log("   BUY-PRICE: "+buyPrice+" BTC.\n   SELL-PRICE: "+sellPrice+"BTC.\n   ORDER-SELL: 8000.\n   TRADE-PROFIT: "+thisTradeProfit+" BTC.\n   TIMESTAMP: "+date);
            }
        } 
    }
   
    console.log("TOAL-PROFIT: "+(profit*buyingAmount)*btcusd+" USD.");
    console.log("====================================================");
}

function buy(index,ticks,closing_prices,macd_calc,rsi_calc) {

}

function test_strategy_macd_v2(ticks,closing_price,macd_calc,rsi_calc,wr_calc,ar_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0;
    let profitArray = [];
    let start_index = macd_calc.start_index;

    
}


function test_strategy_macd_v1(ticks,closing_price,macd_calc,rsi_calc,wr_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0;
    let profitArray = [];
    let start_index = 15//macd_calc.start_index;
    let counter = 0;
    //console.log("Strategy: Postive Signal-Positive MACD (PSPM)");
    //console.log("Buying Power: 8000 ADA");
    //console.log("Closing Time Frame: "+time_frame);

    
    for(let i = start_index+1; i<ticks.length; i++) {
        let date = timeConverter(ticks[i][TIME_INDEX])
        let inc = 0;
        if(in_trade == false) {

            let condition = false;
            if  ( ((macd_calc.histogram[i]<0 
            &&  (macd_calc.histogram[i]-macd_calc.histogram[i-1])>0
            &&  (macd_calc.macd_line[i]-macd_calc.macd_line[i-1])>0
            && macd_calc.histogram[i-1]<0
            && macd_calc.histogram[i-2]<0) ||   macd_calc.macd_line[i]-macd_calc.macd_line[i-1]>0
                

           // && macd_calc.histogram[i-3]<0
          
          
            
        )   

                
            ){
                
                inc = 1;

                /*if(!(
                   ticks[i][CLOSE_INDEX]> ticks[i-1][CLOSE_INDEX] && ticks[i-2][CLOSE_INDEX]> ticks[i][CLOSE_INDEX] && 
                   ticks[i-1][OPEN_INDEX]<ticks[i-1][CLOSE_INDEX]
                ))*/
                
                if(profitArray.length>=3 && (profitArray[profitArray.length-1]+profitArray[profitArray.length-2]<-50) && 
                macd_calc.macd_line[i]-macd_calc.macd_line[i-1]>0 && macd_calc.macd_line[i-1]-macd_calc.macd_line[i-2]>0) {
                    condition = true
                }
                else if(profitArray.length<3 || (profitArray[profitArray.length-1]+profitArray[profitArray.length-2]>=-50) ) {
                    condition = true
                }
                else 
                    condition = false



                if(!(
                    ticks[i][VOLUME_INDEX]<ticks[i-1][VOLUME_INDEX]  &&
                    ticks[i-1][VOLUME_INDEX] > ticks[i-3][VOLUME_INDEX] && 
                    ticks[i-1][VOLUME_INDEX] > ticks[i-4][VOLUME_INDEX] &&
                    ticks[i-1][VOLUME_INDEX] > ticks[i-5][VOLUME_INDEX]
                    && ticks[i-1][OPEN_INDEX]<ticks[i-1][CLOSE_INDEX]
                ) ){
                
                }
                else 
                    condition = false
            }

            if((macd_calc.macd_line[i]-macd_calc.macd_line[i-1])>0  
            ){
            if(!(rsi_calc.rsi[i]-rsi_calc.rsi[i-2]<0 && (rsi_calc.rsi[i-1]>70 || rsi_calc.rsi[i-2]>70 )) ) {
                
                if(!(rsi_calc.srsi[i]>rsi_calc.srsi[i-1] && rsi_calc.srsi[i-1]<rsi_calc.srsi[i-2])
            
                ) {

                   if(macd_calc.histogram[i]>0 && macd_calc.histogram[i-1]>0 && macd_calc.histogram[i]> macd_calc.histogram[i-1]) {

                    //condition = true
                        /*if(ticks[i][CLOSE_INDEX]>ticks[i-1][CLOSE_INDEX] && ticks[i-1][CLOSE_INDEX]>ticks[i-2][CLOSE_INDEX]) {
                            condition  = false
                        }*/
                        
                        //if(ticks[i][OPEN_INDEX]>ticks[i][CLOSE_INDEX]) {
                            condition  = true
                        //}


                        inc = 2;
                    }
                    
                    /*else if(){
                        condition = true
                    }*/
                    
                }
               
            }
        }




            if(condition==true  && getDate(ticks[i][TIME_INDEX])) {
                let date = timeConverter(ticks[i][TIME_INDEX])
                //console.log("--------------["+timeConverter(ticks[i][TIME_INDEX])+"] "+buyPrice+" "+rsi_calc.rsi[i]+" "+rsi_calc.rsi[i-1] +" "+rsi_calc.rsi[i-2]+" "+rsi_calc.srsi[i]+" "+rsi_calc.srsi[i-1]+" "+rsi_calc.srsi[i-2]+" "+wr_calc.wr[i]+" "+wr_calc.wr[i-1]+" "+wr_calc.wr[i-2]);
                buyPrice = closing_price[i];
               
                let buyPrice2 = closing_price[i]+(ticks[i][HIGH_INDEX]*0.001);

                //buyPrice = buyPrice2;
                counter++;
                console.log(counter+"--------------["+timeConverter(ticks[i][TIME_INDEX])+"] "+inc+" "+macd_calc.histogram[i]+" "+macd_calc.histogram[i-1]+" "+(ticks[i][VOLUME_INDEX]/ticks[i-1][VOLUME_INDEX]));
                
                //console.log("--------------["+timeConverter(ticks[i][TIME_INDEX])+"] "+buyPrice+" "+rsi_calc.rsi[i]+" "+rsi_calc.rsi[i-1] +" "+rsi_calc.rsi[i-2]+" "+rsi_calc.srsi[i]+" "+rsi_calc.srsi[i-1]+" "+rsi_calc.srsi[i-2]+" "+wr_calc.wr[i]+" "+wr_calc.wr[i-1]+" "+wr_calc.wr[i-2]);
                //console.log("------------------------------------------------------------------------------");
                //console.log("MACD-SIGNAL-BUY: ");
                //console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                
                in_trade = true;
            }
        }
        else {






            let condition = false;
            if  ((macd_calc.histogram[i]-macd_calc.histogram[i-1]) <0 || closing_price[i]<buyPrice  //   (macd_calc.histogram[i]-macd_calc.histogram[i-1]) <0 || closing_price
                    
                ){condition = true}

            if(condition == true ) {
                
                

                sellPrice = closing_price[i];

                let sellPrice2 = closing_price[i]-(ticks[i][LOW_INDEX]*0.001);
                
                //sellPrice = sellPrice2;

                in_trade = false;
                profit += sellPrice-buyPrice;
                previousProfit = sellPrice-buyPrice
                 profitArray.push(previousProfit);
                
                console.log(timeConverter(ticks[i][TIME_INDEX])+" $"+previousProfit*btcusd*buyingAmount+" "+sellPrice+" "+sellPrice2+" "+macd_calc.histogram[i]+" "+macd_calc.histogram[i-1]);
                //console.log("------------------------------------------------------------------------------");
                //console.log("MACD-SIGNAL-SELL: ");
                //console.log("   BUY-PRICE: "+buyPrice+" BTC.\n   SELL-PRICE: "+sellPrice+"BTC.\n   ORDER-SELL: 8000.\n   TRADE-PROFIT: "+profit+" BTC.\n   TIMESTAMP: "+date);
            }
        } 
    }
    
    console.log("TOAL-PROFIT: "+(profit*buyingAmount)*btcusd+" USD.");
    console.log("====================================================");
}



/**
 * PSPM Version 1.0
 * PSPM stands from Positive Signal, Postive MACD. 
 * The general idea of buying and selling is very simple. Only
 * buy when signal line and macd line are above 0 and a crossover
 * of macd and signal happens and macd becomes larger than signal.
 * This strategy does well when there a long periods of negative
 * followed by long periods of postive. If macd is being quickly
 * flipped above and below the signal line, this shows a very 
 * volatile movement in the market. PSPM v1.0 does very poorly in 
 * fast volatile movements. It's best to use PSPM v1.0 in 
 * enviroments with slow stredy movement of the market. 
 * @param {*} ticks ticks from binance
 * @param {*} closing_price closing price array gotten from ticks
 * @param {*} macd_calc calculated macd of closing prices
 * @param {*} rsi_calc caluclated rsi of closing prices
 */
function test_strategy_pspm_v1(ticks,closing_price,macd_calc) {
    let in_trade = false;
    let buyPrice = 0;
    let sellPrice = 0;
    let profit = 0;
    let start_index = macd_calc.start_index;

    //console.log("Strategy: Postive Signal-Positive MACD (PSPM)");
    //console.log("Buying Power: 8000 ADA");
    //console.log("Closing Time Frame: "+time_frame);

    
    for(let i = start_index+1; i<ticks.length; i++) {
        if(in_trade == false) {
            if(macd_calc.histogram[i-1]<0 
            && macd_calc.histogram[i]>0 
            && macd_calc.macd_line[i]>0
            && macd_calc.ema_macd[i]>0
            ) {
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])
                
                //console.log("------------------------------------------------------------------------------");
                //console.log("MACD-SIGNAL-BUY: ");
                //console.log("   BUY-PRICE: "+closing_price[i]+" BTC.\n   ORDER-BUY: 8000.\n   TIMESTAMP: "+date);
                buyPrice = closing_price[i];
                in_trade = true;
            }
        }
        else {
            if(macd_calc.histogram[i-1]>0 
            && macd_calc.histogram[i]<0) {
                
                let date = timeConverter(ticks[i][CLOSE_TIME_INDEX])

                sellPrice = closing_price[i];
                in_trade = false;
                profit += sellPrice-buyPrice;
                previousProfit = sellPrice-buyPrice

                console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+previousProfit*btcusd*buyingAmount);
                //console.log("------------------------------------------------------------------------------");
                //console.log("MACD-SIGNAL-SELL: ");
                //console.log("   BUY-PRICE: "+buyPrice+" BTC.\n   SELL-PRICE: "+sellPrice+"BTC.\n   ORDER-SELL: 8000.\n   TRADE-PROFIT: "+profit+" BTC.\n   TIMESTAMP: "+date);
            }
        } 
    }
    
    console.log("TOAL-PROFIT: "+(profit*buyingAmount)*btcusd+" USD.");
    console.log("====================================================");
}

function calculate_wr(ticks,WR_PERIOD,srsi) {
    
   
    let high14 = [];
    let low14 = [];
    let wr = []
    let wrBounce = []

    for(let i = 0; i<ticks.length;i++) {
        high14.push(0);
        low14.push(0);
        wr.push(0);
        wrBounce.push(0);
        
        if(i>=WR_PERIOD-1) {
            let high = -1000;
            let low = 10000000;

            for(let j = i- (WR_PERIOD-1);j<=i;j++) {
                if(high<ticks[j][HIGH_INDEX]) 
                    high = ticks[j][HIGH_INDEX]
                if(low>ticks[j][LOW_INDEX]) 
                    low = ticks[j][LOW_INDEX]
            }

            high14[i] = high;
            low14[i] = low;

            wr[i] = 100.0-((((high14[i] - ticks[i][CLOSE_INDEX])/(high14[i] - low14[i])) * -100)*-1)
            
            if(srsi[i]>80 && wr[i]<srsi[i])
                wr[i] = srsi[i]
            if(srsi[i]<20 && wr[i]>srsi[i])
                wr[i] = srsi[i]

            if(wr[i]>35) {
                wrBounce[i] = 0;
            }
            else {
                wrBounce[i] = wrBounce[i-1]+1;
            }
            //console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+wr[i]);

        }
        
        
    }

    return {wr:wr,wrBounce:wrBounce}

}

function calculate_adx(ticks) {
    let dmp = [0];
    let dmn = [0];
    let tr = [0];

    let tr14 = [0];
    let dmp14 = [0];
    let dmn14 = [0];
    let dip14 = [0];
    let din14 = [0];
    let di14_sum = [0];
    let di14_diff  = [0];
    let dx = [0];

    let tr14_1 = 0;
    let dmp14_1 = 0;
    let dmn14_1 = 0;
    let dip14_1 = 0;
    let din14_1 = 0;
    let difp14_1 = 0;
    let difn14_1 = 0;
    let dx_1 = 0;

    let adx = [0];

    let DM_STATE = 0;
    let DM_STATE_NEU = 0;
    let DM_STATE_POS = 1;
    let DM_STATE_NEG = -1;

    let TR_PERIOD = 14;
    let AR_PERIOD = 14;

    for(let i = 1;i<ticks.length;i++) {
        dmp.push(0);
        dmn.push(0);
        tr.push(0);
        tr14.push(0);
        dmp14.push(0);
        dmn14.push(0); 
        dip14.push(0); 
        din14.push(0); 
        di14_sum.push(0);
        di14_diff.push(0);
        dx.push(0); 
        adx.push(0)
        
        let dmp_cur = ticks[i][HIGH_INDEX]- ticks[i-1][HIGH_INDEX]; 
        let dmn_cur = ticks[i-1][LOW_INDEX]- ticks[i][LOW_INDEX]; 

        if(dmp_cur<0)
            dmp_cur = 0;
        if(dmn_cur<0)
            dmn_cur = 0;

        dmp[i]=(dmp_cur);
        dmn[i]=(dmn_cur);

        if(dmp[i]>dmn[i])
            dmn[i] = 0;
        else if(dmp[i]<dmn[i])
            dmp[i] = 0;

        tr[i]=(ticks[i][HIGH_INDEX]-ticks[i][LOW_INDEX]);

        /*if(dmp_cur>dmn_cur) {
            DM_STATE = DM_STATE_POS;
        }
        else if(dmp_cur<dmn_cur) {
            DM_STATE = DM_STATE_NEG;
        }
        else {
            DM_STATE = DM_STATE_NEU;
        }*/

        if(i<=TR_PERIOD) {
            tr14_1 += tr[i];
            tr14[i] = tr14_1;

            dmp14_1 += dmp[i];
            dmp14[i] = dmp14_1;

            dmn14_1 += dmn[i];
            dmn14[i] = dmn14_1;

            
        }
        else if(i == TR_PERIOD+1) {
            tr14[i] = tr14_1 - (tr14_1/TR_PERIOD) + tr[i];
            dmp14[i] = dmp14_1 - (dmp14_1/TR_PERIOD) + dmp[i];
            dmn14[i] = dmn14_1 - (dmn14_1/TR_PERIOD) + dmn[i];
        }
        else if(i>TR_PERIOD+1) {
            tr14[i] = tr14[i-1] - (tr14[i-1]/TR_PERIOD) + tr[i];
            dmp14[i] = dmp14[i-1] - (dmp14[i-1]/TR_PERIOD) + dmp[i];
            dmn14[i] = dmn14[i-1] - (dmn14[i-1]/TR_PERIOD) + dmn[i];
        }

        if(i >= TR_PERIOD) {
            dip14[i] = (dmp14[i]/tr14[i])*100.0;
            din14[i] = (dmn14[i]/tr14[i])*100.0;

            di14_sum[i] =  Math.abs(dip14[i]+ din14[i]);
            di14_diff[i] =  Math.abs(dip14[i]- din14[i]);

            dx[i] =  (di14_diff[i]/di14_sum[i])*100.0;
        }

        if(i >= TR_PERIOD && i<(TR_PERIOD+AR_PERIOD)) {
            dx_1 = dx_1+dx[i]; 

            if(i == ((TR_PERIOD+AR_PERIOD))-1) {
                dx_1 = dx_1/AR_PERIOD;
                adx[i] = dx_1;
            }
        }
        else if(i>=(TR_PERIOD+AR_PERIOD)){
            adx[i] = ((adx[i-1]*(AR_PERIOD-1)) + dx[i])/AR_PERIOD;
        }

        //console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+adx[i]+" "+dx[i]);
        /*console.log(timeConverter(ticks[i][CLOSE_TIME_INDEX])+" "+
        tr[i]+"  "+dmp[i]+" "+dmn[i]+" "+dmp14[i]+" "+dmn14[i]+" "+
        dip14[i]+" "+din14[i]+" "+di14_sum[i]+" "+di14_diff[i]+" "+
        dx[i]+" "+adx[i]);*/

    }

    return {adx:adx,dx:dx,dip14:dip14,din14:din14}

}


/*function calculate_sar(ticks, A_MAX, A_START, A_ADD, SAR_START_INDEX) {
    let sar = [];
    let curr_sar = 0;
    let ep = ticks[i][HIGH_INDEX];
    let a = A_START;

    let upTrend;
    
  
    for(let i = SAR_START_INDEX+1;i<ticks.length;i++) {

    }

}*/

function calculate_macd(closing_prices, ticks,MACD_HIGH_EMA, MACD_LOW_EMA, MACD_STR_EMA) {
    let ema_high = []
    let ema_low = []
    let macd_line = []
    let ema_macd = []
    let ema_high_average = 0;
    let ema_low_average = 0;
    let ema_macd_average = 0;
    let histogram = []
    let pred = []
    let pred2 = []

    ////////////////////////
    for(let i = 0;i<MACD_HIGH_EMA;i++) {
        ema_high.push(0)
        ema_high_average = ema_high_average+closing_prices[i];
    }
    ema_high_average = ema_high_average/MACD_HIGH_EMA;
    ema_high[MACD_HIGH_EMA-1] = ema_high_average;
    for(let i = MACD_HIGH_EMA;i<closing_prices.length;i++) {
        ema_high.push(calculate_ema(closing_prices[i], MACD_HIGH_EMA, ema_high[i-1]));
    }

     ////////////////////////
    for(let i = 0;i<MACD_LOW_EMA;i++) {
        ema_low.push(0)
        ema_low_average = ema_low_average+closing_prices[i];
    }
    ema_low_average = ema_low_average/MACD_LOW_EMA;
    ema_low[MACD_LOW_EMA-1] = ema_low_average;
    for(let i = MACD_LOW_EMA;i<closing_prices.length;i++) {
        ema_low.push(calculate_ema(closing_prices[i], MACD_LOW_EMA, ema_low[i-1]));
    }

    ////////////////////////
    for(let i = 0;i<closing_prices.length;i++) {
        macd_line.push(ema_low[i]-ema_high[i]);
    }

    ////////////////////////
    for(let i = 0;i<closing_prices.length;i++) {

        pred.push(0);
        pred2.push(0);
        if(i>0) {
            pred[i] = (macd_line[i]-macd_line[i-1])*100000000.0;
            pred2[i] = pred[i]-pred[i-1];
            
        //console.log("["+timeConverter(ticks[i][TIME_INDEX])+"] "+pred[i]+" "+pred2[i]+" "+((ticks[i][CLOSE_INDEX]-ticks[i-1][CLOSE_INDEX])*10000000.0));
            
        }
        

    }

    ////////////////////////
    for(let i = 0;i<MACD_HIGH_EMA+MACD_STR_EMA;i++) {
        ema_macd.push(0)
        if(i>=MACD_HIGH_EMA) {
            ema_macd_average += macd_line[i]
        }
    }
    ema_macd_average = ema_macd_average/MACD_STR_EMA;
    ema_macd[(MACD_HIGH_EMA+MACD_STR_EMA)-1] = ema_macd_average;

    ////////////////////////
    for(let i = (MACD_HIGH_EMA+MACD_STR_EMA);i<closing_prices.length;i++) {
        ema_macd.push(calculate_ema(macd_line[i], MACD_STR_EMA, ema_macd[i-1]));
    }

    ////////////////////////
    for(let i = 0;i<closing_prices.length;i++) {
        histogram.push(macd_line[i]-ema_macd[i]);
    }

    /*for(let i = 0;i<ticks.length;i++) {
        let dateClose = timeConverter(ticks[i][CLOSE_TIME_INDEX])
        let dateOpen = timeConverter(ticks[i][TIME_INDEX])
        console.log(histogram[i]*100000000.0+"  "+dateOpen+"   "+dateClose);
    }*/

    return {histogram:histogram,ema_macd:ema_macd,macd_line:macd_line,start_index:(MACD_HIGH_EMA+MACD_STR_EMA)}
}

function calculate_rsi(ticks,closing_prices, RSI_PERIOD) {
    let change = [0];
    let rsi = [0];
    let rs = [0];
    let srsi = [0]
    let average_loss = 0;
    let average_gain = 0;
    let alpha = 1.0 / ( RSI_PERIOD + 1.0 );

    /*for(var i = 1; i <closing_prices.length;i++) {
        rsi.push(0);
        rs.push(0);
        change.push(closing_prices[i]-closing_prices[i-1]);

        if(i>=RSI_PERIOD) {
            if(change[i]>0) {
                average_gain = (average_gain*(RSI_PERIOD-1.0)+Math.abs(change[i]))/RSI_PERIOD;
                average_loss = (average_loss*(RSI_PERIOD-1.0)+Math.abs(0))/RSI_PERIOD;
            }
            else if(change[i]<0) {
                average_gain = (average_gain*(RSI_PERIOD-1.0)+Math.abs(0))/RSI_PERIOD;
                average_loss = (average_loss*(RSI_PERIOD-1.0)+Math.abs(change[i]))/RSI_PERIOD;
            }
            else {
                average_gain = (average_gain*(RSI_PERIOD-1.0)+Math.abs(0))/RSI_PERIOD;
                average_loss = (average_loss*(RSI_PERIOD-1.0)+Math.abs(0))/RSI_PERIOD;
            }
            
            rs[i] = average_gain/average_loss;
            rsi[i] = single_rsi(rs[i]);
        }
        else if(i<RSI_PERIOD) {
            if(change[i]>0) {
                average_gain = average_gain+Math.abs(change[i]);
            }
            else if(change[i]<0) {
                average_loss = average_loss+Math.abs(change[i]);
            }

            if(i == RSI_PERIOD-1) {
                average_gain = average_gain/RSI_PERIOD;
                average_loss = average_loss/RSI_PERIOD;
                rs[i] = average_gain/average_loss;
                rsi[i] = single_rsi(rs[i]);
            }
        }


        console.log(rsi[i]+" "+change[i]+"  "+(average_gain/average_loss)+"  "+closing_prices[i]);
    }*/

    for(var i = 1; i <ticks.length;i++) {
        rsi.push(0);
        srsi.push(0);
        change.push(ticks[i][CLOSE_INDEX]-ticks[i-1][CLOSE_INDEX]);

        if(i>=RSI_PERIOD) {
            if(change[i]>0) {
                //average_gain = ((average_gain*(RSI_PERIOD-1.0))+change[i])/RSI_PERIOD;
                //average_loss = ((average_loss*(RSI_PERIOD-1.0))+(0))/RSI_PERIOD;

                average_gain = (alpha*change[i]) + ((1-alpha)*average_gain);
                average_loss = (alpha*(0)) + ((1-alpha)*average_loss);

                //average_gain = ((1.0/14.0)*change[i]) + (13.0/14.0)*average_gain;
                //average_loss = ((1.0/14.0)*(0*-1.0)) + (13.0/14.0)*average_loss;
            }
            else if(change[i]<0) {
                //average_loss = ((average_loss*(RSI_PERIOD-1.0))+(change[i]*-1.0))/RSI_PERIOD;
                //average_gain = ((average_gain*(RSI_PERIOD-1.0))+0)/RSI_PERIOD;

                average_loss = (alpha*(change[i]*-1.0)) + ((1-alpha)*average_loss);
                average_gain = (alpha*0) + ((1-alpha)*average_gain);

                //average_loss = ((1.0/14.0)*(change[i]*-1.0)) + (13.0/14.0)*average_loss;
                //average_gain = ((1.0/14.0)*0) + (13.0/14.0)*average_gain;
            }
            else {
                //average_gain = ((average_gain*(RSI_PERIOD-1.0))+0)/RSI_PERIOD;
                //average_loss = ((average_loss*(RSI_PERIOD-1.0))+0)/RSI_PERIOD;

                average_loss = (alpha*0) + ((1-alpha)*average_loss);
                average_gain = (alpha*0) + ((1-alpha)*average_gain);

                //average_loss = ((1.0/14.0)*0) + (13.0/14.0)*average_loss;
                //average_gain = ((1.0/14.0)*0) + (13.0/14.0)*average_gain;
            }
    
            rsi[i]=(single_rsi(average_gain/average_loss));


            lowest = 100000
            highest = 0
            for (j = i-13;j<=i;j++) {
                if(lowest>rsi[j])
                    lowest = rsi[j]
                if(highest<rsi[j])
                    highest = rsi[j]
                
                diff = highest - lowest
                if(diff<=0)
                    diff = 0.0001
            }

            srsi[i] = ((rsi[i] -lowest) / (diff))*100.0    
        }
        else if(i<RSI_PERIOD) {
            if(change[i]>0) {
                average_gain = average_gain+change[i];
            }
            else if(change[i]<0) {
                average_loss = average_loss+(change[i]*-1.0);
            }

            if(i == RSI_PERIOD-1) {
                average_gain = average_gain/RSI_PERIOD;
                average_loss = average_loss/RSI_PERIOD;
            }
        }


       //console.log(rsi[i]+" "+change[i]+"  "+(average_gain/average_loss));
    }

    return {rsi:rsi,srsi:srsi,start_index:RSI_PERIOD};
}

function single_rsi(rs) {
    return 100.0-(100.0/(1.0+rs))
}

function calculate_ema(todayPrice, N, previousEMA) {
    k = 2.0/(N+1);
    return (todayPrice*k)+(previousEMA*(1.0-k));
}

function compile_closing_price(ticks) {
    let closing_prices = [];


    for(let i = 0; i < ticks.length; i++){
        closing_prices.push(ticks[i][CLOSE_INDEX]);
    }

    return closing_prices;
}

function convert_all_string_to_float(array,indexAffect) {
    for(let i = 0;i<array.length;i++) {
        for(let j = 0; j<indexAffect.length;j++) {
            array[i][indexAffect[j]] = parseFloat(array[i][indexAffect[j]]);
        }
    }
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();


    if(hour<10) {
        hour = "0"+hour;
    }

    if(min<10) {
        min = "0"+min;
    }

    if(date<10) {
        date = "0"+date;
    }

    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  function getDate(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

return date;
  }