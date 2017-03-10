import { FileUploadService } from './file-upload/file-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationsModule } from './annotations/annotations.module';
import { OverviewMapComponent } from './overview-map/overview-map.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
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
