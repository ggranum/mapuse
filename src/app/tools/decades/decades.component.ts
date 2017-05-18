import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-decades',
  templateUrl: './decades.component.html',
  styleUrls: ['./decades.component.scss'],
})
export class DecadesComponent implements OnInit {
  panelVisible = false;

  constructor() { }

  togglePanel() {
    this.panelVisible = !this.panelVisible;
  }

  ngOnInit() { }
}
