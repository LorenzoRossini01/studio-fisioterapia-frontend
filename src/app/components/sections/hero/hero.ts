import { Component, computed, inject, input, output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Router } from '@angular/router';
import { HeroInterface } from '../../../pages/homepage/home.interface';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  heroData = input.required<HeroInterface>();
  onClick = output();

  textAlign = computed(() => {
    return this.heroData().align ?? 'center';
  });

  heroBackground = computed(() => {
    return (
      this.heroData().background?.formats?.large?.url ??
      this.heroData().background?.url ??
      ''
    );
  });
  handleClick() {
    this.onClick.emit();
  }
}
