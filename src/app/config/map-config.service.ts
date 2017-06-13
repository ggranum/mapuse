import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';

import Extent from 'ol/extent';

import { ClientConfig, MapConfig, Layer } from './map';
import { MapConfigDao, LayerDao } from './map-backend';
import { ConfigService } from './config.service';

/** TODO: This should be retrieved from the backend's global config. */
const MAPPROXY_URLS = ['http://devmaps1.digimap.edina.ac.uk/mapproxy/wmsMap?',
                       'http://devmaps2.digimap.edina.ac.uk/mapproxy/wmsMap?',
                       'http://devmaps3.digimap.edina.ac.uk/mapproxy/wmsMap?'];

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
                                                .map((res: Response) => this.toFrontendMapConfig(config.id, res.json()));
                             });
  }

  /** Convert a backend map config to the format required by the frontend. */
  private toFrontendMapConfig(id: string, backendConfig: MapConfigDao): MapConfig {
    const mapResolutions = this.getMapResolutions(backendConfig);
    return {
      id: id,
      extent: backendConfig.bounds,
      resolutions: mapResolutions,
      center: Extent.getCenter(backendConfig.bounds),
      crs: { code: backendConfig.projection.code },
      layers: backendConfig.layers.map(layer => this.toFrontendLayer(mapResolutions, layer))
    }
  }

  /** Convert a backend layer config to the format required by the frontend. */
  private toFrontendLayer(mapResolutions: number[], backendLayer: LayerDao): Layer {
    return {
      type: 'WMS',
      urls: MAPPROXY_URLS,
      attributions: [ backendLayer.metadata.licence ],
      sublayers: backendLayer.cachedLayers,
      format: 'image/png',
      opacity: 1,
      version: '1.1.1',
      product: backendLayer.mapproxyProduct,
      extent: backendLayer.bounds,
      resolutions: backendLayer.resolutions
    };
  }

  /** Generate the full list of resolutions for the map. This is ordered from highest to lowest. */
  private getMapResolutions(backendConfig: MapConfigDao): number[] {
    return backendConfig.layers.map((layer: LayerDao) => layer.resolutions)
                               .reduce((acc: number[], resolutions: number[]) => acc.concat(resolutions))
                               .filter((value, index, array) => index == array.indexOf(value))
                               .sort((a, b) => b - a);
  }
}
