import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban.component';
import { TrilhaButtonModule } from '../button/trilha-button.module';

@NgModule({
  declarations: [KanbanComponent],
  exports: [KanbanComponent],
  imports: [CommonModule, TrilhaButtonModule],
})
export class KanbanModule {}
