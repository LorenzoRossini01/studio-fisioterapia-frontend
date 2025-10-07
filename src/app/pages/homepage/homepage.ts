import { Component } from '@angular/core';
import { Hero } from '../../components/sections/hero/hero';
import { ServiceHome } from '../../components/sections/service-home/service-home';
import { ChiSonoHome } from '../../components/sections/chi-sono-home/chi-sono-home';
import { MoreInfo } from '../../components/shared/more-info/more-info';
import { ReviewsSlider } from '../../components/sections/reviews-slider/reviews-slider';

@Component({
  selector: 'app-homepage',
  imports: [Hero, ServiceHome, ChiSonoHome, MoreInfo, ReviewsSlider],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
