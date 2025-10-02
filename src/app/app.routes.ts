import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { AboutMe } from './pages/about-me/about-me';
import { Services } from './pages/services/services';
import { ServicesDetail } from './pages/services-detail/services-detail';
import { ServiceInfos } from './pages/service-infos/service-infos';
import { Contacts } from './pages/contacts/contacts';

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
    path: 'contatti',
    component: Contacts,
  },
];
