import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHeaderComponent } from './task-header.component';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [TaskHeaderComponent],
  imports: [CommonModule, TrilhaButtonModule],
  exports: [TaskHeaderComponent],
})
export class TaskHeaderModule {}
