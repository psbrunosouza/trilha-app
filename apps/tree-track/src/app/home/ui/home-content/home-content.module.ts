import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content.component';
import { RouterOutlet } from '@angular/router';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [HomeContentComponent],
  imports: [CommonModule, RouterOutlet, TrilhaButtonModule],
  exports: [HomeContentComponent],
})
export class HomeContentModule {}
