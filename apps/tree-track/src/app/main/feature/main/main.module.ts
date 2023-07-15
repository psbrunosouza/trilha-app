import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../ui/layout/layout.module';
import { mainRoutes } from '../../../@routes/main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(mainRoutes), LayoutModule],
})
export class MainModule {}
