import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.css']
})
export class CarouselGalleryComponent {
  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;

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
