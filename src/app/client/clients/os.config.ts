import { MyMapsOpenComponent } from '../../sidebar/components/common/my-maps/my-maps-open.component';
import { SearchComponent } from '../../tools/search/search.component';
import { OverviewMapComponent } from '../../sidebar/components/common/overview-map/overview-map.component';
import { FileUploadComponent } from '../../sidebar/components/common/file-upload/file-upload.component';
import { ClientConfig } from '../../config/map';
import { BasemapsButtonComponent } from '../../tools/basemaps/basemaps-button.component';
import { PrintComponent } from '../../tools/print/print.component';

export const OS_CONFIG: ClientConfig = {
  id: 'os',
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
