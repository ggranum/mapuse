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
import { EventManagerService } from '../../../../events/event-manager.service';
import { MapModule } from '../../../../map/map.module';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

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
