import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';

@NgModule({
  declarations: [ClassroomListComponent, ClassroomFormComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
