import { Injectable } from '@angular/core';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from './config.service';
import { MapConfig } from './map';
import { MapConfigService } from './map-config.service';


@Injectable()
export class MockOsMapConfigService extends MapConfigService {

  constructor(configService: ConfigService) {
    super(configService, <any>null)
  }

  /** Get the configuration for current map as specified in the client config */
  getMapConfig(): Observable<MapConfig> {
    let cfg:MapConfig  = <MapConfig>{
      id: 'os',
      extent: [-3276800, -3276800, 3276800, 3276800],
      resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
      center: [413674, 289141],
      crs: {
        code: 'EPSG:27700',
        proj4: `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000
              +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
              +units=m +no_defs`,
      },
      layers: [{
        type: 'WMS',
        url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
        attributions: ['Astun Data Service &copy; Ordnance Survey.'],
        sublayers: ['osopen'],
        format: 'image/png',
        opacity: 1,
      }]
    };
    return new BehaviorSubject<MapConfig>(cfg)
  }
}
