import { highstock } from 'highcharts/modules/stock.src';
import { EvaledDataItem } from './../evaled-data/evaled-data-datasource';
import { StrategyData } from './strategy-data/strategy-data';
import { ControlData } from './control-data/control-data';
import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { BinanceTickers } from './ticker-data/binance-tickers';
import { TraderControlService } from './trader-control.service';


import { StockChart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

declare var Timer: any;

const SECOND_MS = 1000;
const MIN_MS = SECOND_MS*60;
const HOUR_MS = MIN_MS*60;
const HALF_HOUR_MS = (MIN_MS*60)/2.0;
const QUARTER_HOUR_MS = (MIN_MS*30)/4.0;

@Component({
	selector: 'app-trader-control',
	templateUrl: './trader-control.component.html',
	styleUrls: ['./trader-control.component.css']
})
export class TraderControlComponent implements OnInit {


	highChartObj: StockChart;
	sma: any[] = [];
	controlData: ControlData;

	constructor(private _traderService: TraderControlService, private elementRef: ElementRef) { }

	highChartVisible:boolean = true;
	debugShowState:boolean = true;

	debugMode:boolean = true;
	debugIndex:number = 0;
	tickIndex:number = 0;

	strategyButtonEnabled:boolean= true;

	stop:boolean = false;

	ngOnInit() {

		this.controlData = new ControlData();
		
		this._traderService.getConfig()
		.then((result: any) => {
			return this.getBinanceTickers()
		})
		.then((binanceTickers: BinanceTickers) => {
			this.controlData.setBinanceTickers(binanceTickers);
			//console.log(this.controlData);
			return this._traderService.getStrategies();
		})
		.then((strategyData: StrategyData) => {
			this.controlData.setStrategies(strategyData);
		})
		.catch((err) => {
			//console.log(err);
		})
	}

	
	getBinanceTickers(): Promise<any> {
		return new Promise((resolve, reject) => {
			let futureTime = QUARTER_HOUR_MS;
			let localStoageTickers: any = localStorage.getItem('tickers');
			if (localStoageTickers) localStoageTickers = JSON.parse(localStoageTickers);

			if (!localStoageTickers
				|| (new Date(localStoageTickers.dateCreated).getTime() + futureTime) < new Date().getTime()) {
				this._traderService.getBinanceTickers()
					.then((result) => {
						let newResult = { dateCreated: new Date(), tickers: result };
						localStorage.removeItem('tickers')
						localStorage.setItem('tickers', JSON.stringify(newResult));
						//console.log("DELETING OLD LOCALSTORAGE TICKER");
						resolve(new BinanceTickers(result));
					})
					.catch((err) => {
						reject(err);
					})
			}
			else {
				//console.log("RESOLVING OLD LOCALSTORAGE TICKER");
				resolve(new BinanceTickers(localStoageTickers.tickers))
			}

		})
	}

	//datagrouping solution 
	//http://jsfiddle.net/JorgeDuenasLerin/4x2az/2/
	//http://jsfiddle.net/highcharts/4x2az/3/
	//https://github.com/highcharts/highcharts/issues/2348

	createHighCartObject(realData: any, sell_index: number[], buy_index: number[], low: number[]): void {
		if(this.highChartObj && this.controlData.historialPulled==true) {
			
			this.controlData.setExtreme(this.highChartObj.ref.xAxis[0].getExtremes());
			//console.log("SETTING EXTREME",this.controlData.extreme);
		}

		let openTimeData: number[] = realData["openTime"];
		let plotLines = [];
		for (let i = 0; i < sell_index.length; i++) {
			let si = sell_index[i]
			let dashType = "ShortDash";
			let width = 1;
			if (low[i] > 0) {
				dashType = "Solid"
				width = 2;
			}
			plotLines.push({ color: 'red', dashStyle: dashType, value: openTimeData[si], width: width });
		}

		for (let i = 0; i < buy_index.length; i++) {
			let bi = buy_index[i]
			let dashType = "ShortDash";
			let width = 1;
			if (low[i] > 0) {
				dashType = "Solid"
				width = 2;
			}
			if (buy_index.length > sell_index.length && i === buy_index.length - 1)
				plotLines.push({ color: 'white', dashStyle: "Solid", value: openTimeData[bi], width: 2 });
			else
				plotLines.push({ color: 'lime', dashStyle: dashType, value: openTimeData[bi], width: width });
		}

		//console.log(this.highChartStockData[this.highChartStockData.length - 250][0]);

		this.highChartObj = new StockChart({
			xAxis: {
				plotLines: plotLines,
			},
			rangeSelector: {
				enabled: false,
				selected: 1,
			},
			tooltip: {
				valueDecimals: 9,

			},
			chart: {

				renderTo: "realtime-chart",
				backgroundColor: 'black',
				borderWidth: 0,
				height: 600,
				style: {
					color: "white"
				},
				zoomType: "none",
				panning: false,
				reflow: true,
				resetZoomButton: {
					theme: {
						display: 'none'
					}
				},
				events: {

					load: function () {
						/*var max = this.xAxis[0].max,
							range = 72 * 3600 * 1000; // one day
						this.xAxis[0].setExtremes(max - range, max);
						_this.elementRef.nativeElement.getElementsByClassName('highcharts-plot-background')[0]
							.addEventListener("dragstart", function (event) {
								//.log("DRAG STARTED", event);
							});

						document.addEventListener("dragstart", function (event) {
							//console.log("drag from document? ", event);
						}, false);*/

						// this.xAxis[0].setExtremes(_this.controlData.extreme.userMin, _this.controlData.extreme.userMax);

						console.log(this.xAxis[0].getExtremes())
						console.log(_this.controlData.extreme)

						if(_this.controlData.extreme)
						this.xAxis[0]
						.setExtremes(
							_this.controlData.extreme.userMin, 
							_this.controlData.extreme.userMax==_this.controlData.extreme.dataMax?this.xAxis[0].getExtremes().dataMax:((this.xAxis[0].getExtremes().dataMax-_this.controlData.extreme.dataMax)+_this.controlData.extreme.userMax));
					},

					click: function () {
						console.log("click");
						console.log(_this.highChartObj.ref.xAxis[0].getExtremes());
					},

					drilldown: function () {
						console.log("drilldown");
					},

					drillup: function () {
						console.log("drillup");
					},

					drillupall: function () {
						console.log("drillupall");
					}


				}
			},
			series: [{
				name: 'AAPL',
				type: 'candlestick',
				data: this.controlData.highChartStockData,
			},
			{
				type: 'line',
				name: 'SMA',
				color: 'yellow',
				data: this.sma,

			}
			]
		});
		
		let _this: TraderControlComponent = this;

		if(this.highChartObj && this.controlData.historialPulled==true && this.controlData.extreme) {
			
			//console.log("SETTING EXTREME USER",this.controlData.extreme);

			setTimeout(function () {
				let max = _this.highChartObj.ref.xAxis[0].dataMax; //dataMax
				//console.log("MIN MAX SET:",max,_this.controlData.extreme.userMin);
				//_this.highChartObj.ref.xAxis[0].setExtremes(_this.controlData.extreme.userMin,max)
					//_this.controlData.extreme.userMin, max)
			}, 100)
		}
		else {
			//console.log("SETTING EXTREME ZOOM IN");
			setTimeout(function () {
				let other: any = _this.highChartObj;
				let max = _this.highChartObj.ref.xAxis[0].dataMax
				let range = 48 * 3600 * 1000;
				_this.highChartObj.ref.xAxis[0].setExtremes(max - range, max)

				setTimeout(function () {
					let other: any = _this.highChartObj;
					let max = _this.highChartObj.ref.xAxis[0].dataMax
					let range = 24 * 3600 * 1000;
					_this.highChartObj.ref.xAxis[0].setExtremes(max - range, max)

					setTimeout(function () {
						let other: any = _this.highChartObj;
						let max = _this.highChartObj.ref.xAxis[0].dataMax
						let range = 12 * 3600 * 1000;
						_this.highChartObj.ref.xAxis[0].setExtremes(max - range, max)

					}, 500);

				}, 500);


			}, 1500);
		}

	}

	buildStockDataWithArray(realData) {;
		let highChartStockData:any[] = [];
		let closeData: number[] = realData["close"];
		let openData: number[] = realData["open"];
		let highData: number[] = realData["high"];
		let lowData: number[] = realData["low"];
		let openTimeData: number[] = realData["openTime"];
		let closeTimeData: number[] = realData["closeTime"];
		let smaData = realData["30sma"]; //realData["30sma"];

		for (let i = 0; i < closeData.length; i++) {
			let open: number = openData[i];
			let high: number = highData[i];
			let close: number = closeData[i];
			let low: number = lowData[i];
			let sma: number = smaData[i];
			highChartStockData.push([openTimeData[i], open, high, low, close]);
			this.sma.push([openTimeData[i], sma])
		}

		this.controlData.setCandleData(highChartStockData, openTimeData, closeTimeData);
	}

	runStrategy(lastCloseTime?:number): Promise<any> {
		return new Promise((resolve, reject) => {
			this._traderService.pullHistoricalTickerData(this.controlData)
			.then((result) => {
				//console.log(result);
				if (result && result.status === "success") {
					this.controlData.setHistorialPulled(true)
					return this._traderService.pullInitialStrategyData(this.controlData,this.debugMode,this.debugIndex,this.tickIndex);
				}
				else {
					throw "Error downloading historial data"
				}

			})
			.then((result) => {
				if(this.debugMode) {
					this.debugIndex++;
				}
				this.tickIndex++;

				this.highChartObj;
				this.sma = [];
				console.log(result["evaled"]);
				this.controlData.setEvaled(result["evaled"]);
				this.buildStockDataWithArray(result["ops"]);

				//console.log("=========BEFORE SETTING LAST BUY INDEX=========")
				console.log(this.controlData.evaled)
				this.controlData.setLastBuyIndex();

				this.controlData.applyNewState();
				this.createHighCartObject(result["ops"],
					result["sell_index"],
					result["buy_index"],
					result["evaled"]["low"]);

				resolve({})
			})
			.catch((err) => {
				reject(err)
			})
		})

	}

	toggleStop() {this.stop=!this.stop;}
	
	strategyLoop(isFromButtonClick?:boolean): void {
		if(this.stop==false) {
			if(isFromButtonClick) {
				this.strategyButtonEnabled = false
				console.log(this.strategyButtonEnabled)
			}
			
			this.controlData.setTickerParts();
	
			if(this.controlData.historialPulled) {
				//console.log("LAST CLOSE TIME IS",this.controlData.lastCloseTime);
				//console.log("CALLING TO PULL DATA");
			}
		
			this.runStrategy()
			.then((result) => {
				this.awaitTick3();
	
			})
			.catch((err) => {
				console.log(err);
			})	
		}
		
	}


	awaitTick3() {
		let _thisc:TraderControlComponent = this;
		let closeTime = this.controlData.getLastCandleCloseTime()/1000;
		
		
		this.controlData.setLastCloseTime(closeTime)
		
		this._traderService.getServerTime(this.debugMode)
		.then((serverTime: number) => {
			serverTime= serverTime/1000.0;
			let differenceTime:number = (closeTime-serverTime);
			//console.log("DIFFERENCE TIME",differenceTime);
			if(differenceTime>0) { 
				var timerInstance = new Timer();
				timerInstance.start({precision: 'secondTenths'});
				this.controlData.startTimer();
				timerInstance.addEventListener('secondTenthsUpdated', function (e) {
					let t = timerInstance.getTimeValues();
					let combined = (t.seconds)+(t.secondTenths/10.0)+(t.minutes*60)+(t.hours*3600)+(t.days*24*3600);
					_thisc.controlData.setTimer(differenceTime-combined);

					if(combined>=differenceTime){
						timerInstance.stop();
						_thisc.controlData.stopTimer();
						//console.log("STOPPING TIMER");
						_thisc.strategyLoop()

						// _thisc._traderService.getServerTime(this.debugMode)
						// .then((serverTime: number) => {
						// 	serverTime= serverTime/1000.0;
						// 	//console.log("NEW TRUE DIFFEREINCE:",serverTime-closeTime);
						// })
						// .catch((err) => {
						// 	console.log(err);
						// })	

					}
					
				});	
			}
			else {
			
				//console.log("DIFFERENCE IS NEGATIVE START LOOP AGAIN");
				_thisc.strategyLoop()
			}
		})
		.catch((err) => {
			console.log(err);
		})
	}


	chooseTicker() {
		if (this.controlData)
			this.controlData.chosenTickerAny = this.controlData.chosenTicker;
	}

	evaluatedRowCenter(row: EvaledDataItem) {
		let sellIndex = row.sellIndex + 1;
		if (sellIndex >= this.controlData.openTime.length || row.sellIndex === -1) sellIndex = this.controlData.openTime.length - 1;
		let buyIndex = row.buyIndex - 1;
		if (buyIndex < 0) buyIndex = 0;
		this.highChartObj.ref.xAxis[0].setExtremes(this.controlData.openTime[buyIndex], this.controlData.openTime[sellIndex]);
	}

	
	hideHighChart() {
		this.highChartVisible = !this.highChartVisible;
	}
}
