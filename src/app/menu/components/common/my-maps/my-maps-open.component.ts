import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MyMapsListComponent } from './my-maps-list.component';

@Component({
  selector: 'dm-my-maps-open',
  templateUrl: './my-maps-open.component.html',
  styleUrls: ['./my-maps-open.component.scss']
})
export class MyMapsOpenComponent {

  constructor(public dialog: MdDialog) { }

  openMyMaps(): void {
    this.dialog.open(MyMapsListComponent, { width: '80%' });
  }
}
