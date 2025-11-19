import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  imports: [SHARED_MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftComponent {}
