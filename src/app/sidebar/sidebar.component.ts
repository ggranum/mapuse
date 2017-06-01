import { SidebarService } from './sidebar.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../config/map';

@Component({
  selector: 'dm-sidebar-container',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  initialComponent: MenuItem;
  // get initialComponent() {
  //   return SidebarComponent._initialComponent;
  // }

  constructor(private sidebarService: SidebarService) {
    this.initialComponent = this.sidebarService.initialMenuItem;
  }

  ngOnInit() {
    // This ListComponent is in a different module so we need to initialise the initialComponent here
    // rather than in the definition above.
    // SidebarComponent._initialComponent = { title: 'Main', type: ListComponent };
  }
}
