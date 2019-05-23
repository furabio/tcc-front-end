import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PeriodFormComponent } from './period-form/period-form.component';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodRoutingModule } from './period-routing.module';
import { matModule } from 'app/shared/mat.module';

@NgModule({
  declarations: [PeriodListComponent, PeriodFormComponent],
  imports: [
    CommonModule,
    PeriodRoutingModule,
    ...matModule
  ]
})
export class PeriodModule { }
