var fs = require('fs');
var steller_hist= JSON.parse(fs.readFileSync('StellerHistorical2.json', 'utf8'));

var hist_fixed = {
    MACD_HIGH_EMA :26,
    MACD_LOW_EMA : 12,
    MACD_STR_EMA : 9,
    RSI_PERIOD : 14,
    
    DATA: []
}

macd_calc = calculate_macd(steller_hist,hist_fixed.MACD_HIGH_EMA, hist_fixed.MACD_LOW_EMA, hist_fixed.MACD_STR_EMA)
rsi_calc = calculate_rsi(steller_hist,hist_fixed.RSI_PERIOD)
console.log(rsi_calc);
//for(let i = macd_calc.histogram.length-100;i<macd_calc.histogram.length;i++ )
for(let i = 0;i<macd_calc.histogram.length;i++ )
    console.log(timeConverter(steller_hist[i].date*1000) +" "+macd_calc.histogram[i]+" "+rsi_calc.rsi[i]);
//console.log(steller_hist.length);


function calculate_macd(ticks,MACD_HIGH_EMA, MACD_LOW_EMA, MACD_STR_EMA) {
    let ema_high = []
    let ema_low = []
    let macd_line = []
    let ema_macd = []
    let ema_high_average = 0;
    let ema_low_average = 0;
    let ema_macd_average = 0;
    let histogram = []

    ////////////////////////
    for(let i = 0;i<MACD_HIGH_EMA;i++) {
        ema_high.push(0)
        ema_high_average = ema_high_average+ticks[i].close;
    }
    ema_high_average = ema_high_average/MACD_HIGH_EMA;
    ema_high[MACD_HIGH_EMA-1] = ema_high_average;
    for(let i = MACD_HIGH_EMA;i<ticks.length;i++) {
        ema_high.push(calculate_ema(ticks[i].close, MACD_HIGH_EMA, ema_high[i-1]));
    }

     ////////////////////////
    for(let i = 0;i<MACD_LOW_EMA;i++) {
        ema_low.push(0)
        ema_low_average = ema_low_average+ticks[i].close;
    }
    ema_low_average = ema_low_average/MACD_LOW_EMA;
    ema_low[MACD_LOW_EMA-1] = ema_low_average;
    for(let i = MACD_LOW_EMA;i<ticks.length;i++) {
        ema_low.push(calculate_ema(ticks[i].close, MACD_LOW_EMA, ema_low[i-1]));
    }

    ////////////////////////
    for(let i = 0;i<ticks.length;i++) {
        macd_line.push(ema_low[i]-ema_high[i]);
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
    for(let i = (MACD_HIGH_EMA+MACD_STR_EMA);i<ticks.length;i++) {
        ema_macd.push(calculate_ema(macd_line[i], MACD_STR_EMA, ema_macd[i-1]));
    }

    ////////////////////////
    for(let i = 0;i<ticks.length;i++) {
        histogram.push(macd_line[i]-ema_macd[i]);
    }

    /*for(let i = 0;i<ticks.length;i++) {
        let dateClose = timeConverter(ticks[i][CLOSE_TIME_INDEX])
        let dateOpen = timeConverter(ticks[i][TIME_INDEX])
        console.log(histogram[i]*100000000.0+"  "+dateOpen+"   "+dateClose);
    }*/

    return {histogram:histogram,ema_macd:ema_macd,macd_line:macd_line,start_index:(MACD_HIGH_EMA+MACD_STR_EMA)}
}

function calculate_rsi(ticks, RSI_PERIOD) {
    let change = [0];
    let rsi = [0];
    let rs = [0];

    let average_loss = 0;
    let average_gain = 0;
    let alpha = 1.0 / ( RSI_PERIOD + 1.0 );

    for(var i = 1; i <ticks.length;i++) {
        rsi.push(0);
        change.push(ticks[i].close-ticks[i-1].close);

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

    return {rsi:rsi,start_index:RSI_PERIOD};
}

function single_rsi(rs) {
    return 100.0-(100.0/(1.0+rs))
}

function calculate_ema(todayPrice, N, previousEMA) {
    k = 2.0/(N+1);
    return (todayPrice*k)+(previousEMA*(1.0-k));
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
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }