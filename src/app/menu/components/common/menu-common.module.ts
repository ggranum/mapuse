import { MyMapsService } from './my-maps/my-maps.service';
import { FileUploadService } from './file-upload/file-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationsModule } from './annotations/annotations.module';
import { OverviewMapComponent } from './overview-map/overview-map.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MaterialModule } from "@angular/material";
import { CovalentCoreModule } from "@covalent/core";
import { MyMapsListComponent } from './my-maps/my-maps-list.component';
import { MyMapsOpenComponent } from './my-maps/my-maps-open.component';

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
    MaterialModule,
    CovalentCoreModule,
  ],
  declarations: [
    OverviewMapComponent,
    FileUploadComponent,
    MyMapsListComponent,
    MyMapsOpenComponent,
  ],
  entryComponents: [
    OverviewMapComponent,
    FileUploadComponent,
    MyMapsListComponent,
    MyMapsOpenComponent,
  ],
  providers: [FileUploadService, MyMapsService],
})
export class MenuCommonModule { }
