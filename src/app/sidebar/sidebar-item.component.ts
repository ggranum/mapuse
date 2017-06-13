import { ComponentRef } from '@angular/core/core';
import { SidebarService } from './sidebar.service';
import { MenuItem } from '../config/map';
import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  QueryList,
  Type,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'dm-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {

  @Input()
  initialComponent: MenuItem;

  visitedComponents = new Map<Type<Component>, ComponentRef<Component>>();

  @ViewChild('placeholder', {read: ViewContainerRef})
  viewContainerRef: ViewContainerRef;

  @ViewChildren('placeholder', {read: ViewContainerRef})
  allViewContainerRefs: QueryList<ViewContainerRef> | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sidebarService: SidebarService) {
  }

  changeContent(item: MenuItem): void {
    // Start by hiding all current items.
    if (this.allViewContainerRefs) {
      this.allViewContainerRefs.forEach(v => v.detach());
    }

    // If we've previously visited an item, reinsert the old one into the view
    // container instead of creating new one. This lets us easily remember state
    // between viewing different items.
    let containerRef = this.visitedComponents.get(item.type);
    if (containerRef) {
      this.viewContainerRef.insert(containerRef.hostView);
      return;
    }

    // If we've not visited an item, dynamically create a new one.
    const factory = this.componentFactoryResolver.resolveComponentFactory(item.type);
    const componentRef = this.viewContainerRef.createComponent(factory);

    // Cache a reference to this component so we can re-insert it into the container
    // view rather than creating a whole new item.
    this.visitedComponents.set(item.type, componentRef);
  }

  back() {
    this.sidebarService.currentMenuItem.next(this.sidebarService.initialMenuItem);
  }

  isMainMenuVisible(): boolean {
    return this.sidebarService.currentMenuItemValue === this.initialComponent;
  }

  ngOnInit() {
    if (this.initialComponent) {
      this.changeContent(this.initialComponent);
    }

    this.sidebarService.currentMenuItem.subscribe(menuItem => {
      this.changeContent(menuItem);
    });
  }
}
