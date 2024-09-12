import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  currencies: any = {};

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyData().subscribe((res: any) => {
      this.currencies = {
        UAH: res.conversion_rates.UAH,
        EUR: res.conversion_rates.EUR,
        USD: res.conversion_rates.USD,
      };
    });
  }
}
