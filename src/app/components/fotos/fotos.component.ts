import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBannerComponent } from '../search-banner/search-banner.component'; // ✅ Importa el componente

// Interfaces para las categorías y series de fotos
interface ImageCategory {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

interface PhotoSeries {
  id: number;
  title: string;
  mainPhoto: string;
  count: number;
  thumbnails: string[];
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
  standalone: true,
  imports: [CommonModule, SearchBannerComponent]
})
export class FotosComponent implements OnInit {
  categories: ImageCategory[] = [];
  photoSeries: PhotoSeries[] = [];
  
  ngOnInit(): void {
    // Inicializa las categorías con los datos
    this.categories = [
      // ... tu código de categorías ...
    ];

    // Inicializa las series de fotos
    this.photoSeries = [
      // ... tu código de series ...
    ];
  }

  onCategoryClick(category: ImageCategory): void {
    console.log(`Categoría de fotos seleccionada: ${category.title}`);
    // Aquí puedes agregar navegación a una vista detallada de la categoría
  }

  // COLOCA EL MÉTODO AQUÍ
  onSeriesClick(series: PhotoSeries): void {
    console.log(`Serie de fotos seleccionada: ${series.title}`);
    // Aquí puedes agregar navegación a una vista detallada de la serie
  }
}