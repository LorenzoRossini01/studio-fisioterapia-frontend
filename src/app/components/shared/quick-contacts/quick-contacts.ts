import { Component, signal } from '@angular/core';

export type ContactsType = {
  icon: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-quick-contacts',
  imports: [],
  templateUrl: './quick-contacts.html',
  styleUrl: './quick-contacts.css',
})
export class QuickContacts {
  quickContacts = signal<ContactsType[]>([
    {
      icon: 'home.png',
      title: 'Dove sono',
      description: 'via XXXXXX,</br> Legnano (MI)',
    },
    {
      icon: 'telephone-handle-silhouette.png',
      title: 'Chiamami',
      description: '+39 333 123 123 1234',
    },
    {
      icon: 'email.png',
      title: 'Scrivimi',
      description: 'email@email.com',
    },
    {
      icon: 'time.png',
      title: 'Orari',
      description: '8:30-13:30 </br> 14:30-18:30',
    },
  ]);
}
