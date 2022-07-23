import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../rickoso/services/service.service';
import { Result } from '../../rickoso/interfaces/interface';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public personajes:Result[] = [];

  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getalgo('character','').subscribe((data) => {
      this.personajes = data.results;
    })
  }
  ir(name:string,termino: string){
    let link = name + termino;
    this.serviceService.getPersonaje(termino).subscribe((data) => {
      this.router.navigate(['./personaje/' + link]);
      localStorage.setItem('personaje', JSON.stringify(data));
    });
  }

}
