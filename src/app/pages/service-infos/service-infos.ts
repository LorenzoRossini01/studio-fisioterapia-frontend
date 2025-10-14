import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { MyServices } from '../../components/shared/my-services/my-services';
import { OpeningTimes } from '../../components/shared/opening-times/opening-times';
import { MoreInfo } from '../../components/shared/more-info/more-info';
import { LinkType } from '../../components/footer/footer';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StrapiService } from '../../services/strapi.service';
import { ServiceInterface } from '../services/services.interface';
import { parseRichText } from '../../utility/parseRichText';

@Component({
  selector: 'app-service-infos',
  imports: [PageTitle, MyServices, OpeningTimes, MoreInfo, RouterLink],
  templateUrl: './service-infos.html',
  styleUrl: './service-infos.css',
  encapsulation: ViewEncapsulation.None,
})
export class ServiceInfos implements OnInit {
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

  serviceData = signal<ServiceInterface>({
    id: 0,
    title: '',
    slug: '',
  });

  articleContent = computed(() => {
    console.log(parseRichText(this.serviceData().body!));
    return parseRichText(this.serviceData().body!);
  });
  serviceSlug = signal<string>('');

  private strapiService = inject(StrapiService);
  private router = inject(ActivatedRoute);
  private routerNavigate = inject(Router);

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.serviceSlug.set(params.get('serviceSlug')!);
    });
    this.fetchServiceBySlug(this.serviceSlug());
  }

  fetchServiceBySlug(slug: string) {
    this.strapiService.getServiceBySlug(slug).subscribe({
      next: (value) => {
        console.log(value.data[0]);
        this.serviceData.set(value.data[0]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  handleClick() {
    this.routerNavigate.navigate(['/contatti']);
  }
}
