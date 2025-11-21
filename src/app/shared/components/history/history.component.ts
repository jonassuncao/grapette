import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  imports: [SHARED_MODULES, GameComponent, CarouselModule],
  host: { ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {}
