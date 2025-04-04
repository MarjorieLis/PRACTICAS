// iconos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IconCategory {
  id: string;
  title: string;
  description: string;
  formats: string[];
  image: string;
}

@Component({
  selector: 'app-iconos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.css']
})
export class IconosComponent implements OnInit {
  searchTerm: string = '';
  popularSearches: string[] = ['whatsapp', 'instagram', 'calendario'];
  
  iconCategories: IconCategory[] = [
    {
      id: 'static',
      title: 'Iconos estáticos',
      description: 'Los iconos indicados para diseños claros y sencillos.',
      formats: ['SVG', 'PNG'],
      image: 'assets/images/static-icons.png'
    },
    {
      id: 'interface',
      title: 'Iconos de interfaz',
      description: 'Haz que tu web y tus apps destaquen gracias a unos componentes únicos.',
      formats: ['ANDROID', 'IOS', 'CSS', 'SVG', 'PNG'],
      image: 'assets/images/interface-icons.png'
    },
    {
      id: 'animated',
      title: 'Iconos animados',
      description: 'Tu trabajo cobra más vida con iconos dinámicos.',
      formats: ['JSON', 'MP4', 'GIF', 'SVG', 'PNG'],
      image: 'assets/images/animated-icons.png'
    },
    {
      id: 'stickers',
      title: 'Stickers',
      description: 'Dale un toque divertido a tus diseños o a tus páginas web.',
      formats: ['SVG', 'PNG'],
      image: 'assets/images/stickers.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  searchIcons(): void {
    // Aquí iría la lógica para buscar iconos
    console.log('Buscando:', this.searchTerm);
  }
}