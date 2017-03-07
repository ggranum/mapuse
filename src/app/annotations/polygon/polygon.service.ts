import { Injectable } from '@angular/core';

import OlMap from 'ol/map';
import layer from 'ol/layer/layer';
import source from 'ol/source/source';
import Draw from 'ol/interaction/draw';

import { MapService } from '../../map/map.service';

@Injectable()
export class PolygonService {

  private map: OlMap;
  private interact: Draw;

  constructor(private mapService: MapService) { }

  handle(name: string) {
    const polygonSource = new source.Vector({wrapX: false});

    const vector = new layer.Vector({
      source: polygonSource,
    });

    // Add layer to map (get from MapService).
    this.map = this.mapService.getMap('mainmap');
    this.map.addLayer(vector);
    console.log('Main Map: ', this.map);

    this.interact = new Draw({
      source: polygonSource,
      type: 'Circle',
      geometryFunction: Draw.createRegularPolygon(4),
    });
    this.map.addInteraction(this.interact);
  }

}
