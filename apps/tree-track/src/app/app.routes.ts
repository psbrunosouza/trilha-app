import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/feature/main/main.module').then((m) => m.MainModule),
  },
];
