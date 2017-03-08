import { ClientModule } from '../client.module';
import { OsRoutingModule } from './os.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    OsRoutingModule,
    CommonModule,
    ClientModule,
  ],
})
export class OsModule { }
