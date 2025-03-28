import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css']
})
export class Gallery1Component {
  images = [
    { src: 'assets/images/fitness.jpg', title: 'Vídeos De Fitness' },
    { src: 'assets/images/colorful.jpg', title: 'Fondos Coloridos' },
    { src: 'assets/images/patrick.jpg', title: 'Imágenes Del Día De San Patricio' },
    { src: 'assets/images/butterfly.jpg', title: 'Fondos De Mariposa' },
    { src: 'assets/images/clouds.jpg', title: 'Vídeos De Nubes' },
    { src: 'assets/images/festival.jpg', title: 'Fotos De Festivales' },
    { src: 'assets/images/green.jpg', title: 'Fondos Verdes' },
    { src: 'assets/images/ramadan.jpg', title: 'Vídeos Del Ramadán' },
    { src: 'assets/images/magazine.jpg', title: 'Mockups De Revistas' }
  ];
}
