import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'projects',
    loadChildren: () =>
      import('../projects/feature/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('../main/feature/main/main.module').then((m) => m.MainModule),
  },
];
