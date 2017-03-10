import { FileUploadService } from './file-upload/file-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationsModule } from './annotations/annotations.module';
import { OverviewMapComponent } from './overview-map/overview-map.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
    MaterialModule,
  ],
  declarations: [
    OverviewMapComponent,
    FileUploadComponent,
  ],
  entryComponents: [
    OverviewMapComponent,
    FileUploadComponent,
  ],
  providers: [FileUploadService],
})
export class MenuCommonModule { }
