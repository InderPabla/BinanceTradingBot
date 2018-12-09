import {Ticker} from './ticker';

export class BinanceTickers {

    tickers:Ticker[];
    
    constructor(tickers:any[]) {
        if(tickers){
            this.tickers = tickers.map((ticker:any):Ticker => {
                return new Ticker(ticker);
            })
        }
    }

    
    sortTickersByVolumeChange(): void {
        this.tickers = this.tickers.sort((a:Ticker,b:Ticker):number => {
            if(a.volume*a.prevClosePrice*a.priceChangePercent>b.volume*b.prevClosePrice*b.priceChangePercent)
               return -1;
           else if(a.volume*a.prevClosePrice*a.priceChangePercent<b.volume*b.prevClosePrice*b.priceChangePercent)
               return 1; 
           else 
               return 0;  
        })
    }

    sortTickersByChange(): void {
        this.tickers = this.tickers.sort((a:Ticker,b:Ticker):number => {
            if(a.priceChangePercent>b.priceChangePercent)
               return -1;
           else if(a.priceChangePercent<b.priceChangePercent)
               return 1; 
           else 
               return 0;  
        })
    }

    sortTickerByCustom(): void {
        this.tickers = this.tickers.sort((a:Ticker,b:Ticker):number => {
            if(a.volume*a.prevClosePrice*a.priceChangePercent*a.priceChangePercent*Math.sign(a.priceChangePercent)>b.volume*b.prevClosePrice*b.priceChangePercent*b.priceChangePercent*Math.sign(b.priceChangePercent))
               return -1;
           else if(a.volume*a.prevClosePrice*a.priceChangePercent*a.priceChangePercent*Math.sign(a.priceChangePercent)<b.volume*b.prevClosePrice*b.priceChangePercent*b.priceChangePercent*Math.sign(b.priceChangePercent))
               return 1; 
           else 
               return 0;  
        })
    }

    
    sortTickersByVolume(): void {
        this.tickers = this.tickers.sort((a:Ticker,b:Ticker):number => {
             if(a.volume*a.prevClosePrice>b.volume*b.prevClosePrice)
                return -1;
            else if(a.volume*a.prevClosePrice<b.volume*b.prevClosePrice)
                return 1; 
            else 
                return 0;  

            // if(a.volume*a.prevClosePrice>b.volume*b.prevClosePrice)
            //     return -1;
            // else if(a.volume*a.prevClosePrice<b.volume*b.prevClosePrice)
            //     return 1; 
            // else 
            //     return 0;  

            // if((Math.pow(a.volume*a.prevClosePrice,1/2))*(Math.pow(a.priceChangePercent,2)) >(Math.pow(b.volume*b.prevClosePrice,1/2))*(Math.pow(b.priceChangePercent,2)) )
            //     return -1;
            // else if((Math.pow(a.volume*a.prevClosePrice,1/2))*(Math.pow(a.priceChangePercent,2)) < (Math.pow(b.volume*b.prevClosePrice,1/2))*(Math.pow(b.priceChangePercent,2)) )
            //     return 1; 
            // else 
            //     return 0;  
         

            // if((Math.pow(a.volume*a.prevClosePrice,1/2))*a.priceChangePercent >(Math.pow(b.volume*b.prevClosePrice,1/2))*b.priceChangePercent )
            //     return -1;
            // else if((Math.pow(a.volume*a.prevClosePrice,1/2))*a.priceChangePercent < (Math.pow(b.volume*b.prevClosePrice,1/2))*b.priceChangePercent )
            //     return 1; 
            // else 
            //     return 0;  
         
        })
    }

    setTickers(tickers:Ticker[]): void {
        this.tickers = tickers;
    }

    createBinanceTickersWithTop(amount:number): BinanceTickers {
        let binanceTickers:BinanceTickers = new BinanceTickers(undefined);
        binanceTickers.setTickers(this.tickers.slice(0,this.tickers.length>=amount?amount:this.tickers.length));
        return binanceTickers;
    }

}