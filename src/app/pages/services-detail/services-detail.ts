import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { ServiceCard } from '../../components/shared/service-card/service-card';
import { StrapiService } from '../../services/strapi.service';
import { ServiceInterface } from '../services/services.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services-detail',
  imports: [PageTitle, ServiceCard],
  templateUrl: './services-detail.html',
  styleUrl: './services-detail.css',
})
export class ServicesDetail implements OnInit {
  services = signal<ServiceInterface[]>([]);
  categorySlug = signal<string>('');

  orderedServices = computed(() => {
    return [...this.services()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  });

  private strapiService = inject(StrapiService);
  private router = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private routerNavigate = inject(Router);

  seoData = computed(() => {
    return {
      metaTitle:
        'Studio-Fisioterapia - Servizi - Categorie' +
        ' - ' +
        this.categorySlug(),
      metaDescription:
        'Scopri i servizi offerti presso lo Studio di Fisioterapia Paolo Caristia nella categoria ' +
        this.categorySlug() +
        '.',
      ogImage: '',
      noIndex: false,
      canonicalUrl: this.routerNavigate.url,
    };
  });

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.categorySlug.set(params.get('categorySlug')!);
    });
    this.fetchServicesByCategory(this.categorySlug());
  }

  fetchServicesByCategory(slug: string) {
    this.strapiService.getCategoryBySlug(slug).subscribe({
      next: (value) => {
        this.services.set(value.data[0].services);
        this.seoService.updateSeo(this.seoData());
        // console.log(this.services());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
