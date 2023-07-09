import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menu } from '../../../menu';

@Component({
  selector: 'trilha-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  protected readonly menu = menu;
}
