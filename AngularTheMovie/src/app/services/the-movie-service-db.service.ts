import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeliculaDetailResponse } from '../interfaces/dialog.movie.detail.data';
import { PeliculaResponse } from '../interfaces/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class TheMovieServiceDBService {

  constructor(private http:HttpClient) { }

  getPopularMovies():Observable<PeliculaResponse>{
    let url=environment.urlBase;
    let key=environment.apikey;
    return this.http.get<PeliculaResponse>(`${url}/movie/popular?api_key=${key}`);
  }

  getDetailMovies(id:number):Observable<PeliculaDetailResponse>{
    let url=environment.urlBase;
    let key=environment.apikey;
    return this.http.get<PeliculaDetailResponse>(`${url}/movie/${id}?api_key=${key}`);
  }
}
