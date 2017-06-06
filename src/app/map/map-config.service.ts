import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { MAP_CONFIG } from './map.config';
import { MapConfig } from './map';

@Injectable()
export class MapConfigService {

  constructor() {
  }

  /** 
   * Get the configuration for the given map.
   * 
   * TODO: This will use a fixed client-side configuration object. This configuration
   * is instead to be retrieved from the backend.
   */
  getMapConfig(mapId: string): Observable<MapConfig> {
    const mapConfig = MAP_CONFIG[mapId];
    if (mapConfig === undefined) {
      return Observable.throw({
        message: `Map ID is unknown: ${mapId}`
      })
    } else {
      return Observable.of(mapConfig);
    }
  }
}
