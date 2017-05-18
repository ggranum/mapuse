import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { DecadesComponent } from './decades.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [DecadesComponent],
  exports: [DecadesComponent],
})
export class DecadesModule { }
