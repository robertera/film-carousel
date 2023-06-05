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
  baseUrlPoster: string = `https://imdb-api.com/en/API/Posters/${this.apiKey}/`;

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<imdbFilmModel[]>{
    return this.httpClient.get<imdbFilmModel[]>(this.baseUrl);
  }

  getPosters(id: string): Observable<any>{
    return this.httpClient.get<any>(this.baseUrlPoster + id);
  }

  putPosters(id: string, body: any){
    return this.httpClient.put(`${this.baseUrl}/${id}`, body).subscribe((data)=>{
      return data;
    })
  }
}
