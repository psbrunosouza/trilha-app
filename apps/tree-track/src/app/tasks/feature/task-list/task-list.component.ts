import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {

}
