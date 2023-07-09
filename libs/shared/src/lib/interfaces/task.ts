import { IDefault } from './default';
import { IUser } from './user';
import { ICategory } from './category';
import { Observable } from 'rxjs';

export interface ITask extends IDefault {
  level: string;
  title: string;
  description: string;
  tags: string[];
  participants: IUser[];
  isDone: boolean;
  isLoop: boolean;
  category: ICategory;
}

export abstract class ITaskService {
  abstract list(): Observable<ITask[]>;
  abstract create(payload: ITask): Observable<ITask>;
  abstract delete(id: number): Observable<void>;
  abstract find(id: number): Observable<ITask>;
  abstract update(id: number, payload: ITask): Observable<ITask>;
}
