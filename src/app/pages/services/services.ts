import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { ServiceCard } from '../../components/shared/service-card/service-card';
import { MediaInterface } from '../homepage/home.interface';
import { StrapiService } from '../../services/strapi.service';
import { ServiceCategoryInterface } from './services.interface';
import { SeoService } from '../../services/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [PageTitle, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services = signal<ServiceCategoryInterface[] | []>([]);

  private strapiService = inject(StrapiService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  seoData = computed(() => {
    return {
      metaTitle: 'Studio-Fisioterapia - Servizi - Categorie',
      metaDescription:
        'Scopri le categorie di servizi offerti presso lo Studio di Fisioterapia Paolo Caristia.',
      ogImage: '',
      noIndex: false,
      canonicalUrl: this.router.url,
    };
  });

  ngOnInit(): void {
    this.fetchServiceCategories();
  }

  fetchServiceCategories() {
    this.strapiService.getServicesCategory().subscribe({
      next: (value) => {
        // console.log(value.data);
        this.services.set(value.data);
        this.seoService.updateSeo(this.seoData());
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
