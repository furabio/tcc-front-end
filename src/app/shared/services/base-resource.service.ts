import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseResourceModel } from '../model/base-resource.model';

export abstract class BaseResourceService<T extends BaseResourceModel> {
    http: HttpClient;

    constructor(private url: string, private endpoint: string, protected injector: Injector) {
        this.http = injector.get(HttpClient);
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}/${this.endpoint}`);
    }

    findById(id: number): Observable<T> {
        return this.http.get<T>(`${this.url}/${this.endpoint}/${id}`);
    }

    create(model: T): Observable<T> {
        return this.http.post<T>(`${this.url}/${this.endpoint}`, model);
    }

    update(model: T): Observable<T> {
        return this.http.put<T>(`${this.url}/${this.endpoint}/${model.id}`, model);
    }

    deleteById(id: number) {
        return this.http.delete(`${this.url}/${this.endpoint}/${id}`);
    }
}