import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-movies-item-component',
  templateUrl: './movies-item-component.component.html',
  styleUrls: ['./movies-item-component.component.css']
})
export class MoviesItemComponentComponent implements OnInit {

  @Input() peliInput:Pelicula | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
