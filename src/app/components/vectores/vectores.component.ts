import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule]
})
export class VectoresComponent implements OnInit {
  categories: ImageCategory[] = [];
  
  ngOnInit(): void {
    this.categories = [
      // Tus categorías aquí
    ];
  }

  onCategoryClick(category: ImageCategory): void {
    console.log(`Categoría seleccionada: ${category.title}`);
  }
}