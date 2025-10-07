import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

import { CustomerReview } from '../../shared/customer-review/customer-review';
import { isPlatformBrowser } from '@angular/common';

register();

@Component({
  selector: 'app-reviews-slider',
  imports: [CustomerReview],
  templateUrl: './reviews-slider.html',
  styleUrl: './reviews-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsSlider {
  // @ViewChild('mySwiperEl', { static: true }) swiperEl!: ElementRef;
  swiperEl = viewChild<ElementRef>('mySwiperEl');
  reviews = signal([1, 2, 3, 4, 5]);

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    // console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }
}
