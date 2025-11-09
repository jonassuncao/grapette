import { Routes } from '@angular/router';
import { SiteLayout } from './layouts/site-layout/site-layout';
import { MainPage } from './pages/main-page/main-page';

export const routes: Routes = [
  {
    path: '',
    component: SiteLayout,
    children: [
      {
        path: '',
        component: MainPage,
      },
    ],
  },
];
