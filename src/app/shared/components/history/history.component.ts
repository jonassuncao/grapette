import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { head } from 'lodash';
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  imports: [SHARED_MODULES, GameComponent, CarouselModule],
  host: { ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnInit {
  public current$: Observable<any>;
  public imgs = signal([
    'assets/images/banner.webp',
    '/assets/images/antesdosim-247.webp',
    'assets/images/banner.webp',
    '/assets/images/antesdosim-247.webp',
    'assets/images/banner.webp',
    '/assets/images/antesdosim-247.webp',
    'assets/images/banner.webp',
    '/assets/images/antesdosim-247.webp',
  ]);
  public current = signal(null);
  public readonly options: OwlOptions = {
    margin: 20,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    items: 4,
    autoplay: false,
  };
  @ViewChild(CarouselComponent) private carousel: CarouselComponent;

  public ngOnInit() {
    this.current.set(head(this.imgs()));
  }

  public onSelect(index: any) {
    this.carousel.moveByDot(index);
    this.current.set(this.imgs()[index]);
  }

  public onChange(event: SlidesOutputData) {
    this.current.set(this.imgs()[event.startPosition]);
  }
}
