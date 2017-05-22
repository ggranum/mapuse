import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { BasemapsModule } from './basemaps/basemaps.module';
import { DecadesModule } from './decades/decades.module';
import { SearchModule } from './search/search.module';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SearchModule,
    BasemapsModule,
    DecadesModule,
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  providers: [],
})
export class ToolsModule { }
