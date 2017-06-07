import { FactoryProvider, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ClientConfig } from './map';

@Injectable()
export class ConfigService {

  constructor(private clientConfig: ClientConfig) {
  }

  getClientConfig(): Observable<ClientConfig> {
    return Observable.of(this.clientConfig);
  }
}

export function configServiceFactory(mapConfigCallback: () => ConfigService): FactoryProvider {
  return {
    provide: ConfigService,
    useFactory: mapConfigCallback,
  };
}
