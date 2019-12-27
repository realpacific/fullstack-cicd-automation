import {Directive, HostListener} from '@angular/core';
import * as screenfull from 'screenfull';
import {Screenfull} from 'screenfull';

@Directive({
  selector: '[appToggleFullscreen]'
})
export class ToggleFullscreenDirective {

  @HostListener('click') onClick() {
    (screenfull as Screenfull).toggle();
  }
}
