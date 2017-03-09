import { FactoryProvider, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MapConfig } from './map';

@Injectable()
export class ConfigService {

  private mapConfig: MapConfig;

  constructor(mapConfig: MapConfig) {
    this.mapConfig = mapConfig;
  }

  getMapConfig(collection: string): Observable<MapConfig> {
    return Observable.of(this.mapConfig);
  }
}

export function configServiceFactory(mapConfigCallback: () => ConfigService): FactoryProvider {
  return {
    provide: ConfigService,
    useFactory: mapConfigCallback,
  };
}
