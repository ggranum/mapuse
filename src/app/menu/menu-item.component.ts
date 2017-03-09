import { MenuItem } from '../config/map';
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  component: MenuItem;

  @ViewChild('placeholder', {read: ViewContainerRef})
  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  toggle(event: Event) {
    if (!event.srcElement) {
      return;
    }
    $(event.srcElement).parents('.panel').find('.panel-body').slideToggle();
  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.component.type);
    this.viewContainerRef.createComponent(factory);
  }
}
