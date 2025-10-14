import { Component, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { ServiceCard } from '../../components/shared/service-card/service-card';
import { StrapiService } from '../../services/strapi.service';
import { ServiceInterface } from '../services/services.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services-detail',
  imports: [PageTitle, ServiceCard],
  templateUrl: './services-detail.html',
  styleUrl: './services-detail.css',
})
export class ServicesDetail implements OnInit {
  services = signal<ServiceInterface[]>([]);
  categorySlug = signal<string>('');

  private strapiService = inject(StrapiService);
  private router = inject(ActivatedRoute);

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
        // console.log(this.services());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
