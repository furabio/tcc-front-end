import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Period } from 'app/shared/model/period.model';
import { PeriodService } from 'app/shared/services/period.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-period-form',
  templateUrl: './period-form.component.html',
  styleUrls: ['./period-form.component.scss']
})
export class PeriodFormComponent implements OnInit {
  form: FormGroup;
  period: Period;

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


    if (this._activatedroute.snapshot.params['id']) {
      const periodId = this._activatedroute.snapshot.params['id'];
      this._periodService.findById(periodId).subscribe(period => {
        this.period = period;
        this.formSetValue('init', this.period.init);
        this.formSetValue('end', this.period.end);
      });
    }
  }

  save() {
    const $ = this.form;
    if (!this.period) {
      let period = new Period($.get('init').value, $.get('end').value);
      this._periodService.create(period).subscribe(data => {
        this._toastrService.success('Período cadastrado com sucesso', 'SUCESSO!')
        this._router.navigate(['/periods']);
      })
    } else {
      let period = new Period($.get('init').value, $.get('end').value);
      period.id = this.period.id;
      this._periodService.update(period).subscribe(data => {
        this._toastrService.success('Período atualizado com sucesso', 'SUCESSO!')
        this._router.navigate(['/periods']);
      })
    }
  }

  cancel() {
    this._router.navigate(['/periods']);
  }

  formSetValue(field, value) {
    this.form.get(field).setValue(value);
  }

}
