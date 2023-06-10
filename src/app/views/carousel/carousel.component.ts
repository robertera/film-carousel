import { Component, Input, OnInit, HostListener} from '@angular/core';
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
  public sortedMovies: any = [];
  public isSortedDescending = true;
  public isSortedByYearDescending = true;
  public isSortedByYearOldToNew = true;
  public isSortedByYear = false;
  public isSortedByRating = false;
  currentMovieIndex = 0;
  visibleMovies: any = [];

  constructor(private imdb: ImdbService){
  }

  ngOnInit(): void{
    this.getMovies();
  }

  //This will make appear just 20 movies, i used it on development to make the list more easy to see.
  /*
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
  }*/

  getMovies(): void {
      this.imdb.getData().subscribe((data) => {
      this.movies = data;
      this.sortedMovies = [...this.movies];
      this.updateVisibleMovies();
    });
  }

    //Order movies by rate
    sortMoviesByRatingDescending(): void {
      this.sortedMovies.sort((a: any, b: any) => b.imDbRating - a.imDbRating);
    }

    onSortByRating(): void {
      this.isSortedByRating = true;
      this.isSortedByYear = false;

      this.sortedMovies.sort((a: any, b: any) => {
        if (this.isSortedDescending) {
          return a.imDbRating - b.imDbRating;
        } else {
          return b.imDbRating - a.imDbRating;
        }
      });

      this.isSortedDescending = !this.isSortedDescending;

      this.currentMovieIndex = 0;
      this.updateVisibleMovies();
    }

    //Order movies by year
    onSortByYear(): void {
      this.isSortedByYear = true;
      this.isSortedByRating = false;

      this.sortedMovies.sort((a: any, b: any) => {
        const sortOrder = this.isSortedByYearDescending ? -1 : 1;
        return sortOrder * (a.year - b.year);
      });

      this.isSortedByYearDescending = !this.isSortedByYearDescending;
      this.isSortedByYearOldToNew = !this.isSortedByYearOldToNew;
      this.currentMovieIndex = 0;
      this.updateVisibleMovies();
    }

    updateVisibleMovies(): void {
      this.visibleMovies = [];
      const endIndex = this.currentMovieIndex + 3;
      for (let i = this.currentMovieIndex; i < endIndex; i++) {
        const movieIndex = i % this.sortedMovies.length;
        this.visibleMovies.push(this.sortedMovies[movieIndex]);
      }
    }

  //Reset the list
    onHome(): void {
      this.isSortedByYear = false;
      this.isSortedByRating = false;
      this.currentMovieIndex = 0;
      this.isSortedDescending = true;
      this.isSortedByYearDescending = true;
      this.sortedMovies = [...this.movies];
      this.updateVisibleMovies();
  }

  //Buttons to next o previous on the list
    onPreviousClick() {
      this.currentMovieIndex =
        (this.currentMovieIndex - 1 + this.movies.length) % this.movies.length;
      this.updateVisibleMovies();
    }

    onNextClick() {
      this.currentMovieIndex = (this.currentMovieIndex + 1) % this.movies.length;
      this.updateVisibleMovies();
    }

    getMaxVisibleMovies(): number {
      const screenWidth = window.innerWidth;
      return screenWidth < 900 ? (screenWidth < 500 ? 1 : 2) : 3;
    }

    @HostListener('window:resize')
    onWindowResize() {
      this.updateVisibleMovies();
    }
}
