import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';
import { ICategory, ICategoryService } from '../interfaces';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(private httpClient: HttpClient) {}

  create(payload: ICategory): Observable<ICategory> {
    return this.httpClient
      .post<ICategory>('http://localhost:3000/categories', payload)
      .pipe(share());
  }

  delete(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`http://localhost:3000/categories/${id}`)
      .pipe(share());
  }

  find(id: number): Observable<ICategory> {
    return this.httpClient
      .get<ICategory>(`http://localhost:3000/categories/${id}`)
      .pipe(share());
  }

  list(): Observable<ICategory[]> {
    return this.httpClient
      .get<ICategory[]>(`http://localhost:3000/categories`)
      .pipe(share());
  }

  update(id: number, payload: ICategory): Observable<ICategory> {
    return this.httpClient
      .put<ICategory>(`http://localhost:3000/categories/{id}`, payload)
      .pipe(share());
  }
}
