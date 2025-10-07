import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { ServiceCard } from '../../shared/service-card/service-card';

@Component({
  selector: 'app-service-home',
  imports: [Button, ServiceCard],
  templateUrl: './service-home.html',
  styleUrl: './service-home.css',
})
export class ServiceHome {}
