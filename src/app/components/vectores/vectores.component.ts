import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-vectores',
  templateUrl: './vectores.component.html',
  styleUrls: ['./vectores.component.css'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class VectoresComponent {}
