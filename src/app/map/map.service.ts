import { DmSearchEvent } from '../events/event';
import { EventManagerService } from '../events/event-manager.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import proj4 from 'proj4';

import OlMap from 'ol/map';
import proj from 'ol/proj';
import View from 'ol/view';

import control from 'ol/control';
import ZoomSlider from 'ol/control/zoomslider';
import ScaleLine from 'ol/control/scaleline';
import AttributionControl from 'ol/control/attribution';
import TileGrid from 'ol/tilegrid/tilegrid';

import Tile from 'ol/layer/tile';
import TileWMS from 'ol/source/tilewms';
import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import Coordinate from 'ol/coordinate';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import Style from 'ol/style/style';
import Icon from 'ol/style/icon';
import Overlay from 'ol/overlay';
import Attribution from 'ol/attribution';

import { MapConfigService } from '../config/map-config.service';
import { MapConfig, Layer } from '../config/map';
// import { NotificationsService } from '../notifications/notifications.service';

proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717' +
                         ' +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,' +
                         '-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');
proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs')
proj.setProj4(proj4);

@Injectable()
export class MapService {

  private maps: Map<string, OlMap>;

  constructor(private mapConfigService: MapConfigService, private eventManager: EventManagerService) {
              // private notificationsService: NotificationsService) {
    // TODO
    this.maps = new Map();

    this.eventManager.subscribe<DmSearchEvent>(DmSearchEvent, (e) => {
      this.setCenter(e.searchResult.point, e.searchResult.zoomLevel);
    });
  }

  createMap(): Observable<OlMap> {
    return this.mapConfigService.getMapConfig().map((config: MapConfig) => {
      console.log('CONFIG: ', config);

      let projection = proj.get(config.crs.code);
      proj.addProjection(projection);

      // Convert layer config to an array of OpenLayers Layer objects.
      let layers = this.getLayers(config.layers, config.resolutions, projection);

      // FIXME: config.center is just an array e.g. [33600, 67500] (easting/northing)
      //        we need a better way to set the center point of the map.
      // console.log('Centre Point: ', proj.transform([55.945589, -3.182186], 'EPSG:3857', projection));
      // console.log('Centre Point: ', proj.transform([55.945589, -3.182186], 'EPSG:4326', projection));
      // center: proj.fromLonLat([55.945589, -3.182186], 'EPSG:27700'),

      // Create map.
      let map = new OlMap({
        controls: control.defaults().extend([
          new ZoomSlider(),
          new ScaleLine(),
          new AttributionControl(),
        ]),
        layers: layers,
        view: new View({
          projection: projection,
          resolutions: config.resolutions,
          zoom: 0,
          center: config.center
        }),
      });

      this.maps.set(config.id, map);
      return map;
    });
  }

  refreshMaps() {
    this.maps.forEach(map => {
      map.updateSize();
    });
  }

  setCenter(point: Coordinate, zoomLevel: number) {
    // point = [33600, 67500];
    console.log('Centre on: ', point);
    let position = proj.transform(point, 'EPSG:27700', 'EPSG:27700');
    // let position = proj.transform(point, 'EPSG:4326', 'EPSG:3857');

    let map = this.maps.get('mainmap');

    map.getView().setCenter(position);
    map.getView().setZoom(zoomLevel);
    this.addMarker(position);
  }

  getMap(name: string): OlMap {
    return this.maps.get(name);
  }

