import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface EvaledDataItem {
  count:number;
  sellIndex:number;
  buyLow:number;
  sellLow:number;
  amount:number;
  low:number;
  lowTotal:number;
  normal:number;
  normalTotal:number;
  buyIndex:number;
}

/**
 * Data source for the EvaledData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EvaledDataDataSource extends DataSource<EvaledDataItem> {
  data: EvaledDataItem[];//= EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort, private evaledData:EvaledDataItem[]) {
    super();
    this.data = evaledData;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EvaledDataItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: EvaledDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: EvaledDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {

         case 'amount': return compare(a.amount, b.amount, isAsc);
         case 'buyLow': return compare(a.buyLow, b.buyLow, isAsc);
         case 'count': return compare(a.count, b.count, isAsc);
         case 'low': return compare(a.low, b.low, isAsc);
         case 'lowTotal': return compare(a.lowTotal, b.lowTotal, isAsc);
         case 'normal': return compare(a.normal, b.normal, isAsc);
         case 'normalTotal': return compare(a.normalTotal, b.normalTotal, isAsc);
         case 'sellIndex': return compare(a.sellIndex, b.sellIndex, isAsc);
         case 'sellLow': return compare(a.sellLow, b.sellLow, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
