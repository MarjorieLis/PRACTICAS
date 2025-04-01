import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importar Router

interface ResourceCategory {
  icon: string;
  name: string;
  route: string;
}

interface Company {
  name: string;
  logoUrl: string;
  altText: string;
}

@Component({
  selector: 'app-resource-categories',
  standalone: true, // 🚀 Importante para Angular 19
  imports: [CommonModule], // 👈 Necesario para `*ngFor`
  templateUrl: './resource-categories.component.html',
  styleUrls: ['./resource-categories.component.css']
})
export class ResourceCategoriesComponent implements OnInit {
  categories: ResourceCategory[] = [
    { icon: 'assets/icons/vector.png', name: 'Vectores', route: '/vectores' },
    { icon: 'assets/icons/fotos.png', name: 'Fotos', route: '/fotos' },
    { icon: 'assets/icons/ilustraciones.png', name: 'Ilustraciones', route: '/ilustraciones' },
    { icon: 'assets/icons/iconos.png', name: 'Iconos', route: '/iconos' },
    { icon: 'assets/icons/videos.png', name: 'Videos', route: '/videos' },
    { icon: 'assets/icons/plantillas.png', name: 'Plantillas', route: '/plantillas' },
    { icon: 'assets/icons/psd.png', name: 'PSD', route: '/psd' },
    { icon: 'assets/icons/mockup.png', name: 'Mockups', route: '/mockups' }
  ];

  companies: Company[] = [
    { name: 'Airbnb', logoUrl: 'assets/logos/airbnb.png', altText: 'Airbnb logo' },
    { name: 'Google', logoUrl: 'assets/logos/google.png', altText: 'Google logo' },
    { name: 'Coca Cola', logoUrl: 'assets/logos/cocacola.png', altText: 'Coca Cola logo' },
    { name: 'Snowflake', logoUrl: 'assets/logos/snowflake.png', altText: 'Snowflake logo' }
  ];

  constructor(private router: Router) { } // Inyectar Router

  ngOnInit(): void {}

  // Método modificado para navegar a la ruta correspondiente
  navigateToCategory(category: ResourceCategory): void {
    console.log(`Navegando a ${category.name}`);
    // Navegar a la ruta usando Router
    this.router.navigate([category.route]);
  }
}
