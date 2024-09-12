import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {}
  http = inject(HttpClient);

  getCurrencyData() {
    const url =
      'https://v6.exchangerate-api.com/v6/9df5c047ee411e092d4f5cc9/latest/USD';
    return this.http.get(url);
  }
}
