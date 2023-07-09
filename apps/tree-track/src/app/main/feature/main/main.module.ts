import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Route, RouterModule } from '@angular/router';
import { LayoutModule } from '../../ui/layout/layout.module';

export const mainRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('../../../tasks/feature/task-list/task-list.module').then(
            (m) => m.TaskListModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(mainRoutes), LayoutModule],
})
export class MainModule {}
