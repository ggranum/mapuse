import { MapModule } from '../../map/map.module';
import { MenuModule } from '../../menu/menu.module';
import { Os2Component } from './os2.component';
import { OS2_CONFIG } from './os2.config';
import { MapService } from '../../map/map.service';
import { ConfigService, configServiceFactory } from '../../config/config.service';
import { ClientModule } from '../client.module';
import { Os2RoutingModule } from './os2-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { MaterialModule } from "@angular/material";
import { ToolsModule } from "../../tools/tools.module";

@NgModule({
  imports: [
    Os2RoutingModule,
    CommonModule,
    ClientModule,
    LayoutModule,
    MenuModule,
    MapModule,
    MaterialModule,
    ToolsModule,
  ],
  declarations: [Os2Component],
  providers: [configServiceFactory(os2ConfigFactory), MapService],
})
export class Os2Module { }

export function os2ConfigFactory(): ConfigService {
  return new ConfigService(OS2_CONFIG);
}
