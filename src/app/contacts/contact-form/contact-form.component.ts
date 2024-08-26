import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contact: { id: string; userId: string; firstName: string; lastName: string; email: string; phoneNumber: string } = {
    id: '',
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  isEditMode = false;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact.userId = localStorage.getItem('userId') || ''; // Get the userId of localStorage

    if (id) {
      this.isEditMode = true;
      this.contactsService.getContactById(id).subscribe(
        data => this.contact = data,
        error => console.error('Error getting contact', error)
      );
    }
  }

  saveContact(): void {
    const contactData: any = {
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        email: this.contact.email,
        phoneNumber: this.contact.phoneNumber,
        userId: this.contact.userId
    };

    if (this.isEditMode) {
        // If we are in edit mode, we add the id to the contactData object
        contactData.id = this.contact.id;

        this.contactsService.updateContact(this.contact.id, contactData).subscribe(
            () => this.router.navigate(['/contacts']),
            error => console.error('Error updating contact', error)
        );
    } else {
        // We do not include the id in the creation
        this.contactsService.createContact(contactData).subscribe(
            () => this.router.navigate(['/contacts']),
            error => console.error('Error creating contact', error)
        );
    }
  }
}
