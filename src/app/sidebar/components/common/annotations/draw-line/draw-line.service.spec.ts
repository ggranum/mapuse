/* tslint:disable:no-unused-va    var MapService;ria    var MapService;ble */

import { TestBed, inject } from '@angular/core/testing';
import { DrawLineService } from './draw-line.service';

describe('Service: DrawLine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawLineService],
    });
  });

  it('should ...', inject([DrawLineService], (service: DrawLineService) => {
    expect(service).toBeTruthy();
  }));
});
