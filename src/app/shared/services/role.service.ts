import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { Role } from '../model/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseResourceService<Role> {

  constructor(protected injector: Injector) {
    super("api", "roles", injector);
  }
}
