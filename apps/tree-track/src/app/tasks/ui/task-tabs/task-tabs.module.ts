import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTabsComponent } from './task-tabs.component';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';
import {KanbanModule} from "../../../../../../../libs/trilha-ui/src/lib/kanban/kanban.module";

@NgModule({
  declarations: [TaskTabsComponent],
  exports: [TaskTabsComponent],
  imports: [CommonModule, TrilhaButtonModule, KanbanModule],
})
export class TaskTabsModule {}
