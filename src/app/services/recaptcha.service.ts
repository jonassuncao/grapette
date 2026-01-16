import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

declare var grecaptcha: any;

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  private isBrowser = false;
  private recaptcha$ = new BehaviorSubject<any>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public init() {
    if (this.isBrowser) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${environment.recaptcha.key}`;
      script.async = true;
      script.onload = async () => {
        while (true) {
          if (typeof grecaptcha === 'undefined') {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            continue;
          }
          this.recaptcha$.next(grecaptcha);
          break;
        }
      };
      document.body.appendChild(script);
    }
  }

  public generateKey(): Observable<string> {
    return new Observable<string>((observer) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(environment.recaptcha.key, { action: 'submit' })
          .then((token) => observer.next(token))
          .catch((error) => observer.error(error));
      });
    });
  }

  public execute<T>(
    route: (recaptcha: string) => Observable<T>
  ): Observable<T> {
    return this.generateKey().pipe(
      take(1),
      switchMap((recaptcha) => route(recaptcha))
    );
  }
}
