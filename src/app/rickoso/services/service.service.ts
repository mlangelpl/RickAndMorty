import { Injectable } from '@angular/core';

import results from 'src/app/rickoso/data/rickandmorty.json';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  personajes: any = results.results; 
  constructor() { }

 getPersonajeEspecie(termino: string){
    return this.personajes.filter((personaje: any) => {
      return personaje.species.includes(termino);
    }
    );
  }

  getPersonajeGenero(termino: string){
    return this.personajes.filter((personaje: any) => {
      return personaje.gender.includes(termino)
    });
  }

  getPersonajeStatus(termino: string){
    return this.personajes.filter((personaje: any)=>{
      return personaje.status.includes(termino)
    })
  }
  getPersonajeName(termino: string){
    return this.personajes.filter((personaje: any)=>{
      return personaje.name.includes(termino)
    })
  }
  
      
}

