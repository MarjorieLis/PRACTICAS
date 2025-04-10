import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
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
  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;

  isDropdownVisible = false;
  searchQuery = '';

  private globalClickListener: () => void;

  searchOptions = [
    { icon: '🖼️', title: 'Imagen' },
    { icon: '🎥', title: 'Video' },
    { icon: '🎨', title: 'Diseño' },
    { icon: '📝', title: 'Texto' },
    { icon: '🔊', title: 'Audio' },
    { icon: '📊', title: 'Presentación' }
  ];

  categories = ['Todo'];
  activeCategory = 'Todo';

  galleryItems = [
    { src: 'assets/images/ai-generator.jpg', title: 'Generador de imágenes con IA', description: 'Convierte las palabras en imágenes' },
    { src: 'assets/images/ai-videos.jpg', title: 'Generar vídeos IA', description: 'Crea vídeos impresionantes a partir de texto o de imágenes', badge: 'NUEVO' },
    { src: 'assets/images/variations.jpg', title: 'Generar variaciones', description: 'Crea distintas versiones de una misma imagen con IA' },
    { src: 'assets/images/improve-quality.jpg', title: 'Mejorar calidad', description: 'Aumenta la resolución y los detalles' },
    { src: 'assets/images/retouch.jpg', title: 'Retocar', description: 'Cambia detalles de forma sencilla' },
    { src: 'assets/images/remove-bg.jpg', title: 'Quitar fondos', description: 'Elimina cualquier imagen' },
    { src: 'assets/images/voz.jpg', title: 'Generador de voz con IA', description: 'Locuciones profesionales en cuestión de segundos' },
    { src: 'assets/images/personajes.jpg', title: 'Crear personajes', description: 'Crea un personaje y descubre sus posibilidades' }
  ];

  constructor(private renderer: Renderer2) {
    this.globalClickListener = () => {};
  }

  ngAfterViewInit() {
    // Escuchar los clics fuera del componente
    this.globalClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
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
    // Limpiar el listener
    if (this.globalClickListener) {
      this.globalClickListener();
    }
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Buscando:', this.searchQuery);
    }
  }

  onCreateResource(option: any) {
    console.log('Crear recurso:', option.title);
  }

  scrollGallery(direction: 'left' | 'right') {
    if (this.galleryContainer) {
      const scrollAmount = 300;
      this.galleryContainer.nativeElement.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }
}
