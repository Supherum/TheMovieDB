import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-movies-popular-list-component',
  templateUrl: './movies-popular-list-component.component.html',
  styleUrls: ['./movies-popular-list-component.component.css']
})
export class MoviesPopularListComponentComponent implements OnInit {

  listaPeliculas:Pelicula[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
