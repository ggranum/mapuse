/* tslint:disable:no-unused-variable */

import {
  async,
  TestBed
} from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EventManagerService } from './events/event-manager.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

describe('App: Angular2Map', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        BrowserModule,
        RouterModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        EventManagerService
      ],
      declarations: [AppComponent],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
