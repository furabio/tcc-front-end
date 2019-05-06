import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { Booking } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseResourceService<Booking> {
  
  constructor(protected injector: Injector) {
    super("", "", injector);
  }
}