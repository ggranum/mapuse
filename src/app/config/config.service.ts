import { FactoryProvider, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MapConfig } from './map';

@Injectable()
export class ConfigService {

  constructor(private mapConfig: MapConfig) {
  }

  getMapConfig(): Observable<MapConfig> {
    return Observable.of(this.mapConfig);
  }
}

export function configServiceFactory(mapConfigCallback: () => ConfigService): FactoryProvider {
  return {
    provide: ConfigService,
    useFactory: mapConfigCallback,
  };
}
