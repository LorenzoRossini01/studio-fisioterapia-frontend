import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { PresentazioneAbout } from '../../components/sections/presentazione-about/presentazione-about';
import { ImageGallery } from '../../components/sections/image-gallery/image-gallery';
import { StrapiService } from '../../services/strapi.service';
import { AboutInterface } from './about-me.interface';
import { SeoService } from '../../services/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [PageTitle, PresentazioneAbout, ImageGallery],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe implements OnInit {
  curriculumCertificazioni = signal<string>(``);

  private strapiService = inject(StrapiService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  aboutData = signal<AboutInterface>({
    id: 0,
    documentId: '',
    title: '',
    bio_text_image: undefined,
    specializations: [],
    invert_on_mobile: false,
    values: [],
    gallery: [],
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  });

  seoData = computed(() => {
    return {
      metaTitle: this.aboutData()?.seo?.metaTitle + ' - Chi Sono' || 'Chi Sono',
      metaDescription: this.aboutData()?.seo?.metaDescription || '',
      ogImage: this.aboutData()?.seo?.ogImage?.url || '',
      noIndex: this.aboutData()?.seo?.noIndex || false,
      canonicalUrl: this.aboutData()?.seo?.canonicaUrl || this.router.url,
    };
  });

  ngOnInit(): void {
    this.fetchAboutData();
  }

  fetchAboutData() {
    this.strapiService.getAbout().subscribe({
      next: (value) => {
        this.aboutData.set(value.data);
        this.seoService.updateSeo(this.seoData());

        // console.log(this.aboutData());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
