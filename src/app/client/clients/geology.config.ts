import { MyMapsOpenComponent } from '../../sidebar/components/common/my-maps/my-maps-open.component';
import { AnnotationsComponent } from '../../sidebar/components/common/annotations/annotations.component';
import { JidiPreviewComponent } from '../../sidebar/components/geology/jidi-preview/jidi-preview.component';
import { OverviewMapComponent } from '../../sidebar/components/common/overview-map/overview-map.component';
import { FileUploadComponent } from '../../sidebar/components/common/file-upload/file-upload.component';
import { ClientConfig } from '../../config/client-config';
import { BasemapsButtonComponent } from '../../tools/basemaps/basemaps-button.component';
import { PrintComponent } from '../../tools/print/print.component';
import { QueryComponent } from '../../tools/query/query.component';
import { SearchComponent } from '../../tools/search/search.component';

export const GEOLOGY_CONFIG: ClientConfig = {
  id: 'geology',
  tools: [{
    type: SearchComponent,
  }, {
    type:  PrintComponent,
    tooltip: 'Print Map',
  }, {
    type:  QueryComponent,
    tooltip: 'Query Map',
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
      title: 'Jidi Preview',
      type: JidiPreviewComponent,
    },
    {
      title: 'Annotations',
      type: AnnotationsComponent,
    },
    {
      title: 'My Maps',
      type: MyMapsOpenComponent,
    },
  ],
};
