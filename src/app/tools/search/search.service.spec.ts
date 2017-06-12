/* tslint:disable:no-unused-variable */

import {
  inject,
  TestBed
} from '@angular/core/testing';
import { SearchService } from './search.service';
import {
  HttpModule
} from '@angular/http';

describe('Service: Search', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SearchService]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
