import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { imdbFilmModel } from './imdb-film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private apiKey: string = 'k_5pk0wop9';
  baseUrl: string = 'http://localhost:3000/items';

  constructor(private httpsClient: HttpClient) { }

  getData(): Observable<imdbFilmModel>{
    return this.httpsClient.get<imdbFilmModel>(this.baseUrl);
  }
}
