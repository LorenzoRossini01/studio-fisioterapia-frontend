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
import {
  ServiceCategoryInterface,
  ServiceInterface,
} from '../services/services.interface';
import { parseRichText } from '../../utility/parseRichText';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-service-infos',
  imports: [PageTitle, MyServices, OpeningTimes, MoreInfo, RouterLink],
  templateUrl: './service-infos.html',
  styleUrl: './service-infos.css',
  encapsulation: ViewEncapsulation.None,
})
export class ServiceInfos implements OnInit {
  private strapiService = inject(StrapiService);
  private seoService = inject(SeoService);

  private router = inject(ActivatedRoute);
  private routerNavigate = inject(Router);

  myServices = signal<ServiceCategoryInterface[]>([]);

  serviceData = signal<ServiceInterface>({
    id: 0,
    title: '',
    slug: '',
  });

  seoData = computed(() => {
    return {
      metaTitle:
        this.serviceData()?.seo?.metaTitle +
          ' - ' +
          this.serviceData().category?.name || 'Service Info',
      metaDescription: this.serviceData()?.seo?.metaDescription || '',
      ogImage: this.serviceData()?.seo?.ogImage?.url || '',
      noIndex: this.serviceData()?.seo?.noIndex || false,
      canonicalUrl:
        this.serviceData()?.seo?.canonicaUrl || this.routerNavigate.url,
    };
  });

  articleContent = computed(() => {
    // console.log(parseRichText(this.serviceData().body!));
    return parseRichText(this.serviceData().body!);
  });
  serviceSlug = signal<string>('');

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.serviceSlug.set(params.get('serviceSlug')!);
    });
    this.fetchServiceBySlug(this.serviceSlug());
    this.fetchCategories();
  }

  fetchServiceBySlug(slug: string) {
    this.strapiService.getServiceBySlug(slug).subscribe({
      next: (value) => {
        // console.log(value.data[0]);
        this.serviceData.set(value.data[0]);
        this.seoService.updateSeo(this.seoData());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  fetchCategories() {
    this.strapiService.getCategories().subscribe({
      next: (value) => {
        this.myServices.set(value.data);
        console.log(this.myServices());
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
