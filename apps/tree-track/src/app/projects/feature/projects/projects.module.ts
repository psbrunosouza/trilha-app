import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { projectsRoutes } from '../../../@routes/projects.routes';
import { ProjectListViewModule } from '../../ui/project-list-view/project-list-view.module';
import { ProjectMenuModule } from '../../ui/project-menu/project-menu.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes),
    ProjectListViewModule,
    ProjectMenuModule,
  ],
})
export class ProjectsModule {}
