import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, shareReplay, takeWhile } from 'rxjs';
import { ICategory, ICategoryService } from '@pineorg/shared';

@Component({
  selector: 'trilha-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  protected categories$: Observable<ICategory[]>;

  protected alive = true;

  constructor(private categoryService: ICategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categories$ = this.categoryService.list().pipe(
      shareReplay(),
      takeWhile(() => this.alive)
    );
  }
}
