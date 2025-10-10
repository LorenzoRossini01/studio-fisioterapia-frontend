import { Component, inject, input, output } from '@angular/core';
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
  handleClick() {
    this.onClick.emit();
  }
}
