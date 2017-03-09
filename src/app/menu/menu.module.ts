import { MenuCommonModule } from './components/common/menu-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AnnotationsModule } from '../annotations/annotations.module';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
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
