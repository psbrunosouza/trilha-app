import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';
import { TaskHeaderModule } from '../../ui/task-header/task-header.module';
import { TaskTabsModule } from '../../ui/task-tabs/task-tabs.module';
import { CategoryService, ICategoryService } from '@pineorg/shared';
import { tasksRoutes } from '../../../@routes/tasks.routes';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksRoutes),
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
