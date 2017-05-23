import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from '../../map/map.service';
import { ClientComponent } from '../client.component';

@Component({
  templateUrl: './os2.component.html',
  styleUrls: ['./os2.component.scss'],
})
export class Os2Component extends ClientComponent {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, mapService: MapService) {
    super(iconRegistry, sanitizer, mapService);
  }
}
