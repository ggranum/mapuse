import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { MenuItem } from '../config/client-config';
import { ListComponent } from './components/common/list/list.component';

@Injectable()
export class SidebarService {
  private readonly _currentMenuItem = new ReplaySubject<MenuItem>();
  private _currentMenuItemValue: MenuItem = { title: 'Main', type: ListComponent };

  private readonly _initialMenuItem: MenuItem = this._currentMenuItemValue;

  constructor() {
    // Cache the last item pushed to the observable so we can easily
    // check what the current state is.
    this.currentMenuItem.subscribe(item => {
      this._currentMenuItemValue = item;
    });
  }

  get currentMenuItem(): ReplaySubject<MenuItem> {
    return this._currentMenuItem;
  }

  get currentMenuItemValue(): MenuItem {
    return this._currentMenuItemValue;
  }

  get initialMenuItem(): MenuItem {
    return this._initialMenuItem;
  }
}
