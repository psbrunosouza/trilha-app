import { Route } from '@angular/router';
import { TaskListComponent } from './tasks/feature/task-list/task-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: TaskListComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('./tasks/feature/task-list/task-list.module').then(
            (m) => m.TaskListModule
          ),
      },
    ],
  },
];

export const taskRoutes: Route[] = [
  {
    path: '',
    component: TaskListComponent,
  },
];
