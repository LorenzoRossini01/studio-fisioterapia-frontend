import { Component, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { ServiceCard } from '../../components/shared/service-card/service-card';

export interface ServiceInterface {
  imageUrl: string;
  title: string;
  slug: string;
  link: string;
  subtitle?: string;
  description?: string;
}

@Component({
  selector: 'app-services',
  imports: [PageTitle, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = signal<ServiceInterface[]>([
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Fisioterapia',
      slug: 'fisioterapia',
      link: 'fisioterapia',
    },
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Osteopatia',
      slug: 'osteopatia',
      link: 'osteopatia',
    },
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Altri servizi',
      slug: 'altri-servizi',
      link: 'altri-servizi',
    },
  ]);
}
