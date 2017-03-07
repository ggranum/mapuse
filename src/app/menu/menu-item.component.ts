import { AnnotationsComponent } from '../annotations/annotations.component';
import { MenuItem } from '../config/map';
import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { OverviewMapComponent } from "./components/overview-map/overview-map.component";
import { JidiPreviewComponent } from "./components/jidi-preview/jidi-preview.component";

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

  readonly componentLookup: Map<string,Type<Component>> = new Map<string,Type<Component>>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.componentLookup.set('FileUploadComponent', FileUploadComponent);
    this.componentLookup.set('OverviewMapComponent', OverviewMapComponent);
    this.componentLookup.set('JidiPreviewComponent', JidiPreviewComponent);
    this.componentLookup.set('AnnotationsComponent', AnnotationsComponent);
  }

  toggle(event: Event) {
    $(event.srcElement).parents('.panel').find('.panel-body').slideToggle();
  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.componentLookup.get(this.component.type));
    this.viewContainerRef.createComponent(factory);
  }
}
