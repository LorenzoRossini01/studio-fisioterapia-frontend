import { Component, computed, input, signal } from '@angular/core';
import {
  BioTextImageInterface,
  RichTextBlockInterface,
  SpecializationInterface,
  ValueItemInterface,
} from '../../../pages/about-me/about-me.interface';
import { parseRichText } from '../../../utility/parseRichText';

@Component({
  selector: 'app-presentazione-about',
  imports: [],
  templateUrl: './presentazione-about.html',
  styleUrl: './presentazione-about.css',
})
export class PresentazioneAbout {
  curriculumCertificazioniRichText = input.required<RichTextBlockInterface[]>();
  bioText = input.required<BioTextImageInterface>();

  specializzazioni = input<SpecializationInterface[]>();

  valori = input<ValueItemInterface[]>();

  bioTextRichText = computed(() => {
    return parseRichText(this.bioText().text);
  });
  curriculumCertificazioni = computed(() => {
    return parseRichText(this.curriculumCertificazioniRichText());
  });
}
