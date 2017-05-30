import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-basemap-button',
  templateUrl: './basemaps-button.component.html',
  styleUrls: ['./basemaps-button.component.scss'],
})
export class BasemapsButtonComponent implements OnInit {

  panelVisible = false;

  overlays: [{name: string, value: string, icon: string}];

  constructor() {
    this.overlays = [{
      name: 'MasterMap',
      value: 'mastermap',
      icon: 'assets/thumbnails/MasterMap.png',
    }, {
      name: 'MasterMap Plan',
      value: 'mastermapplan',
      icon: 'assets/thumbnails/MasterMapOrig.png',
    }, {
      name: 'OML',
      value: 'oml',
      icon: 'assets/thumbnails/OML.png',
    }, {
      name: 'Raster 25k',
      value: 'raster25k',
      icon: 'assets/thumbnails/Raster25k.png',
    }, {
      name: 'GB',
      value: 'gb',
      icon: 'assets/thumbnails/gb.png',
    }, {
      name: 'VML Plan',
      value: 'vmlplan',
      icon: 'assets/thumbnails/VMLPlan.png',
    }, {
      name: 'VMD',
      value: 'vmd',
      icon: 'assets/thumbnails/VMD.png',
    }];
  }

  togglePanel() {
    this.panelVisible = !this.panelVisible;
  }

  ngOnInit() { }
}
