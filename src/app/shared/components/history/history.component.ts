import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { GameComponent } from "../game/game.component";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  imports: [SHARED_MODULES, GameComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {}
