import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-decades',
  templateUrl: './decades.component.html',
  styleUrls: ['./decades.component.scss'],
})
export class DecadesComponent implements OnInit {

  decades: [{name: string, value: string, disabled?: boolean}];

  panelVisible = true;

  constructor() {
    this.decades = [{
      name: '1840s',
      value: '1840',
    }, {
      name: '1850s',
      value: '1850',
    }, {
      name: '1860s',
      value: '1860',
      disabled: true,
    }, {
      name: '1870s',
      value: '1870',
    }, {
      name: '1880s',
      value: '1880',
    }, {
      name: '1890s',
      value: '1890',
    }, {
      name: '1900s',
      value: '1900',
    }, {
      name: '1910s',
      value: '1910',
    }, {
      name: '1920s',
      value: '1920',
    }, {
      name: '1930s',
      value: '1930',
    }, {
      name: '1940s',
      value: '1940',
    }, {
      name: '1950s',
      value: '1950',
    }, {
      name: '1960s',
      value: '1960',
    }, {
      name: '1970s',
      value: '1970',
    }, {
      name: '1980s',
      value: '1980',
    }, {
      name: '1990s',
      value: '1990',
    }, {
      name: 'Contempoary',
      value: 'contemporary',
    }];
  }

  togglePanel() {
    this.panelVisible = !this.panelVisible;
  }

  ngOnInit() { }
}
