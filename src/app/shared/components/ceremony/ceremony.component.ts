import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import SHARED_MODULES from '@app/shared';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  imports: [SHARED_MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeremonyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
