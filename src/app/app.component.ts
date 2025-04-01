import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Gallery1Component } from './components/gallery1/gallery1.component';
import { CarouselGalleryComponent } from './components/carousel-gallery/carousel-gallery.component';
import { ResourceCategoriesComponent } from './components/resource-categories/resource-categories.component';  // Asegúrate de importar el componente
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { SearchComponent } from './components/search/search.component';
//import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,  // Necesario para *ngIf
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    Gallery1Component,
    CarouselGalleryComponent,
    ResourceCategoriesComponent,
    SearchComponent,
    //NavbarComponent
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  // Verifica si estamos en la página de login o registro
  isAuthPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/login' || currentUrl === '/registro';
  }

  // Verifica si estamos en la página de inicio
  isHomePage(): boolean {
    return this.router.url === '/';
  }
}