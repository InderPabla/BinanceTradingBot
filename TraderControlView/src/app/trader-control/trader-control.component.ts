import { highstock } from 'highcharts/modules/stock.src';
import { EvaledDataItem } from './../evaled-data/evaled-data-datasource';
import { StrategyData } from './strategy-data/strategy-data';
import { ControlData } from './control-data/control-data';
import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { BinanceTickers } from './ticker-data/binance-tickers';
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
	highChartStockDataColors: Highcharts.Color[] = [];
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

		console.log(this.highChartStockData[this.highChartStockData.length - 250][0]);

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
				data: this.highChartStockData,
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

	buildStockDataWithKeys(realData) {
		this.stockData = [];
		let closeData: number[] = realData["close"];
		let openData: number[] = realData["open"];
		let highData: number[] = realData["high"];
		let lowData: number[] = realData["low"];
		let openTimeData: number[] = realData["openTime"];
		for (let i = 0; i < closeData.length; i++) {
			let open: number = openData[i];
			let high: number = highData[i];
			let close: number = closeData[i];
			let low: number = lowData[i];
			let time: Date = new Date(openTimeData[i] / 1000);
			let newStockData = { x: time, open: open, high: high, low: low, close: close, volume: 0 };
			this.stockData.push(newStockData);
		}
	}

	buildStockDataWithArray(realData) {
		this.highChartStockData = [];
		this.highChartStockDataColors = [];
		let closeData: number[] = realData["close"];
		let openData: number[] = realData["open"];
		let highData: number[] = realData["high"];
		let lowData: number[] = realData["low"];
		let openTimeData: number[] = realData["openTime"];
		let smaData = realData["30sma"];



		for (let i = 0; i < closeData.length; i++) {
			let open: number = openData[i];
			let high: number = highData[i];
			let close: number = closeData[i];
			let low: number = lowData[i];
			let sma: number = smaData[i];
			let time: Date = new Date(openTimeData[i] / 1000);
			this.highChartStockData.push([openTimeData[i], open, high, low, close]);
			this.sma.push([openTimeData[i], sma])
		}
	}

	runStrategy(): Promise<any> {
		return new Promise((resolve, reject) => {
			this._traderService.pullHistoricalTickerData(this.controlData)
				.then((result) => {
					console.log(result);
					if (result && result.status === "success") {
						return this._traderService.pullInitialStrategyData(this.controlData);
					}
					else {
						throw "Error downloading historial data"
					}

				})
				.then((result) => {
					this.controlData.setEvaled(result["evaled"]);
					this.highChartStockData = [];
					this.highChartStockDataColors = [];
					this.highChartObj;
					this.sma = [];

					console.log(result["evaled"]);
					this.buildStockDataWithArray(result["ops"]);
					this.createHighCartObject(result["ops"],
						result["sell_index"],
						result["buy_index"],
						result["evaled"]["low"]);

					resolve({})
				})
				.catch((err) => {
					console.log(err);
					reject(err)
				})
		})

	}

	strategyLoop(): void {
		this.runStrategy()
			.then((result) => {
				return this._traderService.getServerTime()

			})
			.then((serverTime: number) => {
				console.log(serverTime);
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
		if (sellIndex >= this.highChartStockData.length || row.sellIndex === -1) sellIndex = this.highChartStockData.length - 1;

		let buyIndex = row.buyIndex - 1;
		if (buyIndex < 0) buyIndex = 0;

		this.highChartStockData[this.highChartStockData.length - 250][0]
		this.highChartObj.ref.xAxis[0].setExtremes(this.highChartStockData[buyIndex][0], this.highChartStockData[sellIndex][0])
	}
}
