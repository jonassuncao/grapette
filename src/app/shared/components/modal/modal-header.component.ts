import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  host: {
    class:
      'relative flex justify-between px-8 pt-8 text-[1.75rem] font-semibold',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalHeaderComponent {}
