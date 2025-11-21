import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  imports: [SHARED_MODULES, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeremonyComponent  {
}
