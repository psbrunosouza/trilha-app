import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeContentModule } from '../../ui/home-content/home-content.module';
import { mainRoutes } from '../../../@routes/main.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(mainRoutes), HomeContentModule],
})
export class HomeModule {}
