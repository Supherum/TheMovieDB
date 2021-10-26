import { Component, Input, OnInit } from '@angular/core';
import { Actores } from 'src/app/interfaces/actor.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input() actorInput!:Actores;
  constructor() { }

  ngOnInit(): void {
  }

  verImagenActor(act:Actores){
    let url=act.profile_path;
    return `${environment.urlImage}${url}`;
  }

}
