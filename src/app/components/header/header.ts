import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuickContacts } from '../shared/quick-contacts/quick-contacts';

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
export class Header {
  headerLinks = signal<NavLinkType[]>([
    { label: 'home', link: '' },
    { label: 'chi sono', link: '/chi-sono' },
    { label: 'servizi', link: '/servizi-offerti' },
    { label: 'blog', link: '/blog' },
    { label: 'contatti', link: '/contatti' },
  ]);
}
