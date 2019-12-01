import {Directive, HostListener, Input} from '@angular/core';
import * as screenfull from 'screenfull';
import {Screenfull} from 'screenfull';

@Directive({
  selector: '[appToggleFullscreen]'
})
export class ToggleFullscreenDirective {
  @Input()
  ref: Element;

  @HostListener('click') onClick() {
    (screenfull as Screenfull).toggle(this.ref);
  }
}
