import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AnnotationsModule } from '../annotations/annotations.module';
import { OverviewMapComponent } from './components/overview-map/overview-map.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { JidiPreviewComponent } from './components/jidi-preview/jidi-preview.component';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item.component';
import { FileUploadService } from "./components/file-upload/file-upload.service";

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
    DragulaModule,
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    OverviewMapComponent,
    FileUploadComponent,
    JidiPreviewComponent,
  ],
  exports: [MenuComponent],
  providers: [
    FileUploadService,
  ],
  entryComponents: [
    OverviewMapComponent,
    FileUploadComponent,
    JidiPreviewComponent,
  ]
})
export class MenuModule { }
