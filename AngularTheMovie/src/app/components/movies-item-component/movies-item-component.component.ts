import { Component, Input, OnInit } from '@angular/core';
import { DialogMovieDetailComponent } from 'src/app/dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { Result } from 'src/app/interfaces/pelicula.interface';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies-item-component',
  templateUrl: './movies-item-component.component.html',
  styleUrls: ['./movies-item-component.component.css']
})
export class MoviesItemComponentComponent implements OnInit {

  @Input() peliInput!:Result;

  constructor(private dialogo:MatDialog) { }

  ngOnInit(): void {
  }

  verImagen(peli:Result):string{
    let url=peli.poster_path;
    return `${environment.urlImage}${url}`;
  }

  abrirDetallePeli(){
     this.dialogo.open(DialogMovieDetailComponent,{
      height:'600px',
      width:'500px',
      data:{movieId:this.peliInput.id}
     })
  }

}
