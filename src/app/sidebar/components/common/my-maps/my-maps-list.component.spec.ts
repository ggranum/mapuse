import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  APP_BASE_HREF,
  CommonModule
} from '@angular/common';
import {
  MaterialModule,
  MdDialogModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMapsListComponent } from './my-maps-list.component';
import { EventManagerService } from '../../../../events/event-manager.service';
import {
  CovalentDataTableModule,
  CovalentFileModule
} from '@covalent/core';
import { AnnotationsModule } from '../annotations/annotations.module';
import { MyMapsService } from './my-maps.service';
import { FileUploadService } from '../file-upload/file-upload.service';

xdescribe('MyMapsComponent', () => {
  let component: MyMapsListComponent;
  let fixture: ComponentFixture<MyMapsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CommonModule,
        AnnotationsModule,
        MaterialModule,
        MdDialogModule,
        CovalentFileModule,
        CovalentDataTableModule,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EventManagerService, MyMapsService, FileUploadService],
      declarations: [MyMapsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
