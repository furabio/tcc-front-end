import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodFormComponent } from './period-form/period-form.component';

const routes: Routes = [
  { 
    path     : '',
    component: PeriodListComponent
  },
  {
    path     : 'new',
    component: PeriodFormComponent
  },
  {
    path     : ':id/edit',
    component: PeriodFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
