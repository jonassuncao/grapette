import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EnvironmentProviders, importProvidersFrom } from '@angular/core';

import { RouterModule } from '@angular/router';

export function provideCore(): EnvironmentProviders {
  registerLocaleData(localePt);

  return importProvidersFrom(RouterModule);
}
