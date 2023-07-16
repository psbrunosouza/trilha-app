import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { projectsRoutes } from '../../../@routes/projects.routes';
import { ProjectListMenuModule } from '../../ui/project-list-menu/project-list-menu.module';
import { ProjectItemsModule } from '../../ui/project-items/project-items.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes),
    ProjectListMenuModule,
    ProjectItemsModule,
  ],
})
export class ProjectsModule {}
