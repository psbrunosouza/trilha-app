import { Observable } from 'rxjs';
import { ITask } from './task';
import { ISprint } from './sprint';

export interface ICategory {
  title: string;
  color: string;
  tasks: ITask[];
  sprint: ISprint | null;
}

export abstract class ICategoryService {
  abstract list(): Observable<ICategory[]>;
  abstract create(payload: ICategory): Observable<ICategory>;
  abstract delete(id: number): Observable<void>;
  abstract find(id: number): Observable<ICategory>;
  abstract update(id: number, payload: ICategory): Observable<ICategory>;
}
