import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SearchModule } from './search/search.module';

import { BasemapsButtonComponent } from './basemaps/basemaps-button.component';
import { DecadesComponent } from './decades/decades.component';
import { PrintComponent } from './print/print.component';
import { QueryComponent } from './query/query.component';
import { ToolItemComponent } from './tool-item.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SearchModule,
  ],
  declarations: [
    ToolbarComponent,
    ToolItemComponent,
    BasemapsButtonComponent,
    DecadesComponent,
    PrintComponent,
    QueryComponent,
  ],
  exports: [
    ToolbarComponent,
  ],
  entryComponents: [
    BasemapsButtonComponent,
    DecadesComponent,
    PrintComponent,
    QueryComponent,
  ],
  providers: [],
})
export class ToolsModule { }
