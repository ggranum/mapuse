/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  APP_BASE_HREF,
  CommonModule
} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications/dist';

import { FileUploadComponent } from './file-upload.component';
import { MapModule } from '../../../../map/map.module';
import { EventManagerService } from '../../../../events/event-manager.service';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        MapModule,
        MaterialModule,
        SimpleNotificationsModule.forRoot(),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EventManagerService],
      declarations: [FileUploadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
