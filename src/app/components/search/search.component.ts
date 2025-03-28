import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  isDropdownVisible = false;
  searchQuery = '';

  searchOptions = [
    { icon: '🖼️', title: 'Imagen' },
    { icon: '🎥', title: 'Video' },
    { icon: '🎨', title: 'Diseño' },
    { icon: '📝', title: 'Texto' },
    { icon: '🔊', title: 'Audio' },
    { icon: '📊', title: 'Presentación' }
  ];

  toggleDropdown() {
    this.isDropdownVisible = true;
  }

  closeDropdown() {
    // Pequeño retraso para manejar el clic en elementos del dropdown
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 200);
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      // Lógica de búsqueda
      console.log('Buscando:', this.searchQuery);
    }
  }

  onCreateResource(option: any) {
    // Lógica para crear un recurso específico
    console.log('Crear recurso:', option.title);
  }
}
