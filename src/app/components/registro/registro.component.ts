import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  passwordVisible: boolean = false; // Para mostrar u ocultar la contraseña
  confirmPasswordVisible: boolean = false; // Para mostrar u ocultar la contraseña de confirmación

  constructor(private router: Router) {}

  // Función para cambiar la visibilidad de la contraseña
  togglePasswordVisibility(field: string) {
    if (field === 'contrasena') {
      this.passwordVisible = !this.passwordVisible;
    } else if (field === 'confirmarContrasena') {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }

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
