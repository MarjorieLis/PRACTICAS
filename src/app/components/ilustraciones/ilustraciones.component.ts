import { Component } from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-ilustraciones',
  standalone: true,
  templateUrl: './ilustraciones.component.html',
  styleUrls: ['./ilustraciones.component.css'],
  imports: [CommonModule]
})
export class IlustracionesComponent {
  imagenes: string[] = [
    'assets/ilustraciones/1.jpg',
    'assets/ilustraciones/2.jpg',
    'assets/ilustraciones/3.jpg',
    'assets/ilustraciones/4.jpg',
    'assets/ilustraciones/5.jpg',
    'assets/ilustraciones/6.jpg'
  ];

  categorias = [
    { nombre: 'Ilustraciones De Flores', imagen: 'assets/categorias/flores.png' },
    { nombre: 'Ilustraciones De Gato', imagen: 'assets/categorias/gato.png' },
    { nombre: 'Ilustraciones De Dragon', imagen: 'assets/categorias/dragon.png' },
    { nombre: 'Ilustraciones De Animales', imagen: 'assets/categorias/animales.png' },
    { nombre: 'Ilustraciones De Perro', imagen: 'assets/categorias/perro.png' },
    { nombre: 'Ilustraciones De Mar', imagen: 'assets/categorias/mar.png' },
    { nombre: 'Ilustraciones De Árbol', imagen: 'assets/categorias/arbol.png' },
    { nombre: 'Ilustraciones De Bosque', imagen: 'assets/categorias/bosque.png' },
    { nombre: 'Ilustraciones De Luna', imagen: 'assets/categorias/luna.png' },
    { nombre: 'Ilustraciones De Plantas', imagen: 'assets/categorias/plantas.png' },
    { nombre: 'Ilustraciones De Sol', imagen: 'assets/categorias/sol.png' },
    { nombre: 'Ilustración Del Pachamama', imagen: 'assets/categorias/pachamama.png' },
  ];
}

