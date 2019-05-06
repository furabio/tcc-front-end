import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodFormComponent } from './period-form/period-form.component';

@NgModule({
  declarations: [PeriodListComponent, PeriodFormComponent],
  imports: [
    CommonModule,
    PeriodRoutingModule
  ]
})
export class PeriodModule { }
