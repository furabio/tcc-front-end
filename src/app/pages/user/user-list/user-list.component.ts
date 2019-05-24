import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from 'app/shared/services/user.service';
import { User } from 'app/shared/model/user.model';
import { PeriodicElement } from 'app/pages/period/period-list/period-list.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public dataSource = new MatTableDataSource();

  constructor(private _userService: UserService, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.loadingUsers();
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['id', 'username', 'fullName', 'email', 'role', 'action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadingUsers() {
    this._userService.findAll().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  edit(id: number) {
    this._router.navigate([`/users/${id}/edit`]);
  }

  remove(id: number) {
    this._userService.deleteById(id).subscribe(() => {
      this.loadingUsers();
      this._toastrService.success('Usuário deletado com sucesso', 'SUCESSO!');
    });
  }
}
