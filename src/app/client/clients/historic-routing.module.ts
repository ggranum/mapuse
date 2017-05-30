import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HistoricComponent } from './historic.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: HistoricComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class HistoricRoutingModule { }
