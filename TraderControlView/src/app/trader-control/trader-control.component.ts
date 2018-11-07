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

	ngOnInit() {


		this.controlData = new ControlData();

		this._traderService.getConfig()
			.then((result: any) => {
				console.log("CONFIG", result);
				//return this._traderService.getTestData()


				return this.getBinanceTickers()
			})
			.then((binanceTickers: BinanceTickers) => {
				this.controlData.setBinanceTickers(binanceTickers);
				console.log(this.controlData);
				return this._traderService.getStrategies();
			})
			.then((strategyData: StrategyData) => {
				this.controlData.setStrategies(strategyData);
			})
			.catch((err) => {
				console.log(err);
			})


	}

	getBinanceTickers(): Promise<any> {
		return new Promise((resolve, reject) => {
			let futureTime = 1000 * 60 * 60//1000*60*60*12;
			let localStoageTickers: any = localStorage.getItem('tickers');
			if (localStoageTickers) localStoageTickers = JSON.parse(localStoageTickers);

			if (!localStoageTickers
				|| (new Date(localStoageTickers.dateCreated).getTime() + futureTime) < new Date().getTime()) {
				this._traderService.getBinanceTickers()
					.then((result) => {
						let newResult = { dateCreated: new Date(), tickers: result };
						localStorage.removeItem('tickers')
						localStorage.setItem('tickers', JSON.stringify(newResult));
						console.log("DELETING OLD LOCALSTORAGE TICKER");
						resolve(new BinanceTickers(result));
					})
					.catch((err) => {
						reject(err);
					})
			}
			else {
				console.log("RESOLVING OLD LOCALSTORAGE TICKER");
				resolve(new BinanceTickers(localStoageTickers.tickers))
			}

		})
	}

	//datagrouping solution 
	//http://jsfiddle.net/JorgeDuenasLerin/4x2az/2/
	//http://jsfiddle.net/highcharts/4x2az/3/
	//https://github.com/highcharts/highcharts/issues/2348

	createHighCartObject(realData: any, sell_index: number[], buy_index: number[], low: number[]): void {
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
						var max = this.xAxis[0].max,
							range = 72 * 3600 * 1000; // one day
						this.xAxis[0].setExtremes(max - range, max);
						_this.elementRef.nativeElement.getElementsByClassName('highcharts-plot-background')[0]
							.addEventListener("dragstart", function (event) {
								console.log("DRAG STARTED", event);
							});

						document.addEventListener("dragstart", function (event) {
							console.log("drag from document? ", event);
						}, false);

					},

					click: function () {
						console.log("click");
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

	buildStockDataWithArray(realData) {;
		let highChartStockData:any[] = [];
		let closeData: number[] = realData["close"];
		let openData: number[] = realData["open"];
		let highData: number[] = realData["high"];
		let lowData: number[] = realData["low"];
		let openTimeData: number[] = realData["openTime"];
		let closeTimeData: number[] = realData["closeTime"];
		let smaData = realData["30sma"];

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
			if(this.controlData.historialPulled === false) {
				this._traderService.pullHistoricalTickerData(this.controlData)
				.then((result) => {
					console.log(result);
					if (result && result.status === "success") {
						this.controlData.setHistorialPulled(true)
						return this._traderService.pullInitialStrategyData(this.controlData);
					}
					else {
						throw "Error downloading historial data"
					}

				})
				.then((result) => {
					this.highChartObj;
					this.sma = [];
					console.log(result["evaled"]);
					this.controlData.setEvaled(result["evaled"]);
					this.buildStockDataWithArray(result["ops"]);
					this.createHighCartObject(result["ops"],
						result["sell_index"],
						result["buy_index"],
						result["evaled"]["low"]);

					resolve({})
				})
				.catch((err) => {
					reject(err)
				})
			}
			else {
				// this._traderService.pullInitialStrategyData(this.controlData)
				// .then(result=> {
				// 	resolve(result)
				// })
				// .catch((err) => {
					
				// 	reject(err)
				// })


				this._traderService.pullHistoricalTickerData(this.controlData)
				.then((result) => {
					console.log(result);
					if (result && result.status === "success") {
						this.controlData.setHistorialPulled(true)
						return this._traderService.pullInitialStrategyData(this.controlData);
					}
					else {
						throw "Error downloading historial data"
					}

				})
				.then((result) => {
					this.highChartObj;
					this.sma = [];
					console.log(result["evaled"]);
					this.controlData.setEvaled(result["evaled"]);
					this.buildStockDataWithArray(result["ops"]);
					this.createHighCartObject(result["ops"],
						result["sell_index"],
						result["buy_index"],
						result["evaled"]["low"]);

					resolve({})
				})
				.catch((err) => {
					reject(err)
				})
			}
			
		})

	}

	strategyLoop(): void {
		if(this.controlData.historialPulled) {
			console.log("LAST CLOSE TIME IS",this.controlData.lastCloseTime);
			console.log("CALLING TO PULL DATA");
			this.runStrategy()
			.then((result) => {
				// return this._traderService.getServerTime()
				this.awaitTick3();
			})
			// .then((serverTime: number) => {
			// 	this.awaitTick2(serverTime);
			// })
			.catch((err) => {
				console.log(err);
			})
			// .then((result) => {
			// 	console.log(result);
			// })
			// .catch((err)=> {
			// 	console.log(err)
			// })
		}
		else {
			console.log("NO CLOSE TIME!!");
			this.runStrategy()
			.then((result) => {
				//return this._traderService.getServerTime()
				this.awaitTick3();
			})
			// .then((serverTime: number) => {
			// 	this.awaitTick2(serverTime);
			// })
			.catch((err) => {
				console.log(err);
			})
		}
		
	}


	awaitTick3(closeTime?:number) {
		let _thisc:TraderControlComponent = this;
		
		if(!closeTime) {
			closeTime = this.controlData.getLastCandleCloseTime()/1000;
			console.log("AWAIT TICK",closeTime);
		}
		else {
			console.log("AWAIT TICK AGAIN",closeTime);
		}
		
		this.controlData.setLastCloseTime(closeTime)
		this.controlData.setLastBuyIndex();
		this._traderService.getServerTime()
		.then((serverTime: number) => {
			serverTime= serverTime/1000.0;
			let differenceTime:number = closeTime-serverTime;
			console.log("DIFFERENCE TIME",differenceTime);
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
						console.log("STOPPING TIMER");
						_thisc.strategyLoop()

						// _this._traderService.getServerTime()
						// .then((serverTime: number) => {
						// 	serverTime= serverTime/1000.0;
						// 	console.log("NEW TRUE DIFFEREINCE:",serverTime-closeTime);
						// })
						// .catch((err) => {
						// 	console.log(err);
						// })	

					}
					
				});	
			}
			else {
				console.log("DIFFERENCE IS NEGATIVE START LOOP AGAIN");
				_thisc.strategyLoop()
			}
		})
		.catch((err) => {
			console.log(err);
		})
	}


	// awaitTick2(closeTime?:number, combinedTotal?:number) {
	// 	let _this = this;
		
		
	// 	if(!closeTime)
	// 		closeTime = this.controlData.getLastCandleCloseTime()/1000;
	// 	else 
	// 		console.log("Run AGAIN",closeTime,combinedTotal);
	// 	if(!combinedTotal)
	// 		combinedTotal = 0;

		
	// 	this._traderService.getServerTime()
	// 	.then((serverTime: number) => {
	// 		serverTime= serverTime/1000.0;
	// 		let differenceTime:number = closeTime-serverTime;
	// 		console.log("DIFFERENCE TIME",differenceTime);
	// 		if(differenceTime>0) { 
	// 			var timerInstance = new Timer();
	// 			timerInstance.start({precision: 'secondTenths'});
	// 			this.controlData.startTimer();
	// 			timerInstance.addEventListener('secondTenthsUpdated', function (e) {
	// 				let t = timerInstance.getTimeValues();
	// 				let combined = (t.seconds)+(t.secondTenths/10.0)+(t.minutes*60)+(t.hours*3600)+(t.days*24*3600);
	// 				_this.controlData.setTimer(differenceTime-(combined+combinedTotal));
	// 				if(differenceTime>5){
	// 					if(combined>=5){
	// 						console.log("Calling Await Tick Again",closeTime,(combined+combinedTotal));
	// 						timerInstance.stop();	
	// 						_this.controlData.stopTimer();
	// 						_this.awaitTick2(closeTime,combined+combinedTotal);
	// 					}
	// 				}
	// 				else {
	// 					if(combined>=differenceTime){
	// 						timerInstance.stop();	
	// 						_this.controlData.stopTimer();
	// 						_this.controlData.setLastCloseTime(closeTime)
	// 						_this.strategyLoop()

	// 					}
	// 				}


	// 			});	
	// 		}
	// 		else {
	// 			console.log("DIFFERENCE IS NEGATIVE START LOOP AGAIN");
	// 			this.strategyLoop();
	// 		}
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	})
	// }


	// awaitTick(serverTime:number) {
	// 	let closeTime:number = this.controlData.getLastCandleCloseTime()/1000;
	// 	serverTime = serverTime/1000;
	// 	let differenceTime:number = closeTime-serverTime;
	// 	let _this = this;
	// 	let mineServerCheckTime = -1;
	// 	console.log(serverTime,closeTime,differenceTime);

	// 	if(differenceTime>0) {
	// 		var timerInstance = new Timer();
	// 		timerInstance.start({precision: 'secondTenths'});
	// 		this.controlData.startTimer();
	// 		timerInstance.addEventListener('secondTenthsUpdated', function (e) {
	// 			let t = timerInstance.getTimeValues();
	// 			let combined = (t.seconds)+(t.secondTenths/10.0)+(t.minutes*60)+(t.hours*3600)+(t.days*24*3600);

	// 			if(combined>=differenceTime){
	// 				timerInstance.stop();
	// 				_this.controlData.stopTimer();
	// 				_this.controlData.setLastCloseTime(closeTime)
	// 				_this.strategyLoop()
					
	// 			}
	// 			else {
	// 				_this.controlData.setTimer(differenceTime-combined)
	// 				if(mineServerCheckTime!=-1 && (differenceTime-combined)<=mineServerCheckTime) {
	// 					mineServerCheckTime = -1;
	// 					_this._traderService.getServerTime()
	// 					.then((st: number) => {
	// 						console.log("Before",differenceTime)
	// 						differenceTime = closeTime-st
	// 						console.log("After",differenceTime)
	// 					})
	// 					.catch((err) => {
	// 						console.log(err);
	// 					})
	// 				}
	// 				else if( (differenceTime-combined)>5+3){
	// 					mineServerCheckTime = (differenceTime-combined)-5;
	// 				}
					
	// 			}
	// 		});
	// 	}
	// 	else {
	// 		console.log("DIFFERENCE IS NEGATIVE START LOOP AGAIN");
	// 		_this.strategyLoop();
	// 	}
	// }


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
}
