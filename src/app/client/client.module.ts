import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { MapModule } from "../map/map.module";
import { SearchModule } from "../tools/search/search.module";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    SearchModule,
    MenuModule,
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent],
})
export class ClientModule { }
