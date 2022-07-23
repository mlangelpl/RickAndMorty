import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RickAndMorty } from '../../inicio/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getlocacion(index:string){
    const baseUrl = `${this.url}/location?page=${index}`;
    return this.http.get<any>(baseUrl);
  }
  
  getalgo(termino: string, tipo: string){
    const baseUrl = `${this.url}/character?page=${termino}&${tipo}`;
    return this.http.get<RickAndMorty>(baseUrl);
  }

  getPersonaje(id: string){
    const baseUrl = `${this.url}/character/${id}`;
    return this.http.get<any>(baseUrl);
  }

  getEpisode(index:string){
    const baseUrl = `${this.url}/episode?page=${index}`;
    return this.http.get<any>(baseUrl);
  }
      
}
