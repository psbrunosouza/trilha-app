import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tab, tabs } from './tabs';
import { ICategory } from '@pineorg/shared';

@Component({
  selector: 'trilha-task-tabs',
  templateUrl: './task-tabs.component.html',
  styleUrls: ['./task-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTabsComponent {
  @Input() public categories: ICategory[] | null;

  tabs: Tab[] = tabs;
}
