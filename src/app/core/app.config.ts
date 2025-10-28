import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from '../app.routes';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideCore } from './app.core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'shortDate' },
    },
    provideCore(),
    importProvidersFrom(AngularSvgIconModule.forRoot()),
  ],
};
