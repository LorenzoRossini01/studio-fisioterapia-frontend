import { Component, computed, inject, OnInit } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-cookie-policy-policy',
  imports: [PageTitle],
  templateUrl: './cookie-policy-policy.html',
  styleUrl: './cookie-policy-policy.css',
})
export class CookiePolicyPolicy implements OnInit {
  private seoService = inject(SeoService);
  private router = inject(Router);

  seoData = computed(() => {
    return {
      metaTitle: 'Studio-Fisioterapia - Cookie Policy',
      metaDescription:
        'Scopri la nostra politica sui cookie presso lo Studio di Fisioterapia Paolo Caristia.',
      ogImage: '',
      noIndex: true,
      canonicalUrl: this.router.url,
    };
  });
  ngOnInit(): void {
    this.seoService.updateSeo(this.seoData());
  }
}
