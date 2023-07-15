import { Route } from '@angular/router';
import { TaskListComponent } from '../tasks/feature/task-list/task-list.component';

export const tasksRoutes: Route[] = [
  {
    path: '',
    component: TaskListComponent,
  },
];
