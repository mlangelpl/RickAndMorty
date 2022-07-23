import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Result } from '../../interfaces/interface';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css'],
})
export class IndiceComponent implements OnInit {
  personajes: Result[] = [];

  especies: string[] = [
    'Alien',
    'Animal',
    'Cronenberg',
    'Disease',
    'Human',
    'Humanoid',
    'Mytholog',
    'Poopybutthole',
    'Robot',
    'unknown',
  ];
  generos: string[] = ['Female', 'Genderless', 'Male', 'unknown'];
  status: string[] = ['Alive', 'Dead', 'unknown'];

  public page: number = 1;
  public cantidadPag: number = 1;
  public numeros: number[] = [];
  public jota: number = 1;
  public tipo: string = '';


  constructor(public services: ServiceService) {}

  ngOnInit(): void {

    document.querySelector('.prev')!.classList.add('none');
    document.querySelector('.PM-1')!.classList.add('active');

    this.services.getalgo(this.page.toString(), this.tipo).subscribe((data) => {
      this.personajes = data.results;
      this.cantidadPag = data.info.pages;
      if (this.cantidadPag > 1) {
        this.cantidadPaginacion(this.cantidadPag);
      }
      return this.personajes;
    });
  }

  limpiarFiltro(){
    document.location.reload();
  }

  buscar(termino: string) {
    if (termino.trim().length === 0) {
      return;
    }
    this.tipo = this.tipo + 'name=' + termino;
    this.page = 1;
    this.numeros = [];
    this.jota = 1;
    this.services.getalgo(this.page.toString(), this.tipo).subscribe({
      next: (data) => {
        this.personajes = data.results;
        this.cantidadPag = data.info.pages;
        this.cantidadPaginacion(this.cantidadPag);
        document.querySelector('.prev')!.classList.add('none');
        if (document.querySelector('.next')) {
          document.querySelector('.next')!.classList.remove('none');
        }
        for (let i = 1; i <= 6; i++) {
          if (document.querySelector(`.PM-${i}`)) {
            document.querySelector(`.PM-${i}`)!.classList.remove('active');
          }
        }
        document.querySelector(`.PM-1`)!.classList.add('active');
        return this.personajes, this.cantidadPag, this.tipo;
      },
      error: (err) => {
        this.personajes = [];
        return this.personajes;
      },
    });
  }

  cantidadPaginacion(page: number) {
    for (let i = 2; i < page; i++) {
      if (i < 6) {
        this.numeros.push(i);
      } else {
        return;
      }
    }
  }

  filtro(tipo: string) {
   
    this.tipo = tipo;
    this.page = 1;
    this.numeros = [];
    this.jota = 1;

    this.services.getalgo(this.page.toString(), this.tipo).subscribe((data) => {
      this.personajes = data.results;
      this.cantidadPag = data.info.pages;
      this.cantidadPaginacion(this.cantidadPag);
      document.querySelector('.prev')!.classList.add('none');
      if (document.querySelector('.next')) {
        document.querySelector('.next')!.classList.remove('none');
      }
      for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`.PM-${i}`)) {
          document.querySelector(`.PM-${i}`)!.classList.remove('active');
        }
      }
      document.querySelector(`.PM-1`)!.classList.add('active');
      return this.personajes, this.cantidadPag, this.tipo;
    });
  }

  allPersonajes(page: string) {
    this.services.getalgo(page, this.tipo).subscribe((data) => {
      this.personajes = data.results;
      this.cantidadPag = data.info.pages;

      return this.personajes, this.cantidadPag;
    });
  }

  element(page: number, index: number) {
    if (this.cantidadPag == 1) {
      return;
    }
    this.jota = index;
    this.page = page;

    if (this.page > 1) {
      document.querySelector('.prev')!.classList.remove('none');
    } else if (this.page == 1) {
      document.querySelector('.prev')!.classList.add('none');
    }
    if (this.page < this.cantidadPag) {
      document.querySelector('.next')!.classList.remove('none');
    } else if (this.page == this.cantidadPag) {
      document.querySelector('.next')!.classList.add('none');
    }

    for (let i = 1; i <= this.numeros.length + 2; i++) {
      if (document.querySelector(`.PM-${i}`)) {
        document.querySelector(`.PM-${i}`)!.classList.remove('active');
      }
    }

    if (
      page == this.numeros[3] &&
      this.numeros[3] < this.cantidadPag - 1 &&
      this.cantidadPag > 6
    ) {
      for (let i = 0; i < 4; i++) {
        this.numeros[i] = this.numeros[i] + 1;
      }
      this.jota = this.jota - 1;
      document.querySelector(`.PM-${index}`)!.classList.add('active');
    } else if (
      page == this.numeros[0] &&
      this.numeros[0] > 2 &&
      this.cantidadPag > 6
    ) {
      for (let i = 0; i < 4; i++) {
        this.numeros[i] = this.numeros[i] - 1;
      }
      this.jota = this.jota + 1;
      document.querySelector(`.PM-${index}`)!.classList.add('active');
    } else if (page == 1) {
      if (this.cantidadPag > 6) {
        for (let i = 0; i < 4; i++) {
          this.numeros[i] = i + 2;
        }
      }
      document.querySelector('.prev')!.classList.add('none');
      document.querySelector(`.PM-1`)!.classList.add('active');
    } else if (page == this.cantidadPag) {
      if (this.cantidadPag > 6) {
        for (let i = 0; i < 4; i++) {
          this.numeros[i] = this.cantidadPag - 4 + i;
        }
      }
      document.querySelector('.next')!.classList.add('none');
      document.querySelector(`.PM-${index}`)!.classList.add('active');
    } else {
      document.querySelector(`.PM-${index}`)!.classList.add('active');
    }

    this.allPersonajes(this.page.toString());
  }

  mostrarNav() {
    const navbar = document.querySelector('.navbar-nav1')!;
    navbar.classList.toggle('mostrar');
  }
}
