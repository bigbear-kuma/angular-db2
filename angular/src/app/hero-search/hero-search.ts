import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable, Subject, of} from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-search.html',
  styleUrls: [ './hero-search.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log('Search called with term:', term); // デバッグ用
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      //switchMap((term: string) => this.heroService.searchHeroes(term)),
      /*
      switchMap((term: string) => {
        console.log('API call for term:', term); // デバッグ用
        term.trim() ? this.heroService.searchHeroes(term) : of([])
      }),*/
      switchMap((term: string) => {
        console.log('API call for term:', term); // デバッグ用
        return term.trim() ? this.heroService.searchHeroes(term) : of([]);
      }),


    );
  }


}