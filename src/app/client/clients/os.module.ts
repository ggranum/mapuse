import { MapService } from '../../map/map.service';
import { ConfigService } from '../../config/config.service';
import { ClientModule } from '../client.module';
import { OsRoutingModule } from './os.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    OsRoutingModule,
    CommonModule,
    ClientModule,
  ],
  providers: [ConfigService, MapService],
})
export class OsModule { }
