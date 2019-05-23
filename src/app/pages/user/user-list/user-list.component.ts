import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from 'app/shared/services/user.service';
import { User } from 'app/shared/model/user.model';
import { PeriodicElement } from 'app/pages/period/period-list/period-list.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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
