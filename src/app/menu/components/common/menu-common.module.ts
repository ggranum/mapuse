import { FileUploadService } from './file-upload/file-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewMapComponent } from './overview-map/overview-map.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
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
