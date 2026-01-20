import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import SHARED_MODULES from './shared';
import { RecaptchaService } from '@service/recaptcha.service';
import { PaymentService } from '@service/payment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly recaptchaService = inject(RecaptchaService);
  private readonly paymentService = inject(PaymentService);
  private isBrowser = false;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.recaptchaService.init();
    this.paymentService.init();
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
