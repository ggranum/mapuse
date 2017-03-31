import { TestBed, inject } from '@angular/core/testing';

import { MyMapsService } from './my-maps.service';

describe('MyMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMapsService]
    });
  });

  it('should ...', inject([MyMapsService], (service: MyMapsService) => {
    expect(service).toBeTruthy();
  }));
});
