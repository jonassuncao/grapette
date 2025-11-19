import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [SHARED_MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {}
