import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  APP_BASE_HREF,
  CommonModule
} from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventManagerService } from '../events/event-manager.service';

import { SidebarItemComponent } from './sidebar-item.component';
import { SidebarService } from './sidebar.service';

describe('MenuItemComponent', () => {
  let component: SidebarItemComponent;
  let fixture: ComponentFixture<SidebarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CommonModule,
        MaterialModule,
      ],
      providers: [
        EventManagerService,
        SidebarService,
        {provide: APP_BASE_HREF, useValue: '/'},
        ],
      declarations: [SidebarItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
