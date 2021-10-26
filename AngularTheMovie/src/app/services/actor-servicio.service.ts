import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaActores} from '../interfaces/actor.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorServicioService {

  constructor(private http:HttpClient) { }

  getActores():Observable<ListaActores>{
    let url=environment.urlImage;
    let key=environment.apikey;
    return this.http.get<ListaActores>(`${url}/person/popular?api_key=${key}`)
  }
}
