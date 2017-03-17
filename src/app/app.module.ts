import { EventManagerService } from './events/event-manager.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

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
    MaterialModule,
  ],
  providers: [EventManagerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
