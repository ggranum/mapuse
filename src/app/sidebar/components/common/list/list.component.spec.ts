/* tslint:disable:no-unused-variable */
import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  APP_BASE_HREF,
  CommonModule
} from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications/dist';
import { EventManagerService } from '../../../../events/event-manager.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CommonModule,
        HttpModule,
        MaterialModule,
        SimpleNotificationsModule.forRoot(),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EventManagerService],
      declarations: [ListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ListComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
