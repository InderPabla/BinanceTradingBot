import { Component, OnInit, ViewChild, AfterViewInit,Input, OnChanges } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EvaledDataDataSource, EvaledDataItem } from './evaled-data-datasource';

@Component({
  selector: 'app-evaled-data',
  templateUrl: './evaled-data.component.html',
  styleUrls: ['./evaled-data.component.css']
})
export class EvaledDataComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: EvaledDataDataSource;
  
  @Input('evaled') evaled:any[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns:string[] = ["count","sellIndex","buyLow","sellLow","amount","low","lowTotal","normal","normalTotal"];

  ngOnInit() {
    this.dataSource = new EvaledDataDataSource(this.paginator, this.sort, this.evaled as EvaledDataItem[]);
  }

  ngAfterViewInit() {
   
  }

  ngOnChanges () {
    this.dataSource = new EvaledDataDataSource(this.paginator, this.sort, this.evaled as EvaledDataItem[]);
  }
}
