import { Component, computed, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, PageTitle],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy implements OnInit {
  private seoService = inject(SeoService);
  private router = inject(Router);

  seoData = computed(() => {
    return {
      metaTitle: 'Studio-Fisioterapia - Privacy Policy',
      metaDescription:
        'Scopri la nostra politica sulla privacy presso lo Studio di Fisioterapia Paolo Caristia.',
      ogImage: '',
      noIndex: true,
      canonicalUrl: this.router.url,
    };
  });
  ngOnInit(): void {
    this.seoService.updateSeo(this.seoData());
  }
}
