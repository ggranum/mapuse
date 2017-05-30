import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from '../../map/map.service';
import { ClientComponent } from '../client.component';

@Component({
  templateUrl: './historic.component.html',
  styleUrls: ['../client.component.scss'],
})
export class HistoricComponent extends ClientComponent {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, mapService: MapService) {
    super(iconRegistry, sanitizer, mapService);
  }
}
