import {
  inject,
  TestBed
} from '@angular/core/testing';

import { EventManagerService } from './event-manager.service';


describe('EventManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     providers: [EventManagerService]
    });
  });

  it('should ...', inject([EventManagerService], (service: EventManagerService) => {
    expect(service).toBeTruthy();
  }));
});
