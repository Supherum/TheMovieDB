import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/pelicula.interface';
import { TheMovieServiceDBService } from 'src/app/services/the-movie-service-db.service';

@Component({
  selector: 'app-movies-popular-list-component',
  templateUrl: './movies-popular-list-component.component.html',
  styleUrls: ['./movies-popular-list-component.component.css']
})
export class MoviesPopularListComponentComponent implements OnInit {

  listaPeliculas:Result[] | undefined=[];
  

  constructor(private movieService:TheMovieServiceDBService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(resultadoPelicula=> {
      this.listaPeliculas=resultadoPelicula.results;
    });
  }

}
