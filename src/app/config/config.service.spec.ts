/* tslint:disable:no-unused-variable */

import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  ConfigService,
  configServiceFactory
} from './config.service';
import { ClientConfig } from './map';
import { osConfigFactory } from '../client/clients/os.module';

describe('Service: Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [configServiceFactory(osConfigFactory)],
    });
  });

  it('should return OS Collection config', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();

    // Get Observable of OS MapConfig.
    const config = service.getClientConfig();
    expect(config).toBeDefined();

    // Subscribe and verify config is for OS Collection.
    config.subscribe((coll: ClientConfig) => {
      expect(coll.id).toEqual('os');
    });
  }));
});
