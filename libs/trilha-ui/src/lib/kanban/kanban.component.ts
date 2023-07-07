import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanComponent {}
