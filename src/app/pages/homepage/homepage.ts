import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../components/sections/hero/hero';
import { ServiceHome } from '../../components/sections/service-home/service-home';
import { ChiSonoHome } from '../../components/sections/chi-sono-home/chi-sono-home';
import { MoreInfo } from '../../components/shared/more-info/more-info';
import { ReviewsSlider } from '../../components/sections/reviews-slider/reviews-slider';
import { Router } from '@angular/router';
import { StrapiService } from '../../services/strapi.service';
import { HomeInterface } from './home.interface';

@Component({
  selector: 'app-homepage',
  imports: [Hero, ServiceHome, ChiSonoHome, MoreInfo, ReviewsSlider],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  private router = inject(Router);
  handleClick(path: string) {
    this.router.navigate([path]);
  }
  private strapiService = inject(StrapiService);
  homeData = signal<HomeInterface>({
    id: 0,
    documentId: '',
    title: null,
    subtitle: null,
    hero: undefined,
    about_preview: undefined,
    featured_service: undefined,
    reviews_section: [],
    cta_section: undefined,
    seo: undefined,
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  });

  ngOnInit(): void {
    this.fetchHomeData();
  }

  fetchHomeData() {
    this.strapiService.getHome().subscribe({
      next: (value) => {
        this.homeData.set(value.data);

        // console.log(this.homeData());
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
