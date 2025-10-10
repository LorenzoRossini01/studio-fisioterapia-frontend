import { Component, signal } from '@angular/core';
import { ServiceInterface } from '../services/services';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { ServiceCard } from '../../components/shared/service-card/service-card';

@Component({
  selector: 'app-services-detail',
  imports: [PageTitle, ServiceCard],
  templateUrl: './services-detail.html',
  styleUrl: './services-detail.css',
})
export class ServicesDetail {
  services = signal<ServiceInterface[]>([
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Fisioterapia 1',
      slug: 'fisioterapia-1',
      link: 'fisioterapia-1',
    },
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Fisioterapia 2',
      slug: 'fisioterapia-2',
      link: 'fisioterapia-2',
    },
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Fisioterapia 3',
      slug: 'fisioterapia-3',
      link: 'fisioterapia-3',
    },
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Fisioterapia 4',
      slug: 'fisioterapia-4',
      link: 'fisioterapia-4',
    },
    {
      imageUrl: 'https://picsum.photos/920/1080',
      title: 'Fisioterapia 5',
      slug: 'fisioterapia-5',
      link: 'fisioterapia-5',
    },
  ]);
}
