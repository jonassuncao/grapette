import { ChangeDetectionStrategy, Component } from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CeremonyComponent } from '../../shared/components/ceremony/ceremony.component';
import { GiftComponent } from '../../shared/components/gift/gift.component';
import { HistoryComponent } from '../../shared/components/history/history.component';

@Component({
  standalone: true,
  imports: [
    SHARED_MODULES,
    BannerComponent,
    CeremonyComponent,
    HistoryComponent,
    GiftComponent,
  ],
  templateUrl: './main-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {}
