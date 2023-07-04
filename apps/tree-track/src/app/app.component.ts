import { Component } from '@angular/core';
import { Menu, menu } from './menu';

@Component({
  selector: 'trilha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menu: Menu[] = menu;
}
