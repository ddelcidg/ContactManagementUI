import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { RouterModule } from '@angular/router';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
