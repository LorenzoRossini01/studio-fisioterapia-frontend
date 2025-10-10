import { Component, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { PresentazioneAbout } from '../../components/sections/presentazione-about/presentazione-about';
import { ImageGallery } from '../../components/sections/image-gallery/image-gallery';

@Component({
  selector: 'app-about-me',
  imports: [PageTitle, PresentazioneAbout, ImageGallery],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  curriculumCertificazioni = signal<string>(``);
}
