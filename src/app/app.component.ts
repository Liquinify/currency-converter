import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './components/convert/convert.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConvertComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
