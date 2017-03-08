import { ClientModule } from '../client.module';
import { GeologyRoutingModule } from './geology.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    GeologyRoutingModule,
    CommonModule,
    ClientModule,
  ],
})
export class GeologyModule { }
