import { BasemapsButtonComponent } from '../../tools/basemaps/basemaps-button.component';
import { SearchComponent } from '../../tools/search/search.component';
import { OverviewMapComponent } from '../../sidebar/components/common/overview-map/overview-map.component';
import { FileUploadComponent } from '../../sidebar/components/common/file-upload/file-upload.component';
import { ClientConfig } from '../../config/client-config';
import { MyMapsOpenComponent } from "../../sidebar/components/common/my-maps/my-maps-open.component";
import { PrintComponent } from '../../tools/print/print.component';

export const OS2_CONFIG: ClientConfig = {
  id: 'os2',
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
