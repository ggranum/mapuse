/* tslint:disable:no-unused-variable */

import {
  inject,
  TestBed
} from '@angular/core/testing';
import { PolygonService } from './polygon.service';
import { DrawLineService } from '../draw-line/draw-line.service';
import { MapService } from '../../../../../map/map.service';
import { MapConfigService } from '../../../../../config/map-config.service';
import { EventManagerService } from '../../../../../events/event-manager.service';
import { configServiceFactory } from '../../../../../config/config.service';
import { osConfigFactory } from '../../../../../client/clients/os.module';
import { HttpModule } from '@angular/http';

describe('Service: Polygon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [DrawLineService, PolygonService, MapService, MapConfigService, EventManagerService, configServiceFactory(osConfigFactory),]
    });
  });

  it('should ...', inject([PolygonService], (service: PolygonService) => {
    expect(service).toBeTruthy();

  }));
});
