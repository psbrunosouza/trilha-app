import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trilha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
