import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from '../config/config.service';
import { Tool } from '../config/map';

@Component({
  selector: 'dm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Output()
  private menuEvent = new EventEmitter<void>();

  tools: Tool[];

  constructor(private route: ActivatedRoute, private configService: ConfigService) { }

  menuClick() {
    this.menuEvent.emit();
  }

  ngOnInit() {
    let collectionId = this.route.snapshot.data.collectionId;
    this.configService.getMapConfig(collectionId).subscribe(mapConfig => {
      this.tools = mapConfig.tools;
    });
  }
}
