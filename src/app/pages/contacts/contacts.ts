import { Component, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { MyServices } from '../../components/shared/my-services/my-services';
import { OpeningTimes } from '../../components/shared/opening-times/opening-times';
import { ContactsForm } from '../../components/sections/contacts-form/contacts-form';

@Component({
  selector: 'app-contacts',
  imports: [PageTitle, MyServices, OpeningTimes, ContactsForm],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  contactsInfo = signal([
    {
      title: 'Studio fisioterapia/osteopatia',
      text: 'via XXXXXX, Legnano (MI)',
    },
    {
      title: 'telefono',
      text: '+39 333 123 123 1234',
    },
    {
      title: 'email',
      text: 'email@email.com',
    },
  ]);
}
