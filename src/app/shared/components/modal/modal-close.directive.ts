import { DialogRef } from '@angular/cdk/dialog';
import { Directive, HostListener, Input, Optional } from '@angular/core';

@Directive({
  selector: '[dialogClose]',
})
export class ModalCloseDirective {
  @Input() public dialogClose: any;

  constructor(@Optional() public dialogRef: DialogRef<any>) {}

  @HostListener('click') public click() {
    this?.dialogRef?.close(this.dialogClose);
  }
}
