import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STANDARD } from '@app/shared';

@Component({
  selector: 'app-logo',
  imports: [STANDARD],
  templateUrl: './logo.html',
  styleUrls: ['./logo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {}
