import { highstock } from 'highcharts/modules/stock.src';
import { EvaledDataItem } from './../evaled-data/evaled-data-datasource';
import { StrategyData } from './strategy-data/strategy-data';
import { ControlData } from './control-data/control-data';
import { Component, OnInit, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { BinanceTickers } from './ticker-data/binance-tickers';
import { TraderControlService } from './trader-control.service';


import { StockChart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ThrowStmt } from '@angular/compiler';


/**
 * position: fixed;
    top: 306px;
 */
declare var Timer: any;

const SECOND_MS = 1000;
const MIN_MS = SECOND_MS*60;
const HOUR_MS = MIN_MS*60;
const HALF_HOUR_MS = (MIN_MS*60)/2.0;
const QUARTER_HOUR_MS = (MIN_MS*30)/4.0;

export enum KEY_CODE {
	RIGHT_ARROW = 39,
	LEFT_ARROW = 37,
	TAB = 9
  }

@Component({
	selector: 'app-trader-control',
	templateUrl: './trader-control.component.html',
	styleUrls: ['./trader-control.component.css']
})
export class TraderControlComponent implements OnInit {

	height:number = 500;
	width:number = window.innerWidth*0.9;

	mainPlotlines:any[];
	mainHighChartSeries: any[];
	highChartObj: StockChart;
	mainPlotlineKeys:any[];

	groupCharObj: StockChart[];
	groupChartSeries: any[]; 
	groupPlotlines:any[][];
	groupName:string[];
	
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

	colors:String[];
	colorsHash:any = {};
	colorIndex = 0;

	ngOnInit() {

		this.controlData = new ControlData();

		this.colors = this.generateUniqueColor();

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
			let futureTime = HOUR_MS;
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
		let _thisComponent: TraderControlComponent = this;
		if(this.highChartObj && this.controlData.historialPulled==true) {
			
			this.controlData.setExtreme(this.highChartObj.ref.xAxis[0].getExtremes());
			//console.log("SETTING EXTREME",this.controlData.extreme);
		}

		let openTimeData: number[] = realData["openTime"];

		for (let i = 0; i < sell_index.length; i++) {
			let si = sell_index[i]
			let dashType = "ShortDash";
			let width = 1;
			if (low[i] > 0) {
				dashType = "Solid"
				width = 2;
			}
			this.mainPlotlines.push({ color: 'red', dashStyle: dashType, value: openTimeData[si], width: width });
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
			this.mainPlotlines.push({ color: 'white', dashStyle: "Solid", value: openTimeData[bi], width: 2 });
			else
			this.mainPlotlines.push({ color: 'lime', dashStyle: dashType, value: openTimeData[bi], width: width });
		}

		//console.log(this.highChartStockData[this.highChartStockData.length - 250][0]);
		
		this.highChartObj = new StockChart({
			xAxis: {
				plotLines: this.mainPlotlines,
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
				height: this.height,
				width:this.width,
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
					redraw:function() {
						_thisComponent.setAllGroupChartViews()
					},
					load: function () {
						if(_thisComponent.controlData.extreme)
						this.xAxis[0]
						.setExtremes(
							_thisComponent.controlData.extreme.userMin, 
							_thisComponent.controlData.extreme.userMax==_thisComponent.controlData.extreme.dataMax?this.xAxis[0].getExtremes().dataMax:((this.xAxis[0].getExtremes().dataMax-_thisComponent.controlData.extreme.dataMax)+_thisComponent.controlData.extreme.userMax));
					},

					click: function () {

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
			series:this.mainHighChartSeries
		});
		
		

		if(this.highChartObj && this.controlData.historialPulled==true && this.controlData.extreme) {

			setTimeout(function () {
				
				let max = _thisComponent.highChartObj.ref.xAxis[0].dataMax; //dataMax
			}, 100)
		}
		else {
			//console.log("SETTING EXTREME ZOOM IN");
			setTimeout(function () {
				
				let other: any = _thisComponent.highChartObj;
				let max = _thisComponent.highChartObj.ref.xAxis[0].dataMax
				let range = 48 * 3600 * 1000;
				_thisComponent.highChartObj.ref.xAxis[0].setExtremes(max - range, max)

				setTimeout(function () {
					let other: any = _thisComponent.highChartObj;
					let max = _thisComponent.highChartObj.ref.xAxis[0].dataMax
					let range = 24 * 3600 * 1000;
					_thisComponent.highChartObj.ref.xAxis[0].setExtremes(max - range, max)

					setTimeout(function () {
						console.log(_thisComponent.highChartObj)
						let other: any = _thisComponent.highChartObj;
						let max = _thisComponent.highChartObj.ref.xAxis[0].dataMax
						let range = 12 * 3600 * 1000;
						_thisComponent.highChartObj.ref.xAxis[0].setExtremes(max - range, max)

					}, 500);

				}, 500);


			}, 1500);
		}
		console.log(this.groupName)
		//console.log(this.groupChartSeries)
		this.groupCharObj = this.groupChartSeries.map((series,index) => { 
			return new StockChart({
				
				title:{text:this.groupName[index]},
				xAxis: {
					plotLines: this.groupPlotlines[index],
				},
				rangeSelector: {enabled: false,selected: 1,},
				tooltip: {valueDecimals: 9,},
				chart: {
					
					renderTo: "realtime-chart",backgroundColor: 'black',borderWidth: 0,height: this.height, width:this.width,
					style: {color: "white"},zoomType: "none",panning: false,reflow: true,
					resetZoomButton: {theme: {display: 'none'}},
					events: {
						
						load: function () {
							if(_thisComponent.controlData.extreme)
							this.xAxis[0]
							.setExtremes(
								_thisComponent.controlData.extreme.userMin, 
								_thisComponent.controlData.extreme.userMax==_thisComponent.controlData.extreme.dataMax?this.xAxis[0].getExtremes().dataMax:((this.xAxis[0].getExtremes().dataMax-_thisComponent.controlData.extreme.dataMax)+_thisComponent.controlData.extreme.userMax));
						},
					}
				},
				series:series
			})
		});
		
		
	}

	buildStockDataWithArray(realData) {;
		this.mainHighChartSeries =[];
	

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
			highChartStockData.push([openTimeData[i], open, high, low, close]);
		}

		this.controlData.setCandleData(highChartStockData, openTimeData, closeTimeData);

		this.mainHighChartSeries.push({
			name: String(this.controlData.chosenTickerAny),
			type: 'candlestick',
			data: this.controlData.highChartStockData,
		});
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
				this.mainPlotlines = []
				this.mainPlotlineKeys = [];
				//console.log(result["evaled"]);
				this.controlData.setEvaled(result["evaled"]);
				
				this.buildStockDataWithArray(result["ops"]);
				this.buildStockGroupData(result["group"],result["ops"]);

				//console.log("=========BEFORE SETTING LAST BUY INDEX=========")
				//console.log(this.controlData.evaled)
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
				//console.log(this.strategyButtonEnabled)
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


	buildStockGroupData(group,realData) {
		this.groupCharObj = [];
		this.groupChartSeries = [];
		this.groupPlotlines = [];
		this.groupName = [];
		let openTimeData: number[] = realData["openTime"];

		let groups = Object.keys(group);

		for(let gp of groups) {

			if(gp == "mainGroup") {
				let keys = group[gp];

				for(let key of keys) {
					if(key.indexOf("_line")>0) {
						this.mainPlotlineKeys.push({visible:true,key:key});
						let color = this.nextColor(key,true)
						//console.log(realData[key])
						for(let time of realData[key]) {
							this.mainPlotlines.push({id:key,label: key, color: color, dashStyle: "Solid", value: time, width: 2 });	
						}
					}
					else {
						let someData = realData[key].map((value,index)=>{return [openTimeData[index],value]}); 
						let color =  this.nextColor(key,true);

						this.mainHighChartSeries.push({
							name: key,
							type: 'line',
							data: someData,
							color: color
						});
					}
					
				}
			}
			else {
				let keys = group[gp];
				this.groupChartSeries.push([])
				this.groupPlotlines.push([])
				this.groupName.push(gp);
				for(let key of keys) {
					if(key.indexOf("_line")>0) {
						let color = this.nextColor(key,true)
						//console.log(realData[key])
						for(let time of realData[key]) {
							this.groupPlotlines[this.groupPlotlines.length-1].push({ id:key,label: key,color: color, dashStyle: "Solid", value: time, width: 2 });	
						}
					}
					else {
						let someData = realData[key].map((value,index)=>{return [openTimeData[index],value]}); 
						let color =  this.nextColor(key,true);

						this.groupChartSeries[this.groupChartSeries.length-1].push({
							name: key,
							type: 'line',
							data: someData,
							color: color
						});
					}
					
				}
			}
		
			
		}
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

	togglePlot(plot) {
		let thisObject:TraderControlComponent = this;

		let key = plot.key;
		let visible = plot.visible;
		plot.visible = !plot.visible;

		let obj:any = this.highChartObj.ref.xAxis[0];
		console.log(plot)
		console.log(obj.plotLinesAndBands.length,obj.plotLinesAndBands[0])

		if(!plot.visible) {
			
			obj.plotLinesAndBands.forEach(function(el) {
				if(el.svgElem != undefined && el.id === plot.key) {
					el.svgElem[ 'hide' ]();
					el.visible = false;
					el.svgElem['visibility'] = "hidden";
				}
			 });
		}
		else {
			obj.plotLinesAndBands.forEach(function(el) {
				if(el.svgElem != undefined && el.id === plot.key) {
					el.svgElem[ 'show' ]();
					el.svgElem['visibility'] = "visible";
					el.visible = true;
				  }
			 });
		}

		//setTimeout(()=>{thisObject.moveMainViewLeft();},100)
	}

	toggleSeries(series:Highcharts.SeriesObject) {
		if(series.visible)series.hide();
		else series.show()
	}
	
	hideHighChart() {
		this.highChartVisible = !this.highChartVisible;
	}

	groupChartMoveLeft(index:number) {
		let fromIndex = index;
		let toIndex;
		if(index===0) {
			toIndex = this.groupCharObj.length-1;
		}
		else {
			toIndex = fromIndex-1;
		}

		let temp = this.groupCharObj[fromIndex];
		this.groupCharObj[fromIndex] = this.groupCharObj[toIndex];
		this.groupCharObj[toIndex] = temp;
	}

	groupChartMoveRight(index:number) {
		let fromIndex = index;
		let toIndex;
		if(this.groupCharObj.length-1===index) {
			toIndex = 0;
		}
		else {
			toIndex = fromIndex+1;
		}

		let temp = this.groupCharObj[fromIndex];
		this.groupCharObj[fromIndex] = this.groupCharObj[toIndex];
		this.groupCharObj[toIndex] = temp;
	}

	generateUniqueColor() {
		let maxHue = 0.8;
		let step = 0.1;
		let uniqueRGB:String[] = [this.rgbToHex(255,255,255)];

		for(let hue = 0;hue<=maxHue;hue+=step) {
			let rgb = this.hslToRgb(hue,1.0,0.5);
			uniqueRGB.push(this.rgbToHex(rgb[0],rgb[1],rgb[2]));
		}
		console.log(uniqueRGB.length)
		for(let i = 0; i<uniqueRGB.length/2 ; i+=2) {
			let i1 = i;
			let i2 = (uniqueRGB.length-1) - i;
			let temp = uniqueRGB[i1];
			uniqueRGB[i1] = uniqueRGB[i2];
			uniqueRGB[i2] = temp;
		}
		return uniqueRGB;
	}

	/**
	 * Converts an RGB color value to HSL. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes r, g, and b are contained in the set [0, 255] and
	 * returns h, s, and l in the set [0, 1].
	 *
	 * @param   Number  r       The red color value
	 * @param   Number  g       The green color value
	 * @param   Number  b       The blue color value
	 * @return  Array           The HSL representation
	 */
	rgbToHsl(r, g, b) {
		r /= 255, g /= 255, b /= 255;
	
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;
	
		if (max == min) {
		h = s = 0; // achromatic
		} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
	
		h /= 6;
		}
	
		return [ h, s, l ];
  	}

	/**
	 * Converts an HSL color value to RGB. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes h, s, and l are contained in the set [0, 1] and
	 * returns r, g, and b in the set [0, 255].
	 *
	 * @param   Number  h       The hue
	 * @param   Number  s       The saturation
	 * @param   Number  l       The lightness
	 * @return  Array           The RGB representation
	 */
	hslToRgb(h, s, l) {
		var r, g, b;
	
		if (s == 0) {
		r = g = b = l; // achromatic
		} else {
		
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
	
		r = this.hue2rgb(p, q, h + 1/3);
		g = this.hue2rgb(p, q, h);
		b = this.hue2rgb(p, q, h - 1/3);
		}
	
		return [ r * 255, g * 255, b * 255 ];
	  }
	  
	hue2rgb(p, q, t) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1/6) return p + (q - p) * 6 * t;
		if (t < 1/2) return q;
		if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		return p;
	}

	componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	
	rgbToHex(r, g, b):String {
		let hex = "#" + this.componentToHex(Math.floor(r)) + this.componentToHex(Math.floor(g)) + this.componentToHex(Math.floor(b));
		return hex.toUpperCase();
	}

	nextColor(key,comp) {
		//console.log(key,comp,this.getColor(key))
		if(comp==true && this.getColor(key))
			return this.getColor(key);

		
		let color:String = this.colors[this.colorIndex];
		this.colorIndex = this.colors.length-1==this.colorIndex?0:this.colorIndex+1;
		this.colorsHash[key] = color;
		return this.colorsHash[key];
	}

	getColor(key) {
		return this.colorsHash[key] || null;
	}

	hasColor(key) {
		return this.colorsHash[key] != null;	
	}

	moveMainViewRight() {
		if(this.highChartObj && this.highChartObj.ref && this.controlData.openTime) {
			let extreme = this.highChartObj.ref.xAxis[0].getExtremes()
			let diff = this.controlData.openTime[1]-this.controlData.openTime[0];
			let totalDiff = extreme.max-extreme.min;
			let maxTime = extreme.max+diff;
			let minTime = maxTime-totalDiff;
			if(maxTime>extreme.dataMax)maxTime = extreme.dataMax;

			this.highChartObj.ref.xAxis[0].setExtremes(minTime,maxTime)
		}
	}

	moveMainViewLeft() {
		if(this.highChartObj && this.highChartObj.ref && this.controlData.openTime) {
			let extreme = this.highChartObj.ref.xAxis[0].getExtremes()
			let diff = this.controlData.openTime[1]-this.controlData.openTime[0];
			let totalDiff = extreme.max-extreme.min;
			let minTime = extreme.min - diff;
			let maxTime = minTime+totalDiff;
			if(minTime<extreme.dataMin)minTime = extreme.dataMin;

			this.highChartObj.ref.xAxis[0].setExtremes(minTime,maxTime)
		}	
	}
	
	setAllGroupChartViews() {

		if(this.highChartObj) {
			let extreme = this.highChartObj.ref.xAxis[0].getExtremes();
			for(let chart of this.groupCharObj)
				chart.ref.xAxis[0].setExtremes(extreme.min,extreme.max)
		}

	}

	moveEvent:any;
	
	@HostListener('window:resize', ['$event'])
	resizeEvent(event: KeyboardEvent) {
		let width = window.innerWidth*0.9;
		if(this.highChartObj) this.highChartObj.ref.setSize(width,this.height)
		if(this.groupCharObj) this.groupCharObj.map((obj)=>{obj.ref.setSize(width,this.height)})
	}

	@HostListener('window:keydown', ['$event'])
	keyDownEvent(event: KeyboardEvent) {
		if(!this.moveEvent) {
			let isCorrectKey = false;
			let _thisevent = this;
			if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
				isCorrectKey = true
				this.moveMainViewRight();
			}

			if (event.keyCode === KEY_CODE.LEFT_ARROW) {
				isCorrectKey = true
				this.moveMainViewLeft();
			}	

			if (event.keyCode === KEY_CODE.TAB) {
				
				this.setAllGroupChartViews()
			}	

			if(isCorrectKey = true)
			this.moveEvent = setTimeout(()=>{
				_thisevent.moveEvent = null;
			},100)
		}
	}

	

	@HostListener('window:keyup', ['$event'])
	keyUpEvent(event: KeyboardEvent) {
		clearTimeout(this.moveEvent);
		this.moveEvent = null;
	}
}
