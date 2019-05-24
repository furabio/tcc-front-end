import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PeriodService } from 'app/shared/services/period.service';
import { RoleService } from 'app/shared/services/role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-period-form',
  templateUrl: './period-form.component.html',
  styleUrls: ['./period-form.component.scss']
})
export class PeriodFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _periodService: PeriodService,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      init: ['', [Validators.required]],
      end: ['', [Validators.required]],
    });
  }

  save() {

  }

  cancel(){

  }

}
