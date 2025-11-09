import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';

@Component({
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './site-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayout {}
