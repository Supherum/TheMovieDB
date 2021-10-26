import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/pelicula.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-item-component',
  templateUrl: './movies-item-component.component.html',
  styleUrls: ['./movies-item-component.component.css']
})
export class MoviesItemComponentComponent implements OnInit {

  @Input() peliInput!:Result;

  constructor() { }

  ngOnInit(): void {
  }

  verImagen(peli:Result):string{
    let url=peli.poster_path;
    return `${environment.urlImage}${url}`;
  }

}
