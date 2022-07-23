import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickosoRoutingModule } from './rickoso-routing.module';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { IndiceComponent } from './pages/indice/indice.component';
import { InfoComponent } from './pages/info/info.component';
import { ListaComponent } from './pages/lista/lista.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { LocationComponent } from './pages/location/location.component';


@NgModule({
  declarations: [

    PersonajesComponent,
     IndiceComponent,
     InfoComponent,
     ListaComponent,
     EpisodeComponent,
     LocationComponent
  ],

  imports: [
    CommonModule,
    RickosoRoutingModule
  ]
})
export class RickosoModule { }
