import { Directive } from '@angular/core';

@Directive({
  selector: '[app-button]',
  host: {
    class:
      'flex px-5 py-4 text-xl cursor-pointer transition-all relative duration-300 active:brightness-125 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not([disabled])]:brightness-110 rounded-xl outline-0',
  },
})
export class ButtonDirective {}
