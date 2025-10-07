import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-article-preview',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-article-preview.html',
  styleUrl: './blog-article-preview.css',
})
export class BlogArticlePreview {
  article = signal({
    imageUrl: 'https://picsum.photos/200/300',
    title: 'Prova',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vero a iure officia expedita nulla nihil eaque repudiandae voluptates blanditiis repellendus, veritatis, dolor ratione necessitatibus aliquam. Quia voluptates voluptatem deleniti?',
    link: '/',
    date: new Date(),
  });
}
