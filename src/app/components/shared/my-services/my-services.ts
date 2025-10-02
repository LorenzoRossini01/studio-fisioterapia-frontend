import { Component, signal } from '@angular/core';
import { LinkType } from '../../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-services',
  imports: [RouterLink],
  templateUrl: './my-services.html',
  styleUrl: './my-services.css',
})
export class MyServices {
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
