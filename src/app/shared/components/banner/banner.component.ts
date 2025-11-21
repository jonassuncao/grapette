import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ScrollService } from '@service/scroll.service';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  imports: [CounterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements AfterViewInit {
  private readonly renderer = inject(Renderer2);

  private readonly scrollService = inject(ScrollService);
  @ViewChild('banner') private readonly banner: ElementRef<HTMLElement>;

  public ngAfterViewInit() {
    this.scrollService
      .listener((container) => {
        const scrolled = container.nativeElement.scrollTop;
        this.renderer.setStyle(
          this.banner.nativeElement,
          'transform',
          `translateY(${scrolled * 0.5}px)`
        );
      })
      .subscribe();
  }
}
