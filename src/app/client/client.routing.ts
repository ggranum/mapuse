import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'map/os',  loadChildren: './clients/os.module#OsModule', data: { collectionId: 'os' } },
      { path: 'map/geology',  loadChildren: './clients/geology.module#GeologyModule', data: { collectionId: 'geology' } },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class ClientRoutingModule {}
