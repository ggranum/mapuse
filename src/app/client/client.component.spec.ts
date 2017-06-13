import {
  APP_BASE_HREF,
  CommonModule
} from '@angular/common';
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
import { configServiceFactory } from '../config/config.service';
import { MapConfigService } from '../config/map-config.service';
import { MockOsMapConfigService } from '../config/mock-os-map-config.service.spec';
import { EventManagerService } from '../events/event-manager.service';
import { LayoutModule } from '../layout/layout.module';
import { MapModule } from '../map/map.module';
import { MapService } from '../map/map.service';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ToolsModule } from '../tools/tools.module';
import { ClientComponent } from './client.component';
import { osConfigFactory } from './clients/os.module';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
        LayoutModule,
        ToolsModule,
        MapModule,
        SidebarModule,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EventManagerService,
        MapService,
        {provide: MapConfigService, useClass: MockOsMapConfigService},
        configServiceFactory(osConfigFactory),
      ],
      declarations: [ClientComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
