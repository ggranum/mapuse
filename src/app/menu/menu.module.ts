import { MenuCommonModule } from './components/common/menu-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    MenuCommonModule,
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
  ],
  exports: [MenuComponent],
})
export class MenuModule { }
