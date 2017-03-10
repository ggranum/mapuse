import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { SimpleNotificationsModule } from 'angular2-notifications';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
