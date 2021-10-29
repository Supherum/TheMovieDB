import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogMovieDetailData, PeliculaDetailResponse } from 'src/app/interfaces/dialog.movie.detail.data';
import { TheMovieServiceDBService } from 'src/app/services/the-movie-service-db.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-movie-detail.component.html',
  styleUrls: ['./dialog-movie-detail.component.css']
})
export class DialogMovieDetailComponent implements OnInit {
  pelicula!: PeliculaDetailResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieDetailData,
    private service: TheMovieServiceDBService
  ) { }

  ngOnInit(): void {
    this.service.getDetailMovies(this.data.movieId).subscribe(resultado => {
      this.pelicula = resultado;
    })
  }
  verImagen(link:string):string{
    let url=link;
    return `${environment.urlImage}${url}`;
  }


}
