import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { Classroom } from '../model/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService extends BaseResourceService<Classroom> {

  constructor(protected injector: Injector) {
    super("api", "classrooms", injector);
  }
}
