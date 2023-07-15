import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMenuComponent } from './project-menu.component';

@NgModule({
  declarations: [ProjectMenuComponent],
  exports: [ProjectMenuComponent],
  imports: [CommonModule],
})
export class ProjectMenuModule {}
