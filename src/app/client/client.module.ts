import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CovalentCoreModule } from '@covalent/core';

import { LayoutModule } from '../layout/layout.module';
import { MapModule } from '../map/map.module';
import { MenuModule } from '../menu/menu.module';
import { BasemapsModule as BasemapsGoogleModule } from '../tools/basemaps-google/basemaps.module';
import { ToolsModule } from '../tools/tools.module';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule,
    CovalentCoreModule,
    LayoutModule,
    MapModule,
    MaterialModule,
    MenuModule,
    BasemapsGoogleModule,
    ToolsModule,
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent],
})
export class ClientModule { }
