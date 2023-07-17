import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemsComponent } from './project-items.component';
import { CardModule, IconBadgeModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [ProjectItemsComponent],
  exports: [ProjectItemsComponent],
  imports: [CommonModule, CardModule, IconBadgeModule],
})
export class ProjectItemsModule {}
