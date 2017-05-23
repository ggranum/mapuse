import { HISTORIC_CONFIG } from './historic.config';
import { MapService } from '../../map/map.service';
import { ConfigService, configServiceFactory } from '../../config/config.service';
import { ClientModule } from '../client.module';
import { HistoricRoutingModule } from './historic-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HistoricRoutingModule,
    CommonModule,
    ClientModule,
  ],
  providers: [configServiceFactory(historicConfigFactory), MapService],
})
export class HistoricModule { }

export function historicConfigFactory(): ConfigService {
  return new ConfigService(HISTORIC_CONFIG);
}
