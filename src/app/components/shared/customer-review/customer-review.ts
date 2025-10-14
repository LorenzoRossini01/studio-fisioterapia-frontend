import { Component, input } from '@angular/core';
import { ReviewInterface } from '../../../pages/homepage/home.interface';

@Component({
  selector: 'app-customer-review',
  imports: [],
  templateUrl: './customer-review.html',
  styleUrl: './customer-review.css',
})
export class CustomerReview {
  review = input.required<ReviewInterface>();

  fullStars = () => Array(Math.floor(this.review().rating)).fill(0);
  hasHalfStar = () => this.review().rating % 1 >= 0.5;
  emptyStars = () => Array(5 - Math.ceil(this.review().rating)).fill(0);
}
