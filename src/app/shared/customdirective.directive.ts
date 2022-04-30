import { Directive,ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {
      @HostBinding('style.border')b:string=''

  // constructor(private ele:ElementRef) {
  //   this.ele.nativeElement.style.border="2px solid blue"

  //  }
  @HostListener('mouseover')onMouseOver(){this.b='5px dotted pink'}
  @HostListener('mouseleave')onMouseLeave(){this.b=''}
  
}

// <appCustomdirective></appCustomdirective>
// <h3 appCustomdirective></h3>
// <h3 class="appCustomdirective"></h3>