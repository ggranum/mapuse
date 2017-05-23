import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'map/os',  loadChildren: './client/clients/os.module#OsModule', data: { collectionId: 'os' } },
      { path: 'map/os2',  loadChildren: './client/clients/os2.module#Os2Module', data: { collectionId: 'os2' } },
      { path: 'map/geology',  loadChildren: './client/clients/geology.module#GeologyModule', data: { collectionId: 'geology' } },
      { path: 'map/historic',  loadChildren: './client/clients/historic.module#HistoricModule', data: { collectionId: 'historic' } },
    ]),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
  ],
})
export class AppRoutingModule {}
