import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CounterComponent]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
