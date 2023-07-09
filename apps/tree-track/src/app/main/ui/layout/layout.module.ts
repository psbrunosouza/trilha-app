import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterOutlet, TrilhaButtonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
