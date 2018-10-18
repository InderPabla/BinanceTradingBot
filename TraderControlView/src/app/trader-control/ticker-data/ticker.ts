export class Ticker {
    askPrice:number;
    askQty:number;
    bidPrice:number;
    bidQty:number;
    closeTime:number;
    count:number;
    firstId:number;
    highPrice:number;
    lastId:number;
    lastPrice:number;
    lastQty:number;
    lowPrice:number;
    openPrice:number;
    openTime:number;
    prevClosePrice:number;
    priceChange:number;
    priceChangePercent:number;
    quoteVolume:number;
    symbol:string;
    volume:number;
    weightedAvgPrice:number;

    constructor(ticker:any) {
        this.askPrice= parseFloat(ticker.askPrice);
        this.askQty= parseFloat(ticker.askQty);
        this.bidPrice= parseFloat(ticker.bidPrice);
        this.bidQty= parseFloat(ticker.bidQty);
        this.closeTime= parseInt(ticker.closeTime);
        this.count= parseInt(ticker.count);
        this.firstId= parseInt(ticker.firstId);
        this.highPrice= parseFloat(ticker.highPrice);
        this.lastId= parseInt(ticker.lastId);
        this.lastPrice= parseFloat(ticker.lastPrice);
        this.lastQty= parseFloat(ticker.lastQty);
        this.lowPrice= parseFloat(ticker.lowPrice);
        this.openPrice= parseFloat(ticker.openPrice);
        this.openTime= parseInt(ticker.openTime);
        this.prevClosePrice= parseFloat(ticker.prevClosePrice);
        this.priceChange= parseFloat(ticker.priceChange);
        this.priceChangePercent= parseFloat(ticker.priceChangePercent);
        this.quoteVolume= parseFloat(ticker.quoteVolume);
        this.symbol= ticker.symbol;
        this.volume= parseFloat(ticker.volume);
        this.weightedAvgPrice= parseFloat(ticker.weightedAvgPrice);
    }

}