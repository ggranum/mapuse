import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ITdDataTableColumn, ITdDataTableSortChangeEvent, TdDataTableSortingOrder } from '@covalent/core';
import { MyMapsService } from './my-maps.service';

@Component({
  selector: 'dm-my-maps',
  templateUrl: './my-maps-list.component.html',
  styleUrls: ['./my-maps-list.component.scss'],
})
export class MyMapsListComponent implements OnInit {

  columns: ITdDataTableColumn[] = [
    { name: 'open', label: 'Open' },
    { name: 'name', label: 'Name', tooltip: 'Saved Map Name', sortable: true },
    { name: 'basemap', label: 'Basemap', sortable: true },
    { name: 'annotations', label: 'Annotations' },
    { name: 'projection', label: 'Projection' },
    { name: 'application', label: 'Application', sortable: true },
    { name: 'date', label: 'Date', sortable: true },
    { name: 'delete', label: 'Delete' },
  ];

  mapData: any[];

  constructor(private myMapsService: MyMapsService, private dialogRef: MdDialogRef<MyMapsListComponent>) { }

  ngOnInit() {
    this.myMapsService.getMaps().subscribe((mapData) => {
      this.mapData = mapData;
    });
  }

  openMyMap(id: number) {
    this.dialogRef.close();
  }

  deleteMyMap(id: number) {
    this.myMapsService.deleteMap(id);
  }

  sort(event: ITdDataTableSortChangeEvent) {
    this.mapData.sort((a, b) => {
      let var1 = event.order === TdDataTableSortingOrder.Ascending ? a[event.name] : b[event.name];
      let var2 = event.order === TdDataTableSortingOrder.Ascending ? b[event.name] : a[event.name];
      return var1.localeCompare(var2);
    });
  }
}
