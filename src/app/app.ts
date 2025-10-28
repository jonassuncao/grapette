import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import SHARED_MODULES from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('grapette');
}
