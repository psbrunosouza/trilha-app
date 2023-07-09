import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTabsComponent } from './task-tabs.component';
import { KanbanModule, TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [TaskTabsComponent],
  exports: [TaskTabsComponent],
  imports: [CommonModule, TrilhaButtonModule, KanbanModule],
})
export class TaskTabsModule {}
