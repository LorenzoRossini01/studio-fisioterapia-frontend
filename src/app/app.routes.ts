import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'chi-sono',
    loadComponent() {
      return import('./pages/about-me/about-me').then((m) => m.AboutMe);
    },
  },
  {
    path: 'servizi-offerti',
    loadComponent() {
      return import('./pages/services/services').then((m) => m.Services);
    },
  },

  {
    path: 'servizi-offerti/:categorySlug',
    loadComponent() {
      return import('./pages/services-detail/services-detail').then(
        (m) => m.ServicesDetail
      );
    },
  },
  {
    path: 'servizi-offerti/:categorySlug/:serviceSlug',
    loadComponent() {
      return import('./pages/service-infos/service-infos').then(
        (m) => m.ServiceInfos
      );
    },
  },
  {
    path: 'blog',
    loadComponent() {
      return import('./pages/blog/blog').then((m) => m.Blog);
    },
  },
  {
    path: 'contatti',
    loadComponent() {
      return import('./pages/contacts/contacts').then((m) => m.Contacts);
    },
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy').then(
        (m) => m.PrivacyPolicy
      ),
  },
  {
    path: 'cookie-policy',
    // component: CookiePolicy,
    loadComponent: () =>
      import('./pages/cookie-policy-policy/cookie-policy-policy').then(
        (m) => m.CookiePolicyPolicy
      ),
  },
];
