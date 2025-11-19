import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  imports: [CounterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
