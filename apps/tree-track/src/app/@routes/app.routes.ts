import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () =>
      import('../home/feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('../projects/feature/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
];
