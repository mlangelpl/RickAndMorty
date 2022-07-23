import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Result } from '../../interfaces/interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  @Input() personajes:Result[] = [];
  @Input() tipo: string = '';


  constructor(public serviceService: ServiceService,private router: Router  
              ) {}

  ngOnInit(): void {
   
  }
  navegar(termino: string, id:number) {
    
    this.tipo = id+'?' + this.tipo;
    this.serviceService.getPersonaje(this.tipo).subscribe((data) => {
      this.router.navigate(['./personaje/' + termino]);
      localStorage.setItem('personaje', JSON.stringify(data));
    });
    
  }

}
