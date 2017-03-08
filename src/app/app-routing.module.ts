import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'map/os',  loadChildren: './client/clients/os.module#OsModule', data: { collectionId: 'os' } },
      { path: 'map/geology',  loadChildren: './client/clients/geology.module#GeologyModule', data: { collectionId: 'geology' } },
    ]),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
  ],
})
export class AppRoutingModule {}
