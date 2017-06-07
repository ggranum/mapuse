import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../sidebar.service';

import { ConfigService } from '../../../../config/config.service';
import { MenuItem } from '../../../../config/map';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  components: MenuItem[];

  constructor(private configService: ConfigService, private sidebarService: SidebarService) { }

  openMenu(item: MenuItem) {
    this.sidebarService.currentMenuItem.next(item);
  }

  ngOnInit() {
    this.configService.getClientConfig().subscribe(clientConfig => {
      this.components = clientConfig.components;
    });
  }
}
