import { Component, signal } from '@angular/core';
import { Button } from '../../shared/button/button';
import { CommonModule } from '@angular/common';

interface Image {
  src: string;
  span: number; // 1 = colonna singola, 2 = colonna doppia
}

@Component({
  selector: 'app-image-gallery',
  imports: [Button, CommonModule],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery {
  allImages: Image[] = [
    { src: 'https://picsum.photos/1920/1080', span: 2 },
    { src: 'https://picsum.photos/1920/1080', span: 1 },
    { src: 'https://picsum.photos/1920/1080', span: 1 },
    { src: 'https://picsum.photos/1920/1080', span: 2 },
    { src: 'https://picsum.photos/1920/1080', span: 2 },
    { src: 'https://picsum.photos/1920/1080', span: 1 },
    { src: 'https://picsum.photos/1920/1080', span: 1 },
    { src: 'https://picsum.photos/1920/1080', span: 1 },
    { src: 'https://picsum.photos/1920/1080', span: 1 },
    // aggiungi tutte le tue immagini qui
  ];

  visibleCount = signal(4); // quante foto mostrare inizialmente
  get visibleImages() {
    return this.allImages.slice(0, this.visibleCount());
  }

  showMore() {
    this.visibleCount.update((count) => count + 2);
  }

  hasMore() {
    return this.visibleCount() < this.allImages.length;
  }
}
