import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para las categorías de imágenes
interface ImageCategory {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

// Interfaz para los vectores destacados
interface FeaturedVector {
  imageUrl: string;
  altText: string;
  title?: string;
}

// Nueva interfaz para los temas de vectores
interface VectorTheme {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-vectores',
  templateUrl: './vectores.component.html',
  styleUrls: ['./vectores.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VectoresComponent implements OnInit {
  categories: ImageCategory[] = [];
  featuredVectors: FeaturedVector[] = [];
  vectorThemes: VectorTheme[] = [];
  activeThemeCategory: string = 'Eventos';
  
  ngOnInit(): void {
    // Inicializa las categorías con datos de ejemplo
    this.categories = [
      {
        id: 1,
        title: 'Ilustraciones',
        imageUrl: 'assets/images/ilustraciones.jpg',
        description: 'Ilustraciones artísticas para tus proyectos'
      },
      {
        id: 2,
        title: 'Fondos',
        imageUrl: 'assets/images/fondos.jpg',
        description: 'Fondos abstractos y coloridos'
      },
      {
        id: 3,
        title: 'Texturas',
        imageUrl: 'assets/images/texturas.jpg',
        description: 'Texturas elegantes para diseños sofisticados'
      },
      {
        id: 4,
        title: 'Clip Art',
        imageUrl: 'assets/images/clipart.jpg',
        description: 'Elementos gráficos para todo tipo de proyectos'
      },
      {
        id: 5,
        title: 'Dibujos',
        imageUrl: 'assets/images/dibujos.jpg',
        description: 'Dibujos artísticos y creativos'
      },
      {
        id: 6,
        title: 'Dibujos Animados',
        imageUrl: 'assets/images/dibujos-animados.jpg',
        description: 'Ilustraciones animadas y dinámicas'
      },
      {
        id: 7,
        title: 'Patrones',
        imageUrl: 'assets/images/patrones.jpg',
        description: 'Patrones decorativos y repetitivos'
      },
      {
        id: 8,
        title: 'Símbolos Y Signos',
        imageUrl: 'assets/images/simbolos.jpg',
        description: 'Símbolos e iconografía esencial'
      },
      {
        id: 9,
        title: 'Siluetas',
        imageUrl: 'assets/images/siluetas.jpg',
        description: 'Siluetas para diversos usos'
      }
    ];

    // Inicializa los vectores destacados
    this.featuredVectors = [
      { 
        imageUrl: 'assets/images/featured/ice-cream-pink.jpg', 
        altText: 'Ilustración de helados de fresa',
        title: 'Helados de verano'
      },
      { 
        imageUrl: 'assets/images/featured/rainbow.jpg', 
        altText: 'Arcoíris colorido con nubes',
        title: 'Arcoíris colorido'
      },
      { 
        imageUrl: 'assets/images/featured/purple-texture.jpg', 
        altText: 'Textura abstracta púrpura',
        title: 'Textura abstracta'
      },
      { 
        imageUrl: 'assets/images/featured/scrapbook-collage.jpg', 
        altText: 'Collage de scrapbook con elementos florales',
        title: 'Collage estilo scrapbook'
      },
      { 
        imageUrl: 'assets/images/featured/fantasy-girl.jpg', 
        altText: 'Ilustración de fantasía con chica de cabello azul',
        title: 'Ilustración de fantasía'
      },
      { 
        imageUrl: 'assets/images/featured/sunset-sky.jpg', 
        altText: 'Cielo al atardecer con luna',
        title: 'Atardecer con luna'
      },
      { 
        imageUrl: 'assets/images/featured/japanese-gate.jpg', 
        altText: 'Portón torii japonés en paisaje',
        title: 'Portón torii japonés'
      },
      { 
        imageUrl: 'assets/images/featured/popsicles.jpg', 
        altText: 'Patrón de paletas heladas sobre fondo morado',
        title: 'Patrón de paletas'
      },
      { 
        imageUrl: 'assets/images/featured/celestial-eyes.jpg', 
        altText: 'Ilustración mística con ojos y elementos celestiales',
        title: 'Arte celestial con ojos'
      }
    ];

    // Inicializa los temas de vectores
    this.vectorThemes = [
      {
        id: 1,
        title: 'Vectores De Navidad',
        imageUrl: 'assets/images/themes/navidad.jpg',
        category: 'Eventos'
      },
      {
        id: 2,
        title: 'Vectores De Halloween',
        imageUrl: 'assets/images/themes/halloween.jpg',
        category: 'Eventos'
      },
      {
        id: 3,
        title: 'Vectores De Semana Santa',
        imageUrl: 'assets/images/themes/semana-santa.jpg',
        category: 'Eventos'
      },
      {
        id: 4,
        title: 'Vectores De Otoño',
        imageUrl: 'assets/images/themes/otono.jpg',
        category: 'Naturaleza'
      },
      {
        id: 5,
        title: 'Vectores De Primavera',
        imageUrl: 'assets/images/themes/primavera.jpg',
        category: 'Naturaleza'
      },
      {
        id: 6,
        title: 'Vectores De Verano',
        imageUrl: 'assets/images/themes/verano.jpg',
        category: 'Naturaleza'
      },
      {
        id: 7,
        title: 'Vectores De Año Nuevo',
        imageUrl: 'assets/images/themes/ano-nuevo.jpg',
        category: 'Eventos'
      },
      {
        id: 8,
        title: 'Vectores De Invierno',
        imageUrl: 'assets/images/themes/invierno.jpg',
        category: 'Naturaleza'
      },
      {
        id: 9,
        title: 'Vectores Del Día De La Madre',
        imageUrl: 'assets/images/themes/dia-madre.jpg',
        category: 'Eventos'
      },
      {
        id: 10,
        title: 'Vectores De Carnaval',
        imageUrl: 'assets/images/themes/carnaval.jpg',
        category: 'Eventos'
      },
      {
        id: 11,
        title: 'Vectores Del Día Del Padre',
        imageUrl: 'assets/images/themes/dia-padre.jpg',
        category: 'Eventos'
      },
      {
        id: 12,
        title: 'Vectores De San Valentín',
        imageUrl: 'assets/images/themes/san-valentin.jpg',
        category: 'Eventos'
      },
    ];
  }

  onCategoryClick(category: ImageCategory): void {
    console.log(`Categoría seleccionada: ${category.title}`);
  }
  
  navigateToVectorDetails(vector: FeaturedVector): void {
    console.log(`Navegando a detalles de: ${vector.title}`);
  }
  
  onThemeClick(theme: VectorTheme): void {
    console.log(`Tema seleccionado: ${theme.title}`);
  }
  
  setActiveThemeCategory(category: string): void {
    this.activeThemeCategory = category;
  }
  
  get filteredThemes(): VectorTheme[] {
    return this.vectorThemes.filter(theme => 
      this.activeThemeCategory === 'Todos' || theme.category === this.activeThemeCategory
    );
  }
  
  // Nueva función para navegar por nombre de tema
  goToTheme(nombre: string): void {
    console.log(`Navegando al tema: ${nombre}`);
  }
}