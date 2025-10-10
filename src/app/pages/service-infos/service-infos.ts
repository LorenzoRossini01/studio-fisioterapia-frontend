import { Component, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { MyServices } from '../../components/shared/my-services/my-services';
import { OpeningTimes } from '../../components/shared/opening-times/opening-times';
import { MoreInfo } from '../../components/shared/more-info/more-info';
import { LinkType } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-infos',
  imports: [PageTitle, MyServices, OpeningTimes, MoreInfo, RouterLink],
  templateUrl: './service-infos.html',
  styleUrl: './service-infos.css',
})
export class ServiceInfos {
  servizi = signal<LinkType[]>([
    {
      label: 'tutti i servizi',
      link: '/servizi-offerti',
    },
    {
      label: 'fisioterapia',
      link: '/servizi-offerti/fisioterapia',
    },
    {
      label: 'Osteopatia',
      link: '/servizi-offerti/osteopatia',
    },
    {
      label: 'Terapie fisiche',
      link: '/servizi-offerti/terapie-fisiche',
    },
  ]);
}
