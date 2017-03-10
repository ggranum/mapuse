import { MapService } from '../map/map.service';
import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private mapService: MapService) {
    // TODO move to something central
    iconRegistry.addSvgIcon(
        'menu_google',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menu_google.svg'));
  }

  refreshMap() {
    // TODO Move to a global event system to decouple client and map service?
    this.mapService.refreshMaps();
  }

  ngOnInit() {
  }
}
