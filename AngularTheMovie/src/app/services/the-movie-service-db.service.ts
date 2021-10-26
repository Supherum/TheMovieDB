import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
