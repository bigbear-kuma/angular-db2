import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'; // tapを追加
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { Hero } from './hero';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = `${environment.apiUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero, httpOptions);
  }

  deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${this.heroesUrl}/${id}`, httpOptions);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      this.messageService.add('HeroService: 検索文字列が空です'); // 空の場合のメッセージ追加
      return of([]);
    }
    this.messageService.add(`HeroService: "${term}" で検索中...`); // テスト用メッセージ

    return this.http.get<Hero[]>(`${this.heroesUrl}?name=${term}`).pipe(
      tap(heroes => this.messageService.add(`HeroService: ${heroes.length}件のヒーローが見つかりました`))
    );
  }
}