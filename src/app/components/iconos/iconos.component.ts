// iconos.component.ts
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iconos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.css'],
})
export class IconosComponent implements OnInit {
  searchQuery: string = '';
  isSearchExpanded: boolean = false;
  rotatingTitles: string[] = [
    'iconos animados',
    'iconos de interfaz',
    'stickers',
  ];
  currentTitleIndex: number = 0;
  currentTitle: string = '';

  popularSearches: string[] = ['whatsapp', 'instagram', 'calendario'];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.rotateTitles();
  }

  rotateTitles(): void {
    this.currentTitle = this.rotatingTitles[this.currentTitleIndex];
    this.currentTitleIndex =
      (this.currentTitleIndex + 1) % this.rotatingTitles.length;
    setTimeout(() => this.rotateTitles(), 3000); // Cambiar título cada 3 segundos
  }

  toggleSearch(): void {
    this.isSearchExpanded = true;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    // Si el clic fue fuera del elemento de búsqueda, cerramos el panel expandido
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isSearchExpanded = false;
    }
  }
}
