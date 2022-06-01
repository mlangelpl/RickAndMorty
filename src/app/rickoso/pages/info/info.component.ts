import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  personaje : any;
  @Input() personajes: any;

  constructor(private activatedRoute : ActivatedRoute,
              private service: ServiceService) { }

  ngOnInit(): void {


    console.log(this.activatedRoute.params)

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.service.getPersonajeName(id))
      )
   
      .subscribe(heroe => this.personaje = heroe);

      console.log(this.personaje);
  }


}
