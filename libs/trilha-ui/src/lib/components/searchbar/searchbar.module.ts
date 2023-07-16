import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
  imports: [CommonModule],
})
export class SearchbarModule {}
