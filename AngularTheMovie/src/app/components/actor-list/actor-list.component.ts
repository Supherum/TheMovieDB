import { Component, Input, OnInit } from '@angular/core';
import { Actores } from 'src/app/interfaces/actor.interface';
import { ActorServicioService } from 'src/app/services/actor-servicio.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  listaActores:Actores[]=[];

  constructor(private actorService:ActorServicioService) { }

  ngOnInit(): void {
    this.actorService.getActores().subscribe(cosa=>{
      this.listaActores=cosa.results;
    })
  }

}