  addMarker(position: Coordinate) {
    let iconFeature = new Feature({
      geometry: new Point(position),
      name: 'Null Island',
      population: 4000,
      rainfall: 500,
    });

    let iconStyle = new Style({
      image: new Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        scale: 0.25,
        src: 'assets/marker.png',
      })),
    });

    iconFeature.setStyle(iconStyle);

    let vectorSource = new VectorSource({
      features: [iconFeature],
    });

    let vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    let map = this.maps.get('mainmap');
    map.addLayer(vectorLayer);

    // FIXME: Must be a better way to get the element.
    let element = document.getElementById('mainmap-popup') as Element;
    console.log('Popover Element: ', element);
    let popup = new Overlay({
      element: element,
      // positioning: 'bottom-center',
      // stopEvent: false,
    });
    map.addOverlay(popup);

    // display popup on click
    map.on('click', function(evt) {
      let feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feat) {
          return feat;
        });

      if (feature) {
        // let coordinates = feature.getGeometry().getCoordinates();
        // console.log('COORDS: ', coordinates);
        popup.setPosition(position);

        const hdms = Coordinate.toStringHDMS(proj.transform(position, 'EPSG:27700', 'EPSG:4326'));

        /* tslint:disable-next-line */
        const content = `<strong>${feature.get('name')}</strong><hr/>Population: ${feature.get('population')}<br/>Rainfall: ${feature.get('rainfall')}<br/>Coordinates (BNG): ${position}<br/>Coordinates (HDMS): ${hdms}`;
        ($(element)).popover({
          'placement': 'top',
          'html': true,
          'content': content,
        });
        ($(element)).popover('show');
      } else {
        ($(element)).popover('destroy');
      }
    });

    // change mouse cursor when over marker
    map.on('pointermove', function(e) {
      if (e.dragging) {
        (<any>$(element)).popover('destroy');
        return;
      }
      // let pixel = map.getEventPixel(e.originalEvent);
      // let hit = map.hasFeatureAtPixel(pixel);
      // console.log(`Hovering: ${hit}`);
      // map.getTarget().css('cursor', hit ? 'pointer' : '');
      // map.getTarget().style.cursor = hit ? 'pointer' : '';
      // map.getTarget().style.cursor = 'pointer';
    });
  }

  /**
   * Get the max resolution for this layer, as required by Open Layers, or undefined if the layer is at zoom
   * level 0. This is a little awkward, since in OpenLayers 3 the max resolution is exclusive.
   */
  private getMaxResolution(layerResolutions: number[], mapResolutions: number[]): number | undefined {
    const i = mapResolutions.findIndex(r => r === layerResolutions[0]);
    return (i <= 0) ? undefined : mapResolutions[i - 1];
  }

  /** Get the min resolution for the layer. */
  private getMinResolution(layerResolutions: number[]): number {
    return layerResolutions[layerResolutions.length - 1];
  }

  /**
   * Construct a list of layers from the map config.
   */
  private getLayers(layerConfig: Layer[], mapResolutions: number[], projection: proj.Projection): any[] {
    let layers: Tile[] = [];
    let currentProducts = new Map<number, string>();

    for (let layerConf of layerConfig) {
      let attributions = '';
      for (let attribution of layerConf.attributions) {
        attributions += attribution;
      }

      console.log('layer resolutions: ', layerConf.resolutions);
      const minResolution = this.getMinResolution(layerConf.resolutions);
      const maxResolution = this.getMaxResolution(layerConf.resolutions, mapResolutions);

      let tileGrid = new TileGrid({
        origin: layerConf.extent.slice(0, 2),
        resolutions: layerConf.resolutions,
      });

      let tile = new Tile({
        source: new TileWMS({
          urls: layerConf.urls,
          attributions: [
            new Attribution({html: attributions}),
          ],
          projection: projection,
          params: {
            'LAYERS': layerConf.sublayers,
            'FORMAT': layerConf.format,
            'VERSION': layerConf.version,
            'product': layerConf.product,
            'TILED': true
          },
          tileGrid: tileGrid
        }),
        minResolution: minResolution,
        maxResolution: maxResolution,
        opacity: layerConf.opacity
      })

      // Set only the first layer at any resolution to visible
      layerConf.resolutions.forEach(resolution => {
        if (!currentProducts[resolution]) {
          tile.setVisible(true);
          currentProducts[resolution] = layerConf.product;
        } else {
          tile.setVisible(false);
        }
      });

      layers.push(tile);
    }

    return layers;
  }
}
