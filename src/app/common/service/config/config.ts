import { InjectionToken } from '@angular/core';
const API = window['webApi'];
const INDEX_URL = window['indexUrl'];
export const CONFIG_API = new InjectionToken<string>('api');
export const CONFIG = [
  {
    provide: CONFIG_API,
    indexUrl: INDEX_URL,
    useValue: API
  },
];

