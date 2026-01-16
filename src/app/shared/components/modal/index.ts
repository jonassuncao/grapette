import { BUTTONS } from '../button';
import { DividerDirective } from '../divider';
import { ModalCloseDirective } from './modal-close.directive';
import { ModalContentDirective } from './modal-content.directive';
import { ModalFooterDirective } from './modal-footer.directive';
import { ModalHeaderComponent } from './modal-header.component';

export const MODAL = [
  ModalHeaderComponent,
  ModalCloseDirective,
  ModalContentDirective,
  ModalFooterDirective,
  DividerDirective,
  ...BUTTONS,
];
