import { Component, AfterViewInit } from '@angular/core';

import { MapService } from './map.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {

  mapname = 'mainmap';

  constructor(private route: ActivatedRoute,
              private mapService: MapService) {
    console.log('Creating Map Component');
  }

  ngAfterViewInit() {
    let collectionId = this.route.snapshot.data.collectionId;

    // Map needs to be created after the view has been initialized or the template
    // will not be properly defined i.e. map name will not have been set.
    this.mapService.createMap(this.mapname, collectionId);
  }
}
