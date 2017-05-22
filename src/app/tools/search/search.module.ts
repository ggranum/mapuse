import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MapModule } from '../../map/map.module';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    MapModule,
    MaterialModule,
    SimpleNotificationsModule.forRoot(),
  ],
  declarations: [SearchComponent],
  entryComponents: [SearchComponent],
  providers: [SearchService],
  exports: [SearchComponent],
})
export class SearchModule { }
