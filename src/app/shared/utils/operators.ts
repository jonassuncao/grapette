import { MonoTypeOperatorFunction, OperatorFunction, of } from 'rxjs';
import { debounceTime, delay, filter, switchMap } from 'rxjs/operators';

export function notNull<T>(): MonoTypeOperatorFunction<T> {
  return filter((value) => !!value);
}

export function switchDelay<T>(time = 500): OperatorFunction<T, T> {
  return switchMap((v) => (v ? of(v).pipe(delay(time)) : of(v)));
}

export function debounceDelay<T>(value = 500): MonoTypeOperatorFunction<T> {
  return debounceTime(value);
}
