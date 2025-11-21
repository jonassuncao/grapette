import { ElementRef, Injectable } from '@angular/core';
import { notNull } from '@app/shared/utils';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private _scroll$ = new BehaviorSubject<ElementRef<HTMLElement>>(null);

  public register(scroll: ElementRef<HTMLElement>) {
    this._scroll$.next(scroll);
  }

  public listener(fn: any): Observable<void> {
    return this._scroll$.asObservable().pipe(
      notNull(),
      map((scroll) =>
        scroll?.nativeElement?.addEventListener('scroll', () => fn(scroll))
      )
    );
  }
}
