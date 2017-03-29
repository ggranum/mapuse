import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { MapModule } from "../map/map.module";
import { SearchModule } from "../tools/search/search.module";
import { MenuModule } from "../menu/menu.module";
import { MaterialModule } from "@angular/material";
import { CovalentCoreModule } from "@covalent/core";

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    SearchModule,
    MenuModule,
    MaterialModule,
    CovalentCoreModule,
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent],
})
export class ClientModule { }
