import { Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuickContacts } from '../shared/quick-contacts/quick-contacts';
import { GeneralInfoService } from '../../services/general-info.service';

export type NavLinkType = {
  label: string;
  link: string;
};

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, QuickContacts],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  menuOpen = signal(false);
  headerLinks = signal<NavLinkType[]>([
    { label: 'home', link: '' },
    { label: 'chi sono', link: '/chi-sono' },
    { label: 'servizi', link: '/servizi-offerti' },
    // { label: 'blog', link: '/blog' },
    { label: 'contatti', link: '/contatti' },
  ]);

  generalInfoService = inject(GeneralInfoService);

  ngOnInit(): void {
    this.generalInfoService.loadGeneralInfo();
  }

  toggleMenu() {
    this.menuOpen.update((menu) => !menu);
  }
}
