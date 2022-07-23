import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Episode, Result } from '../../interfaces/interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  public name:string= '';
  public AirDate: string='';
  public episodios: Episode[] = [];
  public personajes: Result[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getEpisode('1').subscribe((data)=>{
      this.episodios = data.results;
      this.name = this.episodios[0].name;
      this.AirDate = this.episodios[0].air_date;
      this.buscar(0);
      forkJoin(
        this.service.getEpisode('2'),
        this.service.getEpisode('3')
      ).subscribe((data)=>{
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].results.length; j++) {
            this.episodios.push(data[i].results[j]);
          }
        }
      })
    })
  }
  mostrarNav(){
    const navbar = document.querySelector('.navbar-nav1')!;
    navbar.classList.toggle('mostrar');
  }

  buscar(index:number){
    this.name = this.episodios[index].name;
    this.AirDate = this.episodios[index].air_date;
    let parabuscar = '';
    if (this.episodios[index].characters.length > 0) {
      for (let i = 0; i < this.episodios[index].characters.length; i++) {
        let termino = this.episodios[index].characters[i].substring(42);
        parabuscar = parabuscar + termino + ',';
      }
      this.service.getPersonaje(parabuscar).subscribe((data) => {
        this.personajes = data;
      });
    } else {
      this.personajes = [];
    }
  }
}
