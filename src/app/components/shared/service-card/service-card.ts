import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceInterface } from '../../../pages/homepage/home.interface';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  service = input.required<ServiceInterface>();
  hasShadow = input<boolean>(false);
}
