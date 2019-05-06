import { Injectable, Injector } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseResourceService } from './base-resource.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super("", "", injector);
  }
}
