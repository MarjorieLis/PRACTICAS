import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Elimina estas importaciones si no vas a usar estos componentes directamente
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';

// Interfaz para las categorías de imágenes
interface ImageCategory {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

@Component({
  selector: 'app-vectores',
  templateUrl: './vectores.component.html',
  styleUrls: ['./vectores.component.css'],
  standalone: true,
  imports: [CommonModule] // Elimina HeaderComponent y FooterComponent de aquí
})
export class VectoresComponent implements OnInit {
  categories: ImageCategory[] = [];
  
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
  }

  onCategoryClick(category: ImageCategory): void {
    console.log(`Categoría seleccionada: ${category.title}`);
    // Aquí puedes agregar navegación a una vista detallada de la categoría
  }
}