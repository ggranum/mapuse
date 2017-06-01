import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LayoutModule } from '../layout/layout.module';
import { MapModule } from '../map/map.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { BasemapsModule as BasemapsGoogleModule } from '../tools/basemaps-google/basemaps.module';
import { ToolsModule } from '../tools/tools.module';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MapModule,
    MaterialModule,
    SidebarModule,
    BasemapsGoogleModule,
    ToolsModule,
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent],
})
export class ClientModule { }
