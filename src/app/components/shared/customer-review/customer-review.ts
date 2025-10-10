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
}
