import { MenuCommonModule } from './components/common/menu-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    MenuCommonModule,
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
  ],
  exports: [MenuComponent],
})
export class MenuModule { }
