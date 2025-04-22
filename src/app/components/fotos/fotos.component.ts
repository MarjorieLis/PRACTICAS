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
  }
  
