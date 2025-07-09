import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log('Message added:', message); // デバッグ用
    console.log('Current messages:', this.messages); // デバッグ用
  }

  clear() {
    this.messages = [];
    console.log('Messages cleared'); // デバッグ用
  }
}