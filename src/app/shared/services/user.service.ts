import { Injectable, Injector } from '@angular/core';

import { User } from '../model/user.model';
import { BaseResourceService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super("api", "users", injector);
  }

}
