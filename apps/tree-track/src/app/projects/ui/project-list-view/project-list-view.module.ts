import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListViewComponent } from './project-list-view.component';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [ProjectListViewComponent],
  imports: [CommonModule, TrilhaButtonModule],
  exports: [ProjectListViewComponent],
})
export class ProjectListViewModule {}
