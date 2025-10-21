import { Component, computed, input, signal } from '@angular/core';
import {
  BioTextImageInterface,
  RichTextBlockInterface,
  SpecializationInterface,
  ValueItemInterface,
} from '../../../pages/about-me/about-me.interface';
import { parseRichText } from '../../../utility/parseRichText';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentazione-about',
  imports: [CommonModule],
  templateUrl: './presentazione-about.html',
  styleUrl: './presentazione-about.css',
})
export class PresentazioneAbout {
  curriculumCertificazioniRichText = input.required<RichTextBlockInterface[]>();
  bioText = input.required<BioTextImageInterface>();

  specializzazioni = input<SpecializationInterface[]>();

  valori = input<ValueItemInterface[]>();

  invertOnMobile = computed(() => {
    return this.bioText().invert_on_mobile;
  });

  bioTextRichText = computed(() => {
    return parseRichText(this.bioText().text);
  });
  curriculumCertificazioni = computed(() => {
    return parseRichText(this.curriculumCertificazioniRichText());
  });
}
