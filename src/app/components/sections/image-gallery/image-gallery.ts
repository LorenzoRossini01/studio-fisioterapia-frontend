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
    { src: 'https://picsum.photos/920/1080', span: 1 },
    { src: 'https://picsum.photos/1200/1080', span: 1 },
    { src: 'https://picsum.photos/2920/1080', span: 2 },
    { src: 'https://picsum.photos/1520/1080', span: 2 },
    { src: 'https://picsum.photos/1320/1080', span: 1 },
    { src: 'https://picsum.photos/1620/1080', span: 1 },
    { src: 'https://picsum.photos/1720/1080', span: 1 },
    { src: 'https://picsum.photos/1550/1080', span: 1 },
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

  selectedIndex = signal<number | null>(null);
  openImage(index: number) {
    this.selectedIndex.set(index);
    document.body.style.overflow = 'hidden'; // blocca scroll sotto
  }

  closeImage() {
    this.selectedIndex.set(null);
    document.body.style.overflow = ''; // riattiva scroll
  }

  nextImage() {
    const current = this.selectedIndex();
    if (current === null) return;
    const next = (current + 1) % this.allImages.length;
    this.selectedIndex.set(next);
  }

  prevImage() {
    const current = this.selectedIndex();
    if (current === null) return;
    const prev = (current - 1 + this.allImages.length) % this.allImages.length;
    this.selectedIndex.set(prev);
  }

  get selectedImage() {
    const index = this.selectedIndex();
    return index !== null ? this.allImages[index] : null;
  }
}
