import { ClientRoutingModule } from './client.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { MapModule } from "../map/map.module";
import { SearchModule } from "../search/search.module";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MapModule,
    SearchModule,
    MenuModule,
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
