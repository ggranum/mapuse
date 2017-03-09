import { MenuGeologyModule } from '../../menu/components/geology/menu-geology.module';
import { GEOLOGY_CONFIG } from './geology.config';
import { MapService } from '../../map/map.service';
import { ConfigService, configServiceFactory } from '../../config/config.service';
import { ClientModule } from '../client.module';
import { GeologyRoutingModule } from './geology.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    GeologyRoutingModule,
    CommonModule,
    ClientModule,
    MenuGeologyModule,
  ],
  providers: [configServiceFactory(geologyConfigFactory), MapService],
})
export class GeologyModule { }

export function geologyConfigFactory(): ConfigService {
  return new ConfigService(GEOLOGY_CONFIG);
}
