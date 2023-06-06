import { Component, Input, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import {carouselAnimation, fadeIn, fadeOut} from './carousel.animation';
import {trigger, transition, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations:[
    trigger('slideAnimation', [
      transition('void => fade', [
        useAnimation(fadeIn, {params: {time: '1s'}})
      ]),
      transition('fade => void',[
        useAnimation(fadeOut, {params: {time: '1s'}})
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() animationType = carouselAnimation.Fade;
  public movies: any = [];
  currentMovie = 0;

  constructor(private imdb: ImdbService){

  }


  ngOnInit(): void{
    this.getMovies();
  }

  getMovies(): void {
    this.imdb.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item);
        while (this.movies.length > 20) {
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

  onPreviousClick(){
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;
  }

  onNextClick(){
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0 : next;
  }
}
