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
  }

  onCategoryClick(category: ImageCategory): void {
    console.log(`Categoría seleccionada: ${category.title}`);
    // Aquí puedes agregar navegación a una vista detallada de la categoría
  }

  navigateToVectorDetails(vector: FeaturedVector): void {
    console.log(`Navegando a detalles de: ${vector.title}`);
    // Implementa la navegación si ya tienes configurado el router
    // this.router.navigate(['/vectores/detalles', vector.title]);
  }
}