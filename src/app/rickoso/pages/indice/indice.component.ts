import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {
  personajes = [];

  especies : string[] = [
    'Alien',
    'Animal',
    'Cronenberg',
    'Disease',
    'Human',
    'Humanoid',
    'Mytholog',
    'Parasite',
    'Poopybutthole',
    'Robot',
    'unknown',
    'Vampire',
  ]
  generos : string[] = [
    'Female',
    'Genderless',
    'Male',
    'unknown',
  ]
  status: string[]=[
    'Alive',
    'Dead',
    'unknown',
  ]
    
 

  constructor(public services: ServiceService) { }

  ngOnInit(): void {
  }

  seleccion(especie: string){
   this.personajes = this.services.getPersonajeEspecie(especie);
   return this.personajes;
  }
  seleccionG(genero: string){
    this.personajes = this.services.getPersonajeGenero(genero);
    return this.personajes;
  }

  seleccionS(statu: string){
    this.personajes = this.services.getPersonajeStatus(statu);
    return this.personajes;
  }
}
