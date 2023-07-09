import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICategory } from '@pineorg/shared';

@Component({
  selector: 'trilha-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanComponent {
  @Input() public categories: ICategory[] | null;

  public $categoriesChecked(categories: ICategory[] | null): ICategory[] {
    return categories ?? [];
  }
}
