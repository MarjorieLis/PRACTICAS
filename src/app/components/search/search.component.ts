import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu!: ElementRef;
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  
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

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Escuchar los clics fuera del componente
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Verifica si el clic fue fuera del input de búsqueda o del dropdown
      if (
        this.dropdownMenu &&
        !this.dropdownMenu.nativeElement.contains(target) &&
        !this.searchInput.nativeElement.contains(target)
      ) {
        this.closeDropdown();
      }
    });
  }

  ngOnDestroy() {
    // Limpiar el listener cuando el componente se destruya
    this.renderer.destroy();
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
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
