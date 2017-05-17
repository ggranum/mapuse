import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BasemapsButtonComponent } from './basemaps-button.component';

import { MapModule } from '../../map/map.module';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    MaterialModule,
  ],
  declarations: [BasemapsButtonComponent],
  providers: [],
  exports: [BasemapsButtonComponent],
})
export class BasemapsModule { }
