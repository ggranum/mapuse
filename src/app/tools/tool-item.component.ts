import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Tool } from '../config/client-config';

@Component({
  selector: 'dm-tool-item',
  templateUrl: './tool-item.component.html',
  styleUrls: ['./tool-item.component.scss']
})
export class ToolItemComponent implements OnInit {

  @Input()
  tool: Tool;

  @ViewChild('placeholder', {read: ViewContainerRef})
  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.tool.type);
    this.viewContainerRef.createComponent(factory);
  }
}
