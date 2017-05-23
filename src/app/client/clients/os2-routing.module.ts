import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { Os2Component }    from './os2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: Os2Component },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class Os2RoutingModule { }
