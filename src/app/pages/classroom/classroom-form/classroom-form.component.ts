import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassroomService } from 'app/shared/services/classroom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Classroom } from 'app/shared/model/classroom.model';
import { User } from 'app/shared/model/user.model';

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.scss']
})
export class ClassroomFormComponent implements OnInit {

  form: FormGroup;
  classroom: Classroom;

  constructor(
    private _classroomService: ClassroomService,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    if (this._activatedroute.snapshot.params['id']) {
      const classroomId = this._activatedroute.snapshot.params['id']
      this._classroomService.findById(classroomId).subscribe(classroom => {
        this.classroom = classroom;
        this.formSetValue('name', this.classroom.name);
        this.formSetValue('description', this.classroom.description);
      });
    }
  }

  save() {
    const $ = this.form;
    if (!this.classroom) {
      let classroom = new Classroom($.get('name').value, $.get('description').value);
      this._classroomService.create(classroom).subscribe(data => {
        this._toastrService.success('Sala cadastrada com sucesso', 'SUCESSO!')
        this._router.navigate(['/classrooms']);
      });
    } else {
      let classroom = new Classroom($.get('name').value, $.get('description').value);
      classroom.id = this.classroom.id;
      this._classroomService.update(classroom).subscribe(data => {
        this._toastrService.success('Sala atualizada com sucesso', 'SUCESSO!')
        this._router.navigate(['/classrooms']);
      });
    }
  }

  cancel() {
    this._router.navigate(['/classrooms']);
  }

  formSetValue(field, value) {
    this.form.get(field).setValue(value);
  }

}
