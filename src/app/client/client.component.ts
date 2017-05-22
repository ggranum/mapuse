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
    // TODO move to something central, and use a loop
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menu_google.svg'));
    iconRegistry.addSvgIcon(
        'basemaps',
        sanitizer.bypassSecurityTrustResourceUrl('assets/basemaps.svg'));
    iconRegistry.addSvgIcon(
        'print',
        sanitizer.bypassSecurityTrustResourceUrl('assets/print.svg'));
    iconRegistry.addSvgIcon(
        'query',
        sanitizer.bypassSecurityTrustResourceUrl('assets/query.svg'));
    iconRegistry.addSvgIcon(
        'up-arrow',
        sanitizer.bypassSecurityTrustResourceUrl('assets/up-arrow.svg'));
    iconRegistry.addSvgIcon(
        'down-arrow',
        sanitizer.bypassSecurityTrustResourceUrl('assets/down-arrow.svg'));
    iconRegistry.addSvgIcon(
        'left-arrow',
        sanitizer.bypassSecurityTrustResourceUrl('assets/left-arrow.svg'));
    iconRegistry.addSvgIcon(
        'right-arrow',
        sanitizer.bypassSecurityTrustResourceUrl('assets/right-arrow.svg'));
    iconRegistry.addSvgIcon(
        'decades',
        sanitizer.bypassSecurityTrustResourceUrl('assets/decades.svg'));
  }

  refreshMap() {
    // TODO Move to a global event system to decouple client and map service?
    this.mapService.refreshMaps();
  }

  ngOnInit() {
  }
}
