import { QueryComponent } from '../../tools/query/query.component';
import { SearchComponent } from '../../tools/search/search.component';
import { OverviewMapComponent } from '../../sidebar/components/common/overview-map/overview-map.component';
import { FileUploadComponent } from '../../sidebar/components/common/file-upload/file-upload.component';
import { ClientConfig } from '../../config/map';
import { MyMapsOpenComponent } from "../../sidebar/components/common/my-maps/my-maps-open.component";
import { PrintComponent } from '../../tools/print/print.component';

export const HISTORIC_CONFIG: ClientConfig = {
  id: 'historic',
  tools: [{
    type: SearchComponent,
  }, {
    type:  PrintComponent,
    tooltip: 'Print Map',
  }, {
    type:  QueryComponent,
    tooltip: 'Query',
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
