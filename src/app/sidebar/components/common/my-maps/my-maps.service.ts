import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyMapsService {
  private mapData: any[] = [{
    id: 1,
    name: 'Edinburgh',
    view: 'City View',
    basemap: 'Strategi',
    annotations: true,
    projection: 'EPSG:27700',
    application: 'OS Roam',
    date: '2017-03-29T13:13:41.000Z',
  }, {
    id: 2,
    name: 'London',
    view: 'Street View',
    basemap: 'VML',
    annotations: false,
    projection: 'EPSG:27700',
    application: 'OS Roam',
    date: '2017-03-30T13:13:41.000Z',
  }];

  constructor() { }

  getMaps() {
    return Observable.of(this.mapData);
  }

  deleteMap(id: number) {
    let index = this.mapData.findIndex(m => m.id === id);
    if (index === -1) {
      return;
    }

    this.mapData.splice(index, 1);
  }
}
