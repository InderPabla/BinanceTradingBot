import { StrategyData } from './strategy-data/strategy-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { ControlData } from './control-data/control-data';

@Injectable()
export class TraderControlService {

	loadTestFromFile: boolean = true;
	
	constructor(private http: HttpClient) {

	}

	public getStrategies(): Promise<StrategyData> {
		return new Promise((resolve, reject) => {
			this.getRequet('/strategies', {}).subscribe(
				data => {
					resolve(new StrategyData(data));
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public getTestData(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.getRequetLocal('/test_data.json', {}).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public getConfig():Promise<any> {
		return new Promise((resolve, reject) => {
			this.getRequet('/config', {}).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public getBinanceTickers():Promise<any> {
		return new Promise((resolve, reject) => {
			this.getRequet('/tickers', {}).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public getBinanceTopTradingPairs():Promise<any> {
		return new Promise((resolve, reject) => {
			this.getRequet('/top', {}).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public pullHistoricalTickerData(controlData:ControlData):Promise<any> {
		return new Promise((resolve, reject) => {
			
			let historialQuery = {time:controlData.chosenTime,ticker:controlData.chosenTickerAny,strategy:controlData.chosenStrategy}
			//console.log(historialQuery);
			this.postRequest('/historical', historialQuery).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public pullInitialStrategyData(controlData:ControlData,debugMode:boolean, debugIndex:number,tickIndex:number):Promise<any> {
		return new Promise((resolve, reject) => {
			let lastCloseTime:number = undefined;

			let lastBuyIndex:number = undefined;
			let forceState:any = undefined;
			if(controlData.historialPulled) lastCloseTime = controlData.lastCloseTime;
			if(controlData.lastBuyIndex) {
				lastBuyIndex = controlData.lastBuyIndex;
				forceState = controlData.getNextTickBuyAndSellIndex();
			}
			
			let debugVal = debugMode?debugIndex:-1;

			let historialQuery = {forceState:forceState,lastBuyIndex:lastBuyIndex,lastCloseTime:lastCloseTime,time:controlData.chosenTime,ticker:controlData.chosenTickerAny,strategy:controlData.chosenStrategy,debugVal:debugVal,tickIndex:tickIndex}
			//console.log(historialQuery);
			this.postRequest('/init-strategy', historialQuery).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	public getServerTime(debugMode:boolean):Promise<number> {
		if(debugMode) {
			return Promise.resolve(10000000000000000000000)
		}
		else 
			return new Promise((resolve, reject) => {
				this.getRequet('/server-time',{}).subscribe(
				data => {
					resolve(data.servertime as number);
				},
				error => {
					reject(error)
				}
			);
		})
	}

	

	private getRequet(api: string, param: any): Observable<any> {
		return this.http.get("http://localhost:5000"+api, { params: param })
	}

	private postRequest(api: string, param: any): Observable<any> {
		return this.http.post("http://localhost:5000"+api, param)
	}

	private getRequetLocal(api: string, param: any): Observable<any> {
		return this.http.get("/assets"+api, { params: param })
	}
}
