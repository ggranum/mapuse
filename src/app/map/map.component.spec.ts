import {
  APP_BASE_HREF,
  CommonModule
} from '@angular/common';
/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications/dist';
import { osConfigFactory } from '../client/clients/os.module';
import { configServiceFactory } from '../config/config.service';
import { MapConfigService } from '../config/map-config.service';
import { MockOsMapConfigService } from '../config/mock-os-map-config.service.spec';
import { EventManagerService } from '../events/event-manager.service';
import { MapComponent } from './map.component';
import { MapService } from './map.service';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
        SimpleNotificationsModule.forRoot(),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EventManagerService,
        MapService,
        configServiceFactory(osConfigFactory),
        {provide: MapConfigService, useClass: MockOsMapConfigService},
      ],
      declarations: [MapComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create MapComponent', () => {
    expect(component).toBeTruthy();
  });
});
