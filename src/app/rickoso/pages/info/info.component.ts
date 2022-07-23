import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  personaje : any;
  @Input() personajes: any;

  constructor() {}

  ngOnInit(): void {
    this.personaje = JSON.parse(localStorage.getItem('personaje')!);

  }
  mostrarNav() {
    const navbar = document.querySelector('.navbar-nav1')!;
    navbar.classList.toggle('mostrar');
  }

}
