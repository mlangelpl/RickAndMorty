import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { IndiceComponent } from './pages/indice/indice.component';
import { InfoComponent } from './pages/info/info.component';
import { ListaComponent } from './pages/lista/lista.component';

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
