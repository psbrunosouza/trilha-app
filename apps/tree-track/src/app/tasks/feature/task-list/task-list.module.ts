import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { Route, RouterModule } from '@angular/router';
import { TaskHeaderModule } from '../../ui/task-header/task-header.module';
import { TaskTabsModule } from '../../ui/task-tabs/task-tabs.module';
import { CategoryService, ICategoryService } from '@pineorg/shared';

export const taskRoutes: Route[] = [
  {
    path: '',
    component: TaskListComponent,
  },
];

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes),
    TaskHeaderModule,
    TaskTabsModule,
  ],
  providers: [
    {
      provide: ICategoryService,
      useClass: CategoryService,
    },
  ],
})
export class TaskListModule {}
