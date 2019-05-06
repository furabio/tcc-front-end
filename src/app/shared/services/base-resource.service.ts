import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseResourceModel } from '../model/base-resource.model';

export abstract class BaseResourceService<T extends BaseResourceModel> {
    protected http: HttpClient;

    constructor(protected url: string, protected endpoint: string, protected injector: Injector) {
        this.http = injector.get(HttpClient);
    }

    protected findAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}/${this.endpoint}`);
    }

    protected findById(id: number): Observable<T> {
        return this.http.get<T>(`${this.url}/${this.endpoint}/${id}`);
    }

    protected create(model: T): Observable<T> {
        return this.http.post<T>(`${this.url}/${this.endpoint}`, model);
    }

    protected update(model: T): Observable<T> {
        return this.http.put<T>(`${this.url}/${this.endpoint}/${model.id}`, model);
    }

    protected deleteById(id: number) {
        return this.http.delete(`${this.url}/${this.endpoint}/${id}`);
    }
}