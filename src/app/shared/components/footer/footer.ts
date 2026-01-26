import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';

@Component({
  selector: 'app-footer',
  imports: [SHARED_MODULES],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly year = new Date();
}
