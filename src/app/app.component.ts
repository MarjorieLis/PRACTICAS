import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Gallery1Component } from './components/gallery1/gallery1.component';
import { CarouselGalleryComponent } from './components/carousel-gallery/carousel-gallery.component';
//import { MediaLibraryComponent } from './components/media-library/media-library.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { SearchComponent } from './components/search/search.component';

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
    SearchComponent
    //MediaLibraryComponent,
    
  ]
})
export class AppComponent {
  title = 'pagina';
  isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isLoginPage = event.url === '/login';
    });
  }
  isHomePage(): boolean {
    return this.router.url === '/';
    }
}