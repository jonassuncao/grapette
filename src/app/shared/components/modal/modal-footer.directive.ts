import { Directive } from '@angular/core';

@Directive({
  selector: '[app-modal-footer]',
  host: { class: 'relative z-80 flex justify-end px-8 pb-8' },
})
export class ModalFooterDirective {}
