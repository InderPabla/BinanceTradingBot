import { Component, OnInit, ViewEncapsulation } from '@angular/core';
;
import { TraderControlService } from './trader-control.service';


import { StockChart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-trader-control',
    templateUrl: './trader-control.component.html',
    styleUrls: ['./trader-control.component.css']
})
export class TraderControlComponent implements OnInit {

    stockData = [
        { x: new Date("2012-04-02"), open: 85.975716, high: 88.395714, low: 85.76857, close: 88.375717, volume: 14958790 },
        { x: new Date("2012-04-03"), open: 89.614288, high: 90.315712, low: 88.93, close: 89.902855, volume: 20863990 },
        { x: new Date("2012-04-04"), open: 89.192856, high: 89.408569, low: 88.14286, close: 89.187141, volume: 14324520 },
        { x: new Date("2012-04-05"), open: 89.568573, high: 90.665718, low: 89.057144, close: 90.525711, volume: 16032450 },
        { x: new Date("2012-04-09"), open: 89.447144, high: 91.405716, low: 89.328575, close: 90.889999, volume: 14938420 },
        { x: new Date("2012-04-10"), open: 91.418571, high: 92, low: 89.428574, close: 89.777145, volume: 22243130 },
    ]

    highChartStockData: any[] = [];
    highChartObj: StockChart;

    constructor(private _traderService: TraderControlService) { }

    ngOnInit() {
        this._traderService.getTestData()
            .then((result: any[]) => {


                this.stockData = [];

                let closeData: number[] = result["close"];
                let openData: number[] = result["open"];
                let highData: number[] = result["high"];
                let lowData: number[] = result["low"];
                let openTimeData: number[] = result["openTime"];


                for (let i = 0; i < closeData.length; i++) {
                    let open: number = openData[i];
                    let high: number = highData[i];
                    let close: number = closeData[i];
                    let low: number = lowData[i];
                    let time: Date = new Date(openTimeData[i] / 1000);

                    let newStockData =
                        {
                            x: time,
                            open: open,
                            high: high,
                            low: low,
                            close: close,
                            volume: 0
                        };

                    this.stockData.push(newStockData);
                    this.highChartStockData.push([openTimeData[i], open, high, low, close]);

                }
            
                this.highChartObj = new StockChart({
                    
                    title:{text:"title"},
                    rangeSelector: {
                        selected: 1
                      },
                      tooltip: {
                        valueDecimals: 2
                      },
                      series: [{
                        
                        name: 'AAPL',
                        data: this.highChartStockData


                        
                    }]

                });
                

               
            })
            .catch((err) => {
                console.log(err);
            })
    }


   
}
