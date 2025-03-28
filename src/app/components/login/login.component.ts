import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',  // IMPORTANTE: Este nombre debe coincidir en app.component.html
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router) {}
  irARegistro() {
    this.router.navigate(['/registro']);
  }
}