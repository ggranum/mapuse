import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventManagerService } from './events/event-manager.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
// import { ConfigModule } from './config/config.module';

// import { SimpleNotificationsModule } from 'angular2-notifications';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CovalentFileModule, CovalentDataTableModule } from '@covalent/core';
import { SearchModule } from "./tools/search/search.module";

// import { ConfigService } from './config/config.service';
// import { MapConfigService } from './config/map-config.service';

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
    CovalentFileModule,
    CovalentDataTableModule,
    BrowserAnimationsModule,
  ],
  providers: [EventManagerService], //, ConfigService, MapConfigService],
  bootstrap: [AppComponent],
})
export class AppModule { }
