import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { SidebarCommonModule } from './components/common/sidebar-common.module';
import { SidebarComponent } from './sidebar.component';

import { SidebarItemComponent } from './sidebar-item.component';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [
    CommonModule,
    SidebarCommonModule,
    MaterialModule,
  ],
  declarations: [
    SidebarItemComponent,
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
  ],
  providers: [
    SidebarService,
  ],
})
export class SidebarModule { }
