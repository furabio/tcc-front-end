import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { UserService } from 'app/shared/services/user.service';
import { RoleService } from 'app/shared/services/role.service';
import { Role } from 'app/shared/model/role.model';
import { User } from 'app/shared/model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  hide: boolean = true;

  form: FormGroup;
  roles: Role[];
  user: User;

  constructor(
    private _userService: UserService,
    private _roleService: RoleService,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(13)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });

    if(this._activatedroute.snapshot.params['id']) {
      const userId = this._activatedroute.snapshot.params['id']
      this._userService.findById(userId).subscribe(user => {
        this.user = user;
        this.formSetValue('username', this.user.username);
        this.formSetValue('password', this.user.password);
        this.formSetValue('email', this.user.email);
        this.formSetValue('fullName', this.user.fullName);
        this.formSetValue('role', this.user.role.id);
      });
    }

    this._roleService.findAll().subscribe(roles => {
      this.roles = roles
    });
  }

  save() {
    const $ = this.form;
    if(!this.user) {
      this._roleService.findById($.get('role').value).subscribe(role => {
        let user = new User($.get('username').value, $.get('password').value, $.get('fullName').value, $.get('email').value, role);
        this._userService.create(user).subscribe(data => {
          this._toastrService.success('Usuário cadastrado com sucesso', 'SUCESSO!')
          this._router.navigate(['/users']);
        })
      });
    } else {
      this._roleService.findById($.get('role').value).subscribe(role => {
        let user = new User($.get('username').value, $.get('password').value, $.get('fullName').value, $.get('email').value, role);
        user.id = this.user.id;
        this._userService.update(user).subscribe(data => {
          this._toastrService.success('Usuário atualizado com sucesso', 'SUCESSO!')
          this._router.navigate(['/users']);
        })
      });
    }
  }

  cancel() {
    this._router.navigate(['/users']);
  }

  formSetValue(field, value) {
    this.form.get(field).setValue(value);
  }

}
