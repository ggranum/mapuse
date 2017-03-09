import { OS_CONFIG } from './os.config';
import { MapService } from '../../map/map.service';
import { ConfigService, configServiceFactory } from '../../config/config.service';
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
  providers: [configServiceFactory(osConfigFactory), MapService],
})
export class OsModule { }

export function osConfigFactory(): ConfigService {
  return new ConfigService(OS_CONFIG);
}
