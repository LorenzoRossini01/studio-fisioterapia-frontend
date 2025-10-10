import {
  Component,
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

register();

@Component({
  selector: 'app-reviews-slider',
  imports: [CustomerReview],
  templateUrl: './reviews-slider.html',
  styleUrl: './reviews-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsSlider {
  swiperEl = viewChild<ElementRef>('mySwiperEl');
  reviews = input.required<ReviewInterface[]>();

  brakepoints = JSON.stringify({
    0: { slidesPerView: 1, navigation: false },
    640: { slidesPerView: 1.5, navigation: false },
    768: { slidesPerView: 2, navigation: false },
    1024: { slidesPerView: 3, navigation: { enabled: true } },
  });
  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    // console.log(progress);
  }

  onSlideChange() {
    // console.log('slide changed');
  }
}
