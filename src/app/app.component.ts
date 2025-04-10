import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResourceCategoriesComponent } from './components/resource-categories/resource-categories.component';
import { SearchComponent } from './components/search/search.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ResourceCategoriesComponent,
    SearchComponent,
    EstadisticasComponent
  ]
})
export class AppComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;  // ✅ Se actualiza correctamente la URL
    });
  }

  isHomePage(): boolean {
  return this.currentUrl === '/' || this.currentUrl === '/home';
}

  isAuthPage(): boolean {
    return this.currentUrl === '/login' || this.currentUrl === '/registro';
  }
}
