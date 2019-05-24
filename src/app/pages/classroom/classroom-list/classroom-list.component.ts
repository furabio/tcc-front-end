import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ClassroomService } from 'app/shared/services/classroom.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'description', 'action'];
  dataSource = new MatTableDataSource();
  
  constructor(private _classroomService: ClassroomService, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.loadingClassrooms();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadingClassrooms() {
    this._classroomService.findAll().subscribe(classrooms => {
      this.dataSource.data = classrooms;
    });
  }

  edit(id: number) {
    this._router.navigate([`/classrooms/${id}/edit`]);
  }

  remove(id: number) {
    this._classroomService.deleteById(id).subscribe(() => {
      this.loadingClassrooms();
      this._toastrService.success('Sala deletada com sucesso', 'SUCESSO!');
    });
  }

}
