/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { FileUploadService } from './file-upload.service';
import { HttpModule } from '@angular/http';

describe('Service: FileUpload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FileUploadService]
    });
  });

  it('should ...', inject([FileUploadService], (service: FileUploadService) => {
    expect(service).toBeTruthy();
  }));
});
