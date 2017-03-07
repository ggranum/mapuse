import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientComponent }    from './client.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'map/os',  component: ClientComponent },
      { path: 'map/geology',  component: ClientComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class ClientRoutingModule { }
