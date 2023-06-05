import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public movies: any = [];

  constructor(private imdb: ImdbService){

  }


  ngOnInit(): void{
    this.getMovies();
  }

  getMovies(): void {
    this.imdb.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item);
        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
        });

         //The code bellow i use to change the poster to one with better qualities to avoid the use of 100 api request p/day
       /*this.movies.forEach((movie: any)=>{
          this.imdb.getPosters(movie.id).subscribe((data)=>{
            movie.image = data.posters[0].link;
            this.imdb.putPosters(movie.id, movie);
            return;
          })
        })*/
    });
  }
}
