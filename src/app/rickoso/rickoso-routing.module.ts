import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from './pages/indice/indice.component';
import { InfoComponent } from './pages/info/info.component';
import { ListaComponent } from './pages/lista/lista.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  {
    path:'',
    component: ListaComponent,
    children:[
      {
        path:'listado',
        component: IndiceComponent,
      },
      {
        path: 'episode',
        component: EpisodeComponent
      },
      {
        path: 'location',
        component: LocationComponent
      },
     {
        path: ':id',
        component: InfoComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickosoRoutingModule { }
