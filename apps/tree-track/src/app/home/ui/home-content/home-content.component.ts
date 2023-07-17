import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menu } from '../../../menu';

@Component({
  selector: 'trilha-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContentComponent {
  protected readonly menu = menu;
}
