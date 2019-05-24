import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PeriodService } from 'app/shared/services/period.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.scss']
})
export class PeriodListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'init', 'end', 'action'];
  dataSource = new MatTableDataSource();
  
  constructor(private _periodService: PeriodService, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.loadingPeriods();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadingPeriods() {
    this._periodService.findAll().subscribe(periods => {
      this.dataSource.data = periods;
    });
  }

  edit(id: number) {
    this._router.navigate([`/periods/${id}/edit`]);
  }

  remove(id: number) {
    this._periodService.deleteById(id).subscribe(() => {
      this.loadingPeriods();
      this._toastrService.success('Período deletado com sucesso', 'SUCESSO!');
    });
  }

}
