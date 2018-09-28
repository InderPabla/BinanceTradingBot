import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TraderControlService {

	loadTestFromFile: boolean = true;
	constructor(private http: HttpClient) {
		//this.getRequet("/test2",{})
	}


	public getTestData(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.getRequet('/test2', {}).subscribe(
				data => {
					resolve(data);
				},
				error => {
					reject(error)
				}
			);

		})
	}

	private getRequet(api: string, param: any): Observable<any> {
		console.log("IN COMMING REQ");
		let call: string = "/assets/test_data.json";
		if (!this.loadTestFromFile)
			call = "http://localhost:5000" + api;

		return this.http.get(call, { params: param })

	}
}
