import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { Footer } from '@app/shared/components/footer/footer';
import { Header } from '@app/shared/components/header/header';
import { ScrollService } from '../../services/scroll.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  imports: [SHARED_MODULES, Header, Footer],
  templateUrl: './site-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayout implements AfterViewInit {
  private readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);
  @ViewChild('scroll') private readonly scroll: ElementRef<HTMLElement>;

  public ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollService.register(this.scroll);
      this.scrollService.listener(() => console.log(123));
    }
  }
}
