import { Component, computed, inject, signal } from '@angular/core';
import { GeneralInfoService } from '../../../services/general-info.service';

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
  generalInfoService = inject(GeneralInfoService);

  quickContacts = computed<ContactsType[]>(() => [
    {
      icon: 'home.png',
      title: 'Dove sono',
      description: this.generalInfoService.generalInfo()?.address || '',
    },
    {
      icon: 'telephone-handle-silhouette.png',
      title: 'Chiamami',
      description: this.generalInfoService.generalInfo()?.phone_number || '',
    },
    {
      icon: 'email.png',
      title: 'Scrivimi',
      description: this.generalInfoService.generalInfo()?.email || '',
    },
    {
      icon: 'time.png',
      title: 'Orari',
      description: '8:30-13:30 </br> 14:30-18:30',
    },
  ]);
}
