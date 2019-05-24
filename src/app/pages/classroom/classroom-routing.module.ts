import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';

const routes: Routes = [
  { 
    path     : '',
    component: ClassroomListComponent
  },
  {
    path     : 'new',
    component: ClassroomFormComponent
  },
  {
    path     : ':id/edit',
    component: ClassroomFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
