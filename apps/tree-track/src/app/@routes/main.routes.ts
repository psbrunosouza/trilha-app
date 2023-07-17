import { Route } from '@angular/router';
import { HomeComponent } from '../home/feature/home/home.component';

export const mainRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('../tasks/feature/task-list/task-list.module').then(
            (m) => m.TaskListModule
          ),
      },
    ],
  },
];
