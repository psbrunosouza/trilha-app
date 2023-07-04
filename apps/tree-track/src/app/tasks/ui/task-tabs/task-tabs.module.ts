import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTabsComponent } from './task-tabs.component';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [TaskTabsComponent],
  exports: [TaskTabsComponent],
  imports: [CommonModule, TrilhaButtonModule],
})
export class TaskTabsModule {}
