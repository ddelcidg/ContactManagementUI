import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials = {
    username: '',
    password: ''
  };
  errorMessage: string | null = null; // Define la propiedad errorMessage
  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      response => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/contacts']);
      },
      error => {
        console.error('Error en la autenticación', error);
      }
    );
  }
}
