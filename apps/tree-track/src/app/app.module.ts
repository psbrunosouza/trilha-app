import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TrilhaButtonModule } from '@pineorg/trilha-ui';
import { appRoutes } from './@routes/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService, ICategoryService } from '@pineorg/shared';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    TrilhaButtonModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [
    {
      provide: ICategoryService,
      useClass: CategoryService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
