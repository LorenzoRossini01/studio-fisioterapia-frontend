import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ServiceCategoryInterface,
  ServiceInterface,
} from '../../../pages/services/services.interface';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  service = input.required<ServiceInterface | ServiceCategoryInterface>();
  hasShadow = input<boolean>(false);
  context = input<'home' | 'category' | 'service'>('home');

  title = computed(
    () =>
      (this.service() as ServiceCategoryInterface).name ||
      (this.service() as ServiceInterface).title ||
      ''
  );
  subtitle = computed(
    () =>
      (this.service() as ServiceCategoryInterface).subtitle ||
      (this.service() as ServiceInterface).short_description ||
      ''
  );
  image = computed(
    () =>
      (this.service() as ServiceCategoryInterface).image ||
      (this.service() as ServiceInterface).cover_image
  );
  slug = computed(() => this.service().slug);
  link = computed(() => {
    const slug = this.slug();
    if (!slug) return '/';

    switch (this.context()) {
      case 'category':
        return `/servizi-offerti/${slug}`;
      case 'service':
        const categorySlug = (this.service() as ServiceInterface).category
          ?.slug;
        // console.log(categorySlug);

        return `/servizi-offerti/${categorySlug}/${slug}`;
      case 'home':
      default:
        const homeCategorySlug = (this.service() as ServiceInterface).category
          ?.slug;
        return `/servizi-offerti/${homeCategorySlug}/${slug}`;
    }
  });

  ngOnInit() {
    // console.log(this.service());
  }
}
