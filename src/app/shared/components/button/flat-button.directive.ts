import { Directive } from '@angular/core';

@Directive({
  selector: '[app-flat-button]',
  host: {
    class:
      'flex p-6 transition-all duration-300 shadow-xl active:brightness-125 shadow-black/30 rounded-3xl disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not([disabled])]:brightness-110',
  },
})
export class FlatButtonDirective {}
