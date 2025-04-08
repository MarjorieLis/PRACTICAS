import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EstadisticasComponent {
  constructor(private router: Router) {}
  
  irARegistro() {
    this.router.navigate(['/registro']);
  }
}