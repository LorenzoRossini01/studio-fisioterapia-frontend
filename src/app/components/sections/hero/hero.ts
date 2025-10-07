import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private router = inject(Router);
  handleClick() {
    this.router.navigate(['/contatti']);
  }
}
