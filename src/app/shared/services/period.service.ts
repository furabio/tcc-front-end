import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { Period } from '../model/period.model';

@Injectable({
  providedIn: 'root'
})
export class PeriodService extends BaseResourceService<Period> {

  constructor(protected injector: Injector) {
    super("api", "periods", injector);
  }
}