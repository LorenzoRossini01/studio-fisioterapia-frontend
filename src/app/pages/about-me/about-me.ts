import { Component, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { PresentazioneAbout } from '../../components/sections/presentazione-about/presentazione-about';
import { ImageGallery } from '../../components/sections/image-gallery/image-gallery';
import { StrapiService } from '../../services/strapi.service';
import { AboutInterface } from './about-me.interface';

@Component({
  selector: 'app-about-me',
  imports: [PageTitle, PresentazioneAbout, ImageGallery],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe implements OnInit {
  curriculumCertificazioni = signal<string>(``);

  private strapiService = inject(StrapiService);

  aboutData = signal<AboutInterface>({
    id: 0,
    documentId: '',
    title: '',
    bio_text_image: undefined,
    specializations: [],
    values: [],
    gallery: [],
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  });

  ngOnInit(): void {
    this.fetchAboutData();
  }

  fetchAboutData() {
    this.strapiService.getAbout().subscribe({
      next: (value) => {
        this.aboutData.set(value.data);
        // console.log(this.aboutData());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
