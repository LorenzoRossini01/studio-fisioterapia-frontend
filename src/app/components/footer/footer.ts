import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickContacts } from '../shared/quick-contacts/quick-contacts';
import { RouterLink } from '@angular/router';
import { StrapiService } from '../../services/strapi.service';
import { ServiceCategoryInterface } from '../../pages/services/services.interface';
import { GeneralInfoService } from '../../services/general-info.service';

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
  private generalInfo = inject(GeneralInfoService);

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
  servizi = signal<LinkType[]>([]);
  myServices = signal<ServiceCategoryInterface[]>([]);

  orariApertura = signal<OpeningTimeType[]>([]);

  currentDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  private _updateOrari = effect(() => {
    const info = this.generalInfo.generalInfo();
    if (info?.opening_times?.days) {
      const formatted = info.opening_times.days.map((day) => ({
        day: day.day_name,
        hours: day.is_closed ? '' : day.hours,
      }));
      this.orariApertura.set(formatted);
    }
  });

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.strapiService.getCategories().subscribe({
      next: (value) => {
        this.myServices.set(value.data);
        // console.log(this.myServices());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
