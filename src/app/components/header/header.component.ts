import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  //imports: [
    //RouterLink,
    // Otros imports
  //]
})
export class HeaderComponent {

  @Input() bannerTitle: string = 'Título predeterminado';
  @Input() bannerDescription: string = 'Descripción predeterminada';
  @Input() bannerImage: string = '/assets/images/default-banner.jpg';
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}