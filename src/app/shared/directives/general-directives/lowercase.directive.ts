import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  
  'selector' : '[appLowercase]'

})

export class LowercaseDirective {

  constructor(public el : ElementRef) { 

  }

  @HostListener('blur') public lowercase(field : string) : void { let i = 0;

  	let $entry = this.el.nativeElement.value.replace(/\s+/g , '').toLowerCase();

  	this.el.nativeElement.value = $entry;

  }

  ngOnInit() {

  }

}
