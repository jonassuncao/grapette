import { Directive } from '@angular/core';

@Directive({
  selector: '[app-divider]',
  host: {
    class:
      'block m-0 my-8 border border-solid border-top-[1px] border-zinc-100',
  },
})
export class DividerDirective {}
