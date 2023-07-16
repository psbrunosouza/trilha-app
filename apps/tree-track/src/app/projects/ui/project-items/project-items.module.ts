import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemsComponent } from './project-items.component';
import { CardModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [ProjectItemsComponent],
  exports: [ProjectItemsComponent],
  imports: [CommonModule, CardModule],
})
export class ProjectItemsModule {}
