import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { FormsModule } from '@angular/forms';
import { Currencies } from '../../types/Currencies';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css',
})
export class ConvertComponent implements OnInit {
  currencies: Currencies = {};
  firstCurrency: string = 'USD';
  secondCurrency: string = 'UAH';
  firstAmount: number = 0;
  secondAmount: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyData().subscribe((res: any) => {
      this.currencies = {
        UAH: res.conversion_rates.UAH,
        EUR: res.conversion_rates.EUR,
        USD: res.conversion_rates.USD,
      };
      console.log(this.currencies);
    });
    this.updateSecondCurrency();
  }

  updateSecondCurrency(): void {
    const rate =
      this.currencies[this.secondCurrency] /
      this.currencies[this.firstCurrency];
    this.secondAmount = this.firstAmount * rate;
  }

  updateFirstCurrency(): void {
    const rate =
      this.currencies[this.firstCurrency] /
      this.currencies[this.secondCurrency];
    this.firstAmount = this.secondAmount * rate;
  }
}
