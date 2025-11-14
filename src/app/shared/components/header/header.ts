import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';

@Component({
  selector: 'app-header',
  imports: [SHARED_MODULES],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
