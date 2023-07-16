import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-project-items',
  templateUrl: './project-items.component.html',
  styleUrls: ['./project-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemsComponent {}
