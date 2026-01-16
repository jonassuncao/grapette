import { Directive } from '@angular/core';

@Directive({
  selector: '[app-modal-content]',
  host: { class: 'relative block px-8 first:pt-8 last:pb-8 overflow-y-auto' },
})
export class ModalContentDirective {}
