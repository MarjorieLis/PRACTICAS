import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-gallery',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'assets/images/img1.jpg', alt: 'Descripción 1' },
    { src: 'assets/images/img2.jpg', alt: 'Descripción 2' },
    { src: 'assets/images/img3.jpg', alt: 'Descripción 3' },
    { src: 'assets/images/img4.jpg', alt: 'Descripción 4' },
    { src: 'assets/images/img5.jpg', alt: 'Descripción 5' },
    { src: 'assets/images/img6.jpg', alt: 'Descripción 6' },
    { src: 'assets/images/img7.jpg', alt: 'Descripción 7' },
    { src: 'assets/images/img8.jpg', alt: 'Descripción 8' },
    { src: 'assets/images/img9.jpg', alt: 'Descripciónn 9' },
    { src: 'assets/images/img10.jpg', alt: 'Descripción 10' },
  ];
}
