// fotos.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class FotosComponent {
  
  popularSearches: string[] = ['perro', 'chicas', 'amor'];
  showSearchOptions: boolean = false;
  
  search(query: string): void {
    console.log('Buscando:', query);
  }
  
  toggleSearchOptions(show: boolean): void {
    this.showSearchOptions = show;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.search-container') && this.showSearchOptions) {
      this.showSearchOptions = false;
    }
  }
  
  onSearchContainerClick(event: Event): void {
    event.stopPropagation();
  }
    categorias = [
      {
        titulo: 'Personas y emociones',
        imagen: 'assets/fotos/personas.jpg'
      },
      {
        titulo: 'Estilo de vida y bienestar',
        imagen: 'assets/fotos/bienestar.jpg'
      },
      {
        titulo: 'Educación y formación',
        imagen: 'assets/fotos/educacion.jpg'
      },
      {
        titulo: 'Negocios y marketing',
        imagen: 'assets/fotos/negocios.jpg'
      },
      {
        titulo: 'Naturaleza',
        imagen: 'assets/fotos/naturaleza.jpg'
      },
      {
        titulo: 'Comidas y bebida',
        imagen: 'assets/fotos/comida.jpg'
      },
      {
        titulo: 'Deportes',
        imagen: 'assets/fotos/deportes.jpg'
      },
      {
        titulo: 'Industria y tecnología',
        imagen: 'assets/fotos/tecnologia.jpg'
      }
    ];

    series = [
      {
        titulo: 'DJ Nightlife',
        imagenPrincipal: 'assets/fotos/series1/main.jpg',
        numeroImagenes: 50,
        thumbnails: [
          'assets/fotos/series1/1.jpg',
          'assets/fotos/series1/2.jpg',
          'assets/fotos/series1/3.jpg'
        ]
      },
      {
        titulo: 'Mother and Child at Sunset',
        imagenPrincipal: 'assets/fotos/series2/main.jpg',
        numeroImagenes: 65,
        thumbnails: [
          'assets/fotos/series2/1.jpg',
          'assets/fotos/series2/2.jpg',
          'assets/fotos/series2/3.jpg',
        ]
      },
      {
        titulo: 'Friends Picnic',
        imagenPrincipal: 'assets/fotos/series3/main.jpg',
        numeroImagenes: 58,
        thumbnails: [
          'assets/fotos/series3/1.jpg',
          'assets/fotos/series3/2.jpg',
          'assets/fotos/series3/3.jpg',
        ]
      }
    ];
    
  }
  
