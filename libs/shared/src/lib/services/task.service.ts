import { Injectable } from '@angular/core';
import { ITask, ITaskService } from '@pineorg/shared';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService implements ITaskService {
  constructor(private httpClient: HttpClient) {}

  create(payload: ITask): Observable<ITask> {
    return this.httpClient
      .post<ITask>('http://localhost:3000/tasks', payload)
      .pipe(share());
  }

  delete(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`http://localhost:3000/tasks/${id}`)
      .pipe(share());
  }

  find(id: number): Observable<ITask> {
    return this.httpClient
      .get<ITask>(`http://localhost:3000/tasks/${id}`)
      .pipe(share());
  }

  list(): Observable<ITask[]> {
    return this.httpClient
      .get<ITask[]>(`http://localhost:3000/tasks`)
      .pipe(share());
  }

  update(id: number, payload: ITask): Observable<ITask> {
    return this.httpClient
      .put<ITask>(`http://localhost:3000/tasks/{id}`, payload)
      .pipe(share());
  }
}
