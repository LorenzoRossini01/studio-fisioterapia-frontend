import { Component, input, signal } from '@angular/core';
import { Button } from '../../shared/button/button';
import { CommonModule } from '@angular/common';
import {
  MediaInterface,
  StudioImageInterface,
} from '../../../pages/about-me/about-me.interface';

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
  allImages = input.required<StudioImageInterface[]>();

  visibleCount = signal(2); // quante foto mostrare inizialmente
  get visibleImages() {
    return this.allImages().slice(0, this.visibleCount());
  }

  showMore() {
    this.visibleCount.update((count) => count + 2);
  }

  hasMore() {
    return this.visibleCount() < this.allImages().length;
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
    const next = (current + 1) % this.allImages().length;
    this.selectedIndex.set(next);
  }

  prevImage() {
    const current = this.selectedIndex();
    if (current === null) return;
    const prev =
      (current - 1 + this.allImages().length) % this.allImages().length;
    this.selectedIndex.set(prev);
  }

  get selectedImage() {
    const index = this.selectedIndex();
    return index !== null ? this.allImages()[index] : null;
  }
}
