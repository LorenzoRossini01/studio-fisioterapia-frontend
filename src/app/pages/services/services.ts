import { Component, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { ServiceCard } from '../../components/shared/service-card/service-card';
import { MediaInterface } from '../homepage/home.interface';
import { StrapiService } from '../../services/strapi.service';
import { ServiceCategoryInterface } from './services.interface';

@Component({
  selector: 'app-services',
  imports: [PageTitle, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services = signal<ServiceCategoryInterface[] | []>([]);

  private strapiService = inject(StrapiService);

  ngOnInit(): void {
    this.fetchServiceCategories();
  }

  fetchServiceCategories() {
    this.strapiService.getServicesCategory().subscribe({
      next: (value) => {
        console.log(value.data);
        this.services.set(value.data);
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
