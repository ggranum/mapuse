/* tslint:disable:no-unused-variable */



import { TestBed, inject } from '@angular/core/testing';
import { MapService } from './map.service';
import { MapConfigService } from '../config/map-config.service';
import { configServiceFactory } from '../config/config.service';
import { osConfigFactory } from '../client/clients/os.module';
import { HttpModule } from '@angular/http';
import { EventManagerService } from '../events/event-manager.service';

describe('Service: Map', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        MapService,
        MapConfigService,
        configServiceFactory(osConfigFactory),
        EventManagerService
      ],
    });
  });

  it('should ...', inject([MapService], (service: MapService) => {
    expect(service).toBeTruthy();
  }));
});
