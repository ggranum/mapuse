/* tslint:disable:no-unused-variable */
import {
  APP_BASE_HREF,
  CommonModule,
} from '@angular/common';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications/dist';

import { EventManagerService } from '../../../../events/event-manager.service';
import { MapModule } from '../../../../map/map.module';
import { AnnotationsComponent } from './annotations.component';
import { DrawLineComponent } from './draw-line/draw-line.component';
import { PolygonComponent } from './polygon/polygon.component';
import { MapService } from '../../../../map/map.service';
import { MapConfigService } from '../../../../config/map-config.service';
import { osConfigFactory } from '../../../../client/clients/os.module';
import { configServiceFactory } from '../../../../config/config.service';

describe('AnnotationsComponent', () => {
  let component: AnnotationsComponent;
  let fixture: ComponentFixture<AnnotationsComponent>;

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
      declarations: [AnnotationsComponent, DrawLineComponent, PolygonComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
