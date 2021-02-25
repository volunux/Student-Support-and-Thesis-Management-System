import { Directive , Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Directive({

  'selector' : '[appFroalaInitializer]'

})

export class FroalaInitializerDirective {

  constructor(@Inject(DOCUMENT) private readonly document: any) { 

  }

  public cleaner : any = {'clean' : () => {

    return setTimeout(() => { let logo = this.document.getElementById('fr-logo');

      if (logo != null) { logo.parentNode.removeChild(logo);

        this.cleaner.clean = null; } } , 0); }
  }
​
  ngOnInit() {

  }

  ngDoCheck() {  

    if (this.cleaner.clean) { this.cleaner.clean(); }

  }

  ngOnDestroy() {

  }

}