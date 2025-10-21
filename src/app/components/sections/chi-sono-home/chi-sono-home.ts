import { Component, computed, inject, input, output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Router } from '@angular/router';
import { AboutPreviewInterface } from '../../../pages/homepage/home.interface';
import { parseRichText } from '../../../utility/parseRichText';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chi-sono-home',
  imports: [Button, CommonModule],
  templateUrl: './chi-sono-home.html',
  styleUrl: './chi-sono-home.css',
})
export class ChiSonoHome {
  aboutHomeData = input.required<AboutPreviewInterface>();
  onClick = output();

  aboutText = computed(() => {
    return parseRichText(this.aboutHomeData().text);
  });

  invertOnMobile = computed(() => {
    return this.aboutHomeData().invert_on_mobile || false;
  });

  imagePosition = computed(() => {
    return this.aboutHomeData().image_position === 'right' ? true : false;
  });

  sectionImage = computed(() => {
    return (
      this.aboutHomeData().image?.formats?.medium?.url ||
      this.aboutHomeData().image?.url
    );
  });
  handleClick() {
    this.onClick.emit();
  }
}
