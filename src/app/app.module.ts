import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventManagerService } from './events/event-manager.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

// import { SimpleNotificationsModule } from 'angular2-notifications';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CovalentCoreModule } from '@covalent/core';
import { SearchModule } from "./tools/search/search.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SearchModule,
    AppRoutingModule,
    MaterialModule,
    CovalentCoreModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [EventManagerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
