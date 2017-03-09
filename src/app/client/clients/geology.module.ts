import { MapService } from '../../map/map.service';
import { ConfigService } from '../../config/config.service';
import { ClientModule } from '../client.module';
import { GeologyRoutingModule } from './geology.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    GeologyRoutingModule,
    CommonModule,
    ClientModule,
  ],
  providers: [ConfigService, MapService],
})
export class GeologyModule { }
