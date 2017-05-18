import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BasemapsButtonComponent } from './basemaps-button.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [BasemapsButtonComponent],
  exports: [BasemapsButtonComponent],
})
export class BasemapsModule { }
