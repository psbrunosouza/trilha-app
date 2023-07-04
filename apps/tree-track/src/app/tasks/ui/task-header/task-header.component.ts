import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'trilha-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHeaderComponent {
  @Input({ required: true }) title: string;

  @Input({ required: true }) description: string;
}
