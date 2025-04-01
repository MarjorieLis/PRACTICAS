import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Importar FormsModule

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Gallery1Component } from './components/gallery1/gallery1.component';  
import { CarouselGalleryComponent } from './components/carousel-gallery/carousel-gallery.component';   

import { ResourceCategoriesComponent } from './components/resource-categories/resource-categories.component';  // Asegúrate de importar el componente
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router'; // Asegurar que RouterModule está importado
import { RegistroComponent } from './components/registro/registro.component';
import { routes } from './app.routes';  // Importa las rutas
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        GalleryComponent,
        Gallery1Component,
        CarouselGalleryComponent,
        ResourceCategoriesComponent,
        LoginComponent,
        RegistroComponent,
        SearchComponent,
        NavbarComponent
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes),
        RouterModule
        
    
    ],
    exports: [GalleryComponent, Gallery1Component],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
