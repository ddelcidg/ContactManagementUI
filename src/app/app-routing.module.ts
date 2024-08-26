import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Asegúrate de que esta ruta sea correcta
import { ContactListComponent } from './contacts/contact-list/contact-list.component'; // Asegúrate de que esta ruta sea correcta
import { ContactFormComponent } from './contacts/contact-form/contact-form.component'; // Asegúrate de que esta ruta sea correcta

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/create', component: ContactFormComponent },
  { path: 'contacts/edit/:id', component: ContactFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
