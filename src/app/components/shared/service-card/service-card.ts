import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  hasShadow = input<boolean>(false);
  card = signal({
    imageUrl: 'https://picsum.photos/200/300',
    title: 'Prova',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vero a iure officia expedita nulla nihil eaque repudiandae voluptates blanditiis repellendus, veritatis, dolor ratione necessitatibus aliquam. Quia voluptates voluptatem deleniti?',
    link: { label: 'Scopri di più', link: '/' },
  });
}
