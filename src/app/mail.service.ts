import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  messages: Array<{ id: number, text: string }> = [
    { id: 0, text: '天之骄子，加入修仙之路群' },
    { id: 1, text: 'Shadows，加入修仙之路群' },
    { id: 2, text: 'Keriy，加入修仙之路群' }
  ];
  update(id, text) {
    this.messages = this.messages.map(msg => {
      return msg.id === id ? { id, text } : msg;
    });
    console.warn(this.messages);
  }
  constructor() { }
}