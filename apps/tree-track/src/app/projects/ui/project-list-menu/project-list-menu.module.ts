import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListMenuComponent } from './project-list-menu.component';
import { SearchbarModule, TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [ProjectListMenuComponent],
  imports: [CommonModule, TrilhaButtonModule, SearchbarModule],
  exports: [ProjectListMenuComponent],
})
export class ProjectListMenuModule {}
