// src/app/app.component.ts
import { Component }        from '@angular/core';
import { RouterOutlet }     from '@angular/router';
import { RouterLink } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search';
import { MessagesComponent }   from './messages/messages.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MessagesComponent, 
    RouterLink
  ],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <app-messages></app-messages>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private messageService: MessageService) {
    // テスト用メッセージを追加
    this.messageService.add('アプリケーションが開始されました');
  }
}
