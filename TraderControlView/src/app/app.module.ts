import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

//import {ChartAllModule,RangeNavigatorAllModule} from '@syncfusion/ej2-ng-charts';
import { TraderControlComponent } from './trader-control/trader-control.component'
import {TraderControlService} from './trader-control/trader-control.service'
import { ChartModule } from 'angular-highcharts';
import * as highcharts from 'Highcharts';
import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import highstock from 'highcharts/modules/stock.src';
export function highchartsModules() {
  return [ highstock ];
  }

@NgModule({
  declarations: [
    AppComponent,
    TraderControlComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,

    MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,
    
    //ChartAllModule,RangeNavigatorAllModule,
    
    ChartModule,

    HttpClientModule,
  ],
  providers: [
    TraderControlService,
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
