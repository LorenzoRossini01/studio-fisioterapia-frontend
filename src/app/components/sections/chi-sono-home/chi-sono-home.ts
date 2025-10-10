import { Component, computed, inject, input, output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Router } from '@angular/router';
import { AboutPreviewInterface } from '../../../pages/homepage/home.interface';
import { parseRichText } from '../../../utility/parseRichText';

@Component({
  selector: 'app-chi-sono-home',
  imports: [Button],
  templateUrl: './chi-sono-home.html',
  styleUrl: './chi-sono-home.css',
})
export class ChiSonoHome {
  aboutHomeData = input.required<AboutPreviewInterface>();
  onClick = output();

  aboutText = computed(() => {
    return parseRichText(this.aboutHomeData().text);
  });
  handleClick() {
    this.onClick.emit();
  }
}
