import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

import OlMap from 'ol/map';
import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import Draw from 'ol/interaction/draw';
import Style from 'ol/style/style';
import Stroke from 'ol/style/stroke';

import { MapService } from '../../../../../map/map.service';

@Component({
  selector: 'app-draw-line',
  templateUrl: './draw-line.component.html',
  styleUrls: ['./draw-line.component.scss'],
})
export class DrawLineComponent implements OnInit {

  isActive: boolean = false;
  private map: OlMap;
  private interact: Draw;

  constructor(private el: ElementRef,
              private renderer: Renderer,
              private mapService: MapService) { }

  toggle() {
    this.isActive = !this.isActive;
    let button = this.el.nativeElement.querySelector('button');
    this.renderer.setElementClass(button, 'active', this.isActive);

    if (this.isActive) {
      // FIXME: Disable all other controls.
      const drawLineSource = new VectorSource({wrapX: false});

      let drawLineStyle = new Style({
        stroke: new Stroke({
          color: '#fff',
          width: 2,
        }),
      });

      const vector = new VectorLayer({
        source: drawLineSource,
        style: drawLineStyle,
      });

      this.map = this.mapService.getMap('mainmap');
      // FIXME: Get annotations layer from map.
      this.map.addLayer(vector);

      this.interact = new Draw({
        source: drawLineSource,
        type: 'LineString',
      });
      this.map.addInteraction(this.interact);
    } else {
      this.map.removeInteraction(this.interact);
    }
  }

  ngOnInit() {
  }

}
