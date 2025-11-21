import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { STANDARD } from '@app/shared';
import { set } from 'date-fns';

const CERIMONY = {
  year: 2026,
  month: 3,
  date: 19,
  hours: 10,
  minutes: 30,
};
const ZERO = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  imports: [STANDARD],
  host: { ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  public readonly platformId = inject(PLATFORM_ID);
  private readonly target = set(new Date(), CERIMONY);

  public ngOnInit() {
    this.initCount();
  }

  private async initCount() {
    if (isPlatformBrowser(this.platformId)) {
      const Tick = (await import('@pqina/flip')).default;
      this.translate(Tick);
      Tick.DOM.create(document.querySelector('.tick'), {
        didInit: (tick) => {
          const counter = Tick.count.down(this.target.toISOString());
          counter.onupdate = (value) => (tick.value = value);
        },
      });
    }
  }

  private translate(tick: any) {
    const keys = {
      YEAR_PLURAL: 'Anos',
      YEAR_SINGULAR: 'Ano',
      MONTH_PLURAL: 'Meses',
      MONTH_SINGULAR: 'Mes',
      WEEK_PLURAL: 'Semanas',
      WEEK_SINGULAR: 'Semana',
      DAY_PLURAL: 'Dias',
      DAY_SINGULAR: 'Dia',
      HOUR_PLURAL: 'Horas',
      HOUR_SINGULAR: 'Hora',
      MINUTE_PLURAL: 'Minutos',
      MINUTE_SINGULAR: 'Minuto',
      SECOND_PLURAL: 'Segundos',
      SECOND_SINGULAR: 'Segundo',
      MILLISECOND_PLURAL: 'Milissegundos',
      MILLISECOND_SINGULAR: 'Milissegundo',
    };

    Object.entries(keys).forEach(([key, value]) =>
      tick.options.setConstant(key, value)
    );
  }
}
