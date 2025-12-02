import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import SHARED_MODULES from '@app/shared';
import {
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  imports: [SHARED_MODULES, CarouselModule, Logo],
  host: { ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnInit {
  public current$: Observable<any>;
  public loading = signal(true);
  public imgs = signal([
    'assets/min/antesdosim-100.webp',
    'assets/min/antesdosim-101.webp',
    'assets/min/antesdosim-111.webp',
    'assets/min/antesdosim-115.webp',
    'assets/min/antesdosim-117.webp',
    'assets/min/antesdosim-11.webp',
    'assets/min/antesdosim-121.webp',
    'assets/min/antesdosim-126.webp',
    'assets/min/antesdosim-128.webp',
    'assets/min/antesdosim-12.webp',
    'assets/min/antesdosim-142.webp',
    'assets/min/antesdosim-143.webp',
    'assets/min/antesdosim-152.webp',
    'assets/min/antesdosim-154.webp',
    'assets/min/antesdosim-156.webp',
    'assets/min/antesdosim-162.webp',
    'assets/min/antesdosim-169.webp',
    'assets/min/banner.webp',
    'assets/min/antesdosim-174.webp',
    'assets/min/antesdosim-180.webp',
    'assets/min/antesdosim-181.webp',
    'assets/min/antesdosim-196.webp',
    'assets/min/antesdosim-199.webp',
    'assets/min/antesdosim-208.webp',
    'assets/min/antesdosim-209.webp',
    'assets/min/antesdosim-211.webp',
    'assets/min/antesdosim-217.webp',
    'assets/min/antesdosim-223.webp',
    'assets/min/antesdosim-226.webp',
    'assets/min/antesdosim-227.webp',
    'assets/min/antesdosim-230.webp',
    'assets/min/antesdosim-234.webp',
    'assets/min/antesdosim-28.webp',
    'assets/min/antesdosim-29.webp',
    'assets/min/antesdosim-33.webp',
    'assets/min/antesdosim-34.webp',
    'assets/min/antesdosim-43.webp',
    'assets/min/antesdosim-44.webp',
    'assets/min/antesdosim-48.webp',
    'assets/min/antesdosim-65.webp',
    'assets/min/antesdosim-66.webp',
    'assets/min/antesdosim-77.webp',
    'assets/min/antesdosim-78.webp',
    'assets/min/antesdosim-81.webp',
    'assets/min/antesdosim-84.webp',
    'assets/min/antesdosim-94.webp',
    'assets/min/antesdosim-96.webp',
    'assets/min/antesdosim-9.webp',
  ]);
  public current = signal(null);
  public readonly options: OwlOptions = {
    margin: 10,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    lazyLoad: true,
    autoplay: true,
    responsive: {
      0: {
        items: 3,
      },
      700: {
        margin: 20,
        items: 5,
      },
      900: {
        margin: 20,
        items: 10,
      },
      1100: {
        margin: 40,
        items: 7,
      },
    },
  };

  public ngOnInit() {
    this.onSelect(0);
  }

  public onSelect(index: any) {
    const url = this.imgs()[index];
    const preview = url.replace(/assets\/[^\/]+\//, 'assets/images/');
    if (this.current() !== preview) {
      this.loading.set(true);
    }
    this.current.set(preview);
  }

  public onChange(event: SlidesOutputData) {
    this.onSelect(event.startPosition);
  }
}
