import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  updateSeo(data: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    noIndex?: boolean;
    canonicalUrl?: string;
  }) {
    if (data.metaTitle) this.title.setTitle(data.metaTitle);

    this.meta.updateTag({
      name: 'description',
      content: data.metaDescription || '',
    });

    this.meta.updateTag({
      name: 'robots',
      content: data.noIndex ? 'noindex, nofollow' : 'index, follow',
    });

    if (data.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: data.ogImage });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
    }

    if (data.canonicalUrl) {
      let link: HTMLLinkElement | null = document.querySelector(
        "link[rel='canonical']"
      );
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', data.canonicalUrl);
    }
  }
}
