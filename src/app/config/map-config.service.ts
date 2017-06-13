import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from './config.service';
import { ClientConfig, MapConfig } from './map';

const API = {
  mapConfig: 'api/config/map/',
};

@Injectable()
export class MapConfigService {

  constructor(private configService: ConfigService, private http: Http) {
  }

  /** Get the configuration for current map as specified in the client config */
  getMapConfig(): Observable<MapConfig> {
    return this.configService.getClientConfig()
                             .concatMap((config: ClientConfig) => {
                                return this.http.get(API.mapConfig + config.id)
                                                .map((res: Response) => res.json());
                             });
  }
}
