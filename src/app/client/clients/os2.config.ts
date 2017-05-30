import { BasemapsButtonComponent } from '../../tools/basemaps/basemaps-button.component';
import { SearchComponent } from '../../tools/search/search.component';
import { OverviewMapComponent } from '../../menu/components/common/overview-map/overview-map.component';
import { FileUploadComponent } from '../../menu/components/common/file-upload/file-upload.component';
import { MapConfig } from '../../config/map';
import { MyMapsOpenComponent } from "../../menu/components/common/my-maps/my-maps-open.component";
import { PrintComponent } from '../../tools/print/print.component';

export const OS2_CONFIG: MapConfig = {
  id: 'os2',
  extent: [-3276800, -3276800, 3276800, 3276800],
  resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
  center: [413674, 289141],
  crs: {
    code: 'EPSG:27700',
    proj4: `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000
            +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
            +units=m +no_defs`,
  },
  layers: [{
    type: 'WMS',
    url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
    attributions: ['Astun Data Service &copy; Ordnance Survey.'],
    sublayers: ['osopen'],
    format: 'image/png',
    opacity: 1,
  }],
  tools: [{
    type: SearchComponent,
  }, {
    type:  PrintComponent,
    tooltip: 'Print Map',
  }, {
    type:  BasemapsButtonComponent,
    tooltip: 'Change Basemap',
  }],
  components: [
    {
      title: 'File Upload',
      type: FileUploadComponent,
    },
    {
      title: 'Overview Map',
      type: OverviewMapComponent,
    },
    {
      title: 'My Maps',
      type: MyMapsOpenComponent,
    },
  ],
};