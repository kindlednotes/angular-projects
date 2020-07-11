import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActionBtn]'
})
export class ActionBtnDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style['justify-content'] = 'space-around';
    eleRef.nativeElement.style.width = '50%';
  }
}

