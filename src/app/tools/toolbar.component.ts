import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'dm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  @Output()
  private menuEvent = new EventEmitter<void>();

  constructor() { }

  menuClick() {
    this.menuEvent.emit();
  }
}
