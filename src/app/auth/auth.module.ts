import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent // Declare the login component here
  ],
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule to work with template-driven forms
    ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms
    AuthRoutingModule // Import the authentication routing module
  ]
})
export class AuthModule { }
