import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { UserAuth } from '../model/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  login(user: UserAuth): Observable<any> {
    return this.http.post<any>(`${environment.api}/login`, user);
  }

  logged = () => this.authEvent.emit();

}

