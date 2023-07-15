import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tab, tabs } from './tabs';
import { DialogService, ICategory } from '@pineorg/shared';
import { ManageDialogComponent } from './manage-dialog/manage-dialog.component';

@Component({
  selector: 'trilha-task-tabs',
  templateUrl: './task-tabs.component.html',
  styleUrls: ['./task-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTabsComponent {
  @Input() public categories: ICategory[] | null;

  tabs: Tab[] = tabs;

  constructor(private dialogService: DialogService) {}

  openTheTcheca(): void {
    this.dialogService
      .open<{ title: string }, ManageDialogComponent>({
        component: ManageDialogComponent,
        data: {
          title: 'teste',
        },
      })
      .closed.subscribe(() => {
        console.log('closed');
      });
  }
}
