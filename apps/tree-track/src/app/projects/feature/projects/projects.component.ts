import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
