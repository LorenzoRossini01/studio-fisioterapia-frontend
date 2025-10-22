import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { MyServices } from '../../components/shared/my-services/my-services';
import { OpeningTimes } from '../../components/shared/opening-times/opening-times';
import { ContactsForm } from '../../components/sections/contacts-form/contacts-form';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GeneralInfoService } from '../../services/general-info.service';
import { StrapiService } from '../../services/strapi.service';
import { SeoService } from '../../services/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [PageTitle, MyServices, OpeningTimes, ContactsForm],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements OnInit {
  private strapiService = inject(StrapiService);
  private seoService = inject(SeoService);
  private generalInfoService = inject(GeneralInfoService);
  private sanitizer = inject(DomSanitizer);
  private router = inject(Router);

  contactsInfo = computed(() => [
    {
      title: 'Studio fisioterapia/osteopatia',
      text: this.generalInfoService.generalInfo()?.address,
    },
    {
      title: 'telefono',
      text: this.generalInfoService.generalInfo()?.phone_number,
    },
    {
      title: 'email',
      text: this.generalInfoService.generalInfo()?.email,
    },
  ]);

  mapEmbed = computed<SafeHtml | null>(() => {
    const embed = this.generalInfoService.generalInfo()?.google_maps_embed;
    return embed ? this.sanitizer.bypassSecurityTrustHtml(embed) : null;
  });

  contactData = signal<any>(null);

  seoData = computed(() => {
    return {
      metaTitle: this.contactData()?.seo?.metaTitle || 'Contatti',
      metaDescription: this.contactData()?.seo?.metaDescription || '',
      ogImage: this.contactData()?.seo?.ogImage?.url || '',
      noIndex: this.contactData()?.seo?.noIndex || false,
      canonicalUrl: this.contactData()?.seo?.canonicaUrl || this.router.url,
    };
  });

  ngOnInit(): void {
    this.strapiService.getContactsPageContent().subscribe({
      next: (response) => {
        const data = response.data;
        this.contactData.set(data);
        this.seoService.updateSeo(this.seoData());
      },
      error: (error) => {
        console.error('Error fetching contacts page content:', error);
      },
    });
  }
}
