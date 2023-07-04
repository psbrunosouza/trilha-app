import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tab, tabs } from './tabs';

@Component({
  selector: 'trilha-task-tabs',
  templateUrl: './task-tabs.component.html',
  styleUrls: ['./task-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTabsComponent {
  tabs: Tab[] = tabs;
}
