import { Component, computed, inject, signal } from '@angular/core';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { MyServices } from '../../components/shared/my-services/my-services';
import { OpeningTimes } from '../../components/shared/opening-times/opening-times';
import { ContactsForm } from '../../components/sections/contacts-form/contacts-form';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GeneralInfoService } from '../../services/general-info.service';

@Component({
  selector: 'app-contacts',
  imports: [PageTitle, MyServices, OpeningTimes, ContactsForm],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  contactsInfo = computed(() => [
    {
      title: 'Studio fisioterapia/osteopatia',
      text: this.generalInfoService.generalInfo()?.address,
    },
    {
      title: 'telefono',
      text: this.generalInfoService.generalInfo()?.phone_number,
    },
    {
      title: 'email',
      text: this.generalInfoService.generalInfo()?.email,
    },
  ]);

  generalInfoService = inject(GeneralInfoService);

  private sanitizer = inject(DomSanitizer);

  mapEmbed = computed<SafeHtml | null>(() => {
    const embed = this.generalInfoService.generalInfo()?.google_maps_embed;
    return embed ? this.sanitizer.bypassSecurityTrustHtml(embed) : null;
  });
}
