import { FactoryProvider, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ClientConfig } from './client-config';

@Injectable()
export class ConfigService {

  constructor(private mapConfig: ClientConfig) {
  }

  getMapConfig(): Observable<ClientConfig> {
    return Observable.of(this.mapConfig);
  }
}

export function configServiceFactory(mapConfigCallback: () => ConfigService): FactoryProvider {
  return {
    provide: ConfigService,
    useFactory: mapConfigCallback,
  };
}
