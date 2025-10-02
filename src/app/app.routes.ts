import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { AboutMe } from './pages/about-me/about-me';
import { Services } from './pages/services/services';
import { ServicesDetail } from './pages/services-detail/services-detail';
import { ServiceInfos } from './pages/service-infos/service-infos';
import { Contacts } from './pages/contacts/contacts';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'chi-sono',
    component: AboutMe,
  },
  {
    path: 'servizi-offerti',
    component: Services,
  },

  {
    path: 'servizi-offerti/:serviceSlug',
    component: ServicesDetail,
  },
  {
    path: 'servizi-offerti/:serviceSlug/:infoServiceSlug',
    component: ServiceInfos,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'contatti',
    component: Contacts,
  },
];
