import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-projects-menu',
  templateUrl: './project-list-menu.component.html',
  styleUrls: ['./project-list-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListMenuComponent {
  selectedFilter: 'all' | 'favorites' = 'all';
}
