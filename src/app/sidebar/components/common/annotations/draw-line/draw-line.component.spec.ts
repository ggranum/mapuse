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

import { DrawLineComponent } from './draw-line.component';
import { MapModule } from '../../../../../map/map.module';
import { EventManagerService } from '../../../../../events/event-manager.service';
import { configServiceFactory } from '../../../../../config/config.service';
import { MapConfigService } from '../../../../../config/map-config.service';
import { osConfigFactory } from '../../../../../client/clients/os.module';
import { MapService } from '../../../../../map/map.service';

describe('DrawLineComponent', () => {
  let component: DrawLineComponent;
  let fixture: ComponentFixture<DrawLineComponent>;

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
        EventManagerService,
        MapService,
        MapConfigService,
        configServiceFactory(osConfigFactory),
      ],
      declarations: [DrawLineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
