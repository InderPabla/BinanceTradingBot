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
    evaled:any[] = [];
    evaledColumns:string[] = ["count","sellIndex","buyLow","sellLow","amount","low","lowTotal","normal","normalTotal","buyIndex"];
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

    sortTickerByCustom() {
        this.topBinanceTickers.sortTickerByCustom();
        this.chosenTicker = this.topBinanceTickers.tickers[0].symbol;
    }

    setStrategies(stratgies:StrategyData) {
        console.log(stratgies);
        this.strategyList = stratgies.strategies;
        this.chosenStrategy = stratgies.default;
    }

    setEvaled(evaled:any) {
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
}