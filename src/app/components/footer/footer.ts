import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickContacts } from '../shared/quick-contacts/quick-contacts';
import { RouterLink } from '@angular/router';
import { StrapiService } from '../../services/strapi.service';
import { ServiceCategoryInterface } from '../../pages/services/services.interface';

export type OpeningTimeType = {
  day: string;
  hours: string;
};

export type LinkType = {
  label: string;
  link: string;
};

@Component({
  selector: 'app-footer',
  imports: [QuickContacts, CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  private strapiService = inject(StrapiService);
  linkUtili = signal<LinkType[]>([
    {
      label: 'chi sono',
      link: '/chi-sono',
    },
    {
      label: 'contatti',
      link: '/contatti',
    },
    {
      label: 'Cookie Policy (UE)',
      link: '/cookie-policy',
    },
    {
      label: 'Privacy Policy',
      link: '/privacy-policy',
    },
  ]);
  servizi = signal<LinkType[]>([
    {
      label: 'tutti i servizi',
      link: '/servizi-offerti',
    },
    {
      label: 'fisioterapia',
      link: '/servizi-offerti/fisioterapia',
    },
    {
      label: 'Osteopatia',
      link: '/servizi-offerti/osteopatia',
    },
    {
      label: 'Terapie fisiche',
      link: '/servizi-offerti/terapie-fisiche',
    },
  ]);
  myServices = signal<ServiceCategoryInterface[]>([]);

  orariApertura = signal<OpeningTimeType[]>([
    {
      day: 'Lunedì',
      hours: '8:30 - 13.30 e 14:30 - 18:30',
    },
    {
      day: 'Martedì',
      hours: '8:30 - 13.30 e 14:30 - 18:30',
    },
    {
      day: 'Mercoledì',
      hours: '8:30 - 13.30 e 14:30 - 18:30',
    },
    {
      day: 'Giovedì',
      hours: '8:30 - 13.30 e 14:30 - 18:30',
    },
    {
      day: 'Venerdì',
      hours: '8:30 - 13.30 e 14:30 - 18:30',
    },
    {
      day: 'Sabato',
      hours: '8:30 - 13.30 e 14:30 - 18:30',
    },
    {
      day: 'Domenica',
      hours: '',
    },
  ]);

  currentDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.strapiService.getCategories().subscribe({
      next: (value) => {
        this.myServices.set(value.data);
        console.log(this.myServices());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
