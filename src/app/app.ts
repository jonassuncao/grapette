import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import SHARED_MODULES from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private isBrowser = false;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.position();
  }

  private position() {
    if (this.isBrowser) {
      const viewHeight = () => {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      viewHeight();
      window.addEventListener('resize', viewHeight);
    }
  }
}
