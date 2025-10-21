import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element/bundle';

import { CustomerReview } from '../../shared/customer-review/customer-review';
import { ReviewInterface } from '../../../pages/homepage/home.interface';
import { CarouselModule } from 'primeng/carousel';

register();

@Component({
  selector: 'app-reviews-slider',
  imports: [CustomerReview, CarouselModule],
  templateUrl: './reviews-slider.html',
  styleUrl: './reviews-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsSlider {
  swiperEl = viewChild<ElementRef>('mySwiperEl');
  reviews = input.required<ReviewInterface[]>();

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];

  autoplay = computed(() =>
    this.reviews().length > 3
      ? { delay: 1000, disableOnInteraction: false }
      : false
  );

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    // console.log(progress);
  }

  onSlideChange() {
    // console.log('slide changed');
  }

  ngOnInit() {
    console.log(this.reviews());
  }
}
