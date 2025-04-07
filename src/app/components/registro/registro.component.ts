import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true, // ✅ ¡Importante!
  imports: [CommonModule, FormsModule] // ✅ Para que funcione [(ngModel)]
})
export class RegistroComponent {
  usuario = {
    nombreCompleto: '',
    correoElectronico: '',
    contrasena: '',
    confirmarContrasena: '',
    esCreador: false
  };

  constructor(private router: Router) {}

  navegarAInicioSesion() {
    this.router.navigate(['/login']);
  }

  registrarUsuario() {
    if (this.usuario.contrasena !== this.usuario.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    console.log('Usuario registrado:', this.usuario);
  
    if (this.usuario.esCreador) {
      this.router.navigate(['/terminos-creador']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}