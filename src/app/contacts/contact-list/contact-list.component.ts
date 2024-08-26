import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactsService.getContacts().subscribe(
      data => this.contacts = data,
      error => console.error('Error getting contacts', error)
    );
  }

  deleteContact(id: string): void {
    this.contactsService.deleteContact(id).subscribe(
      () => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        console.log('Contact deleted');
      },
      error => console.error('Error deleting contact', error)
    );
  }
}
