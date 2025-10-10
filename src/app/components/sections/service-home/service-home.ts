import { Component, inject, input, output, signal } from '@angular/core';
import { Button } from '../../shared/button/button';
import { ServiceCard } from '../../shared/service-card/service-card';
import { Router } from '@angular/router';
import {
  FeatureServiceSectionInterface,
  ServiceInterface,
} from '../../../pages/homepage/home.interface';

@Component({
  selector: 'app-service-home',
  imports: [Button, ServiceCard],
  templateUrl: './service-home.html',
  styleUrl: './service-home.css',
})
export class ServiceHome {
  featuredServicesData = input.required<FeatureServiceSectionInterface>();
  onClick = output();
  handleClick() {
    this.onClick.emit();
  }
}
