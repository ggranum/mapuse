import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from './map.service';

@Component({
  selector: 'dm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements AfterViewInit {

  mapname = 'mainmap';

  constructor(private mapService: MapService, private route: ActivatedRoute) {
    console.log('Creating Map Component');
  }

  ngAfterViewInit() {
    // Map needs to be created after the view has been initialized or the template
    // will not be properly defined i.e. map name will not have been set.
    this.route.data.subscribe( data => {
      this.mapService.createMap(this.mapname, data.collectionId);
    });
  }
}
