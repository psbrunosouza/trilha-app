import { Route } from '@angular/router';
import { MainComponent } from '../main/feature/main/main.component';

export const mainRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
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
