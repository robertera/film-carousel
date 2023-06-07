import { Component, Input, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import {carouselAnimation, slideIn, slideOut} from './carousel.animation';
import {trigger, transition, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations:[
    trigger('slideAnimation', [
      transition('void => slide', [
        transition(':enter', [
          useAnimation(slideIn, { params: { time: '1s' } })
        ]),
        transition(':leave', [
          useAnimation(slideOut, { params: { time: '1s' } })
        ])
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() animationType = carouselAnimation.Slide;
  public movies: any = [];
  currentMovieIndex = 0;
  visibleMovies: any = [];

  constructor(private imdb: ImdbService){

  }


  ngOnInit(): void{
    this.getMovies();
  }

  getMovies(): void {
    this.imdb.getData().subscribe((data) => {
      this.movies = data.slice(0, 20); // Limited to 20 films
      this.updateVisibleMovies();
    });
  }

  updateVisibleMovies(): void {
    this.visibleMovies = [];
    const endIndex = this.currentMovieIndex + 3;
    for (let i = this.currentMovieIndex; i < endIndex; i++) {
      const movieIndex = i % this.movies.length;
      this.visibleMovies.push(this.movies[movieIndex]);
    }
  }

  //This will make all the local database apears, i commented just for development limited on 20 films
  /*getMovies(): void {
    this.imdb.getData().subscribe((data) => {
      this.movies = data;
      this.updateVisibleMovies();
    });
  }

    updateVisibleMovies(): void {
    this.visibleMovies = [];
    const endIndex = this.currentMovieIndex + 3;
    for (let i = this.currentMovieIndex; i < endIndex; i++) {
      const movieIndex = i % this.movies.length;
      this.visibleMovies.push(this.movies[movieIndex]);
    }
  }*/

  onPreviousClick() {
    this.currentMovieIndex =
      (this.currentMovieIndex - 1 + this.movies.length) % this.movies.length;
    this.updateVisibleMovies();
  }

  onNextClick() {
    this.currentMovieIndex = (this.currentMovieIndex + 1) % this.movies.length;
    this.updateVisibleMovies();
  }
}
