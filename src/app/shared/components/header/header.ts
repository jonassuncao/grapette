import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { ScrollService } from '@service/scroll.service';

@Component({
  selector: 'app-header',
  imports: [SHARED_MODULES],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements AfterViewInit {
  private readonly scrollService = inject(ScrollService);
  public scrolled = signal(false);

  public ngAfterViewInit() {
    this.scrollService
      .listener((container) =>
        this.scrolled.set(container.nativeElement.scrollTop > 10)
      )
      .subscribe();
  }

  public onScroll(fragment: string) {
    const tryScroll = () => {
      const el = document.getElementById(fragment);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        requestAnimationFrame(tryScroll);
      }
    };
    tryScroll();
  }
}
