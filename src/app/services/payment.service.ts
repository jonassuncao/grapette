import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { RecaptchaService } from './recaptcha.service';

declare var MercadoPago: any;

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly recaptchaService = inject(RecaptchaService);
  private isBrowser = false;
  private payment$ = new BehaviorSubject<any>(null);

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public async init() {
    if (this.isBrowser) {
      while (true) {
        if (typeof MercadoPago === 'undefined') {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }
        this.payment$.next(new MercadoPago(environment.payment.key));
        break;
      }
    }
  }

  public preference(body: any): Observable<any> {
    return this.recaptchaService
      .execute((recaptcha) =>
        this.http.post<any>(`${environment.api}/api/payment`, {
          ...body,
          recaptcha,
        }),
      )
      .pipe(take(1));
  }

  public paymentTo(body: any): Observable<any> {
    return this.payment$.pipe(switchMap(() => this.preference(body)));
  }
}
