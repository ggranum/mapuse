import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-basemap-google',
  templateUrl: './basemaps-button.component.html',
  styleUrls: ['./basemaps-button.component.scss'],
})
export class BasemapsButtonComponent implements OnInit {

  panelVisible = false;

  constructor() { }

  togglePanel() {
    this.panelVisible = !this.panelVisible;
  }

  ngOnInit() { }
}
