import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { Footer } from '@app/shared/components/footer/footer';
import { Header } from '@app/shared/components/header/header';

@Component({
  standalone: true,
  imports: [SHARED_MODULES, Header, Footer],
  templateUrl: './site-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayout {}
