import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  principal = [
    'Rick Sanchez',
    'Morty Smith',
    'Summer Smith',
    'Beth Smith',
    'Jerry Smith',
  ]
  rick = 'Rick Sanchez';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ir(termino: string){
    this.router.navigate([`./personaje/${termino}`]);
  }

}
