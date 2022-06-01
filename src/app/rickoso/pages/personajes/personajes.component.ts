import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  @Input() personajes = [];
  varca: string = 'casa';

  constructor(public services: ServiceService  
              ) {}

  ngOnInit(): void {
    this.personajes = this.services.personajes;

  }

}
