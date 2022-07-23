import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Locacion, Result } from '../../interfaces/interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  public locaciones: Locacion[] = [];
  public name: string = '';
  public dimension: string = '';
  public type: string = '';
  public personajes: Result[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getlocacion('1').subscribe((data) => {
      this.locaciones = data.results;
      this.name = this.locaciones[0].name;
      this.dimension = this.locaciones[0].dimension;
      this.type = this.locaciones[0].type;
      this.buscar(0);
      forkJoin(
        this.service.getlocacion('2'),
        this.service.getlocacion('3'),
        this.service.getlocacion('4'),
        this.service.getlocacion('5'),
        this.service.getlocacion('6'),
        this.service.getlocacion('7')
      ).subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].results.length; j++) {
            this.locaciones.push(data[i].results[j]);
          }
        }
      });
    });
  }
  mostrarNav() {
    const navbar = document.querySelector('.navbar-nav1')!;
    navbar.classList.toggle('mostrar');
  }

  buscar(index: number) {
    this.name = this.locaciones[index].name;
    this.dimension = this.locaciones[index].dimension;
    this.type = this.locaciones[index].type;

    let parabuscar = '';
    if (this.locaciones[index].residents.length > 0) {
      for (let i = 0; i < this.locaciones[index].residents.length; i++) {
        let termino = this.locaciones[index].residents[i].substring(42);
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
