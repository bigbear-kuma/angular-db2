// src/app/app.config.ts
import 'zone.js';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular 必須モジュール
    importProvidersFrom(
      BrowserModule,
      FormsModule,
    ),
    // HTTP クライアント（fetch API を有効化）
    provideHttpClient(withFetch()),
    // ルーティング
    provideRouter(routes, withComponentInputBinding()),
  ]
};
