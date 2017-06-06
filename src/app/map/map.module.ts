import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { MapConfigService } from "./map-config.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [ MapConfigService ]
})
export class MapModule { }
