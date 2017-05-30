import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ConfigService, configServiceFactory } from '../../config/config.service';
import { LayoutModule } from '../../layout/layout.module';
import { MapModule } from '../../map/map.module';
import { MapService } from '../../map/map.service';
import { MenuModule } from '../../menu/menu.module';
import { ToolsModule } from '../../tools/tools.module';
import { ClientModule } from '../client.module';
import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricComponent } from './historic.component';
import { HISTORIC_CONFIG } from './historic.config';

@NgModule({
  imports: [
    HistoricRoutingModule,
    CommonModule,
    ClientModule,
    LayoutModule,
    MenuModule,
    MapModule,
    MaterialModule,
    ToolsModule,
  ],
  providers: [configServiceFactory(historicConfigFactory), MapService],
  declarations: [HistoricComponent],
})
export class HistoricModule { }

export function historicConfigFactory(): ConfigService {
  return new ConfigService(HISTORIC_CONFIG);
}
