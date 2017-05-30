import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config/config.service';
import { MenuItem } from '../config/map';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  // private services: any[];
  // tools: Tool[];
  collection: string;
  // active = 'active';

  components: MenuItem[];

  constructor(private configService: ConfigService) { }

  // constructor(private configService: ConfigService,
  //             private polygonService: PolygonService,
  //             private drawLineService: DrawLineService) { }

  // handle(tool: string) {
  //   // Get the applicable service.
  //   let service = this.services.find(item => item.name === tool).service;
  //   // Execute method.
  //   service.handle(tool);
  // }

  ngOnInit() {
    this.configService.getMapConfig().subscribe(mapConfig => {
      this.components = mapConfig.components;
    });

    // this.services = [{
    //   name: 'polygon',
    //   service: this.polygonService,
    // }, {
    //   name: 'draw-line',
    //   service: this.drawLineService,
    // }];

    // this.configService.getMapConfig(this.collection).subscribe(tools => {
    //   const config = tools;
    //   this.tools = config.tools;
    // });
    // console.log('TOOLS: ', this.tools);
  }
}
