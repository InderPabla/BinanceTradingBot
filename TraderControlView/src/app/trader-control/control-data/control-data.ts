import { StrategyData } from './../strategy-data/strategy-data';
import { BinanceTickers } from './../ticker-data/binance-tickers';
export class ControlData {
    
    allBinanceTickers:BinanceTickers;

    topBinanceTickers:BinanceTickers;

    strategyList:String[]; 

    chosenStrategy:String="";

    chosenTime:String = "5m";
    timeList:String[] = ["1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w"];

    chosenTicker:String;
    chosenTickerAny:String;

    stratgies:StrategyData
    
    evaledColumns:string[] = ["count","sellIndex","buyLow","sellLow","amount","low","lowTotal","normal","normalTotal","buyIndex"];
    

    evaled:any[] = [];
    highChartStockData: any[] = [];
    openTime:number[] = [];
    closeTime:number[] = [];

    // prevEvaled:any[] = [];
    // prevHighChartStockData: any[] = [];
    // prevOpenTime:number[] = [];
    // prevCoseTime:number[] = [];
    // previousExists:boolean = false;
    
    isNextTickTimerStarted:boolean = false;
    nextTickTimer:number = 0;
    historialPulled:boolean = false;
    lastCloseTime:number = undefined;
    lastBuyIndex:number = undefined;

    constructor() {

    }

    setBinanceTickers(binanceTickers:BinanceTickers): void {
        this.allBinanceTickers = binanceTickers;
        this.allBinanceTickers.sortTickersByVolume();
        this.topBinanceTickers = this.allBinanceTickers.createBinanceTickersWithTop(100);
        this.chosenTicker = this.topBinanceTickers.tickers[0].symbol;
    }

    sortTickersByVolume(): void {
        this.topBinanceTickers.sortTickersByVolume();
        this.chosenTicker = this.topBinanceTickers.tickers[0].symbol;
    }

    sortTickersByVolumeChange(): void {
        this.topBinanceTickers.sortTickersByVolumeChange();
        this.chosenTicker = this.topBinanceTickers.tickers[0].symbol;
    }

    
    sortTickersByChange(): void {
        this.topBinanceTickers.sortTickersByChange();
        this.chosenTicker = this.topBinanceTickers.tickers[0].symbol;
    }

    sortTickerByCustom(): void {
        this.topBinanceTickers.sortTickerByCustom();
        this.chosenTicker = this.topBinanceTickers.tickers[0].symbol;
    }

    setStrategies(stratgies:StrategyData): void {
        //console.log(stratgies);
        this.strategyList = stratgies.strategies;
        this.chosenStrategy = stratgies.default;
    }

    setEvaled(evaled:any): void {
        //this.prevEvaled = this.evaled;
        this.evaled = [];

        let size = evaled["amount"].length;
        for(let i =0;i<size;i++) {
            let evaledObj:any = {};
            for(let key of this.evaledColumns) {
                //{low:evaled.low[i], lowTotal:evaled.lowTotal[i]}
                evaledObj[key] = evaled[key][i];
            }
            this.evaled.push(evaledObj )
        }
    }

    setCandleData(data:any[],openTime:number[],closeTime:number[]): void {
        // this.prevHighChartStockData = this.highChartStockData;
        // this.prevOpenTime = this.openTime;
        // this.prevCoseTime =this.closeTime;

        // if(!this.prevOpenTime) this.previousExists = false;
        // else this.previousExists = true;

        this.highChartStockData = data;
        this.openTime = openTime;
        this.closeTime= closeTime;
    }

    getLastCandleCloseTime():number {
        return this.closeTime[this.closeTime.length-1]
    }

    setTimer(time:number){
        this.nextTickTimer = time;
    }

    startTimer() {
        this.isNextTickTimerStarted = true;
    }

    stopTimer(){
        this.isNextTickTimerStarted = false;
    }

    setHistorialPulled(pulled:boolean){
        this.historialPulled = pulled;
    }

    setLastCloseTime(closeTime:number) {
        this.lastCloseTime = closeTime;
    }

    setLastBuyIndex() {
        
        this.lastBuyIndex  = this.evaled[this.evaled.length-1].buyIndex;
        console.log("Last Buy Index",this.lastBuyIndex);
    }
}