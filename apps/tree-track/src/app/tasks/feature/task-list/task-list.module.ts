import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';
import { taskRoutes } from '../../../app.routes';
import { TaskHeaderModule } from '../../ui/task-header/task-header.module';
import { TaskTabsModule } from '../../ui/task-tabs/task-tabs.module';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes),
    TaskHeaderModule,
    TaskTabsModule,
  ],
})
export class TaskListModule {}
