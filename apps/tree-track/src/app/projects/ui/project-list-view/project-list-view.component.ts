import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-projects-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListViewComponent {
  selectedFilter: 'all' | 'favorites' = 'all';
}
