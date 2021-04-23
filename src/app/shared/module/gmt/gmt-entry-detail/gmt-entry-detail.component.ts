import { Component , ElementRef , Input , OnInit , ViewChild } from '@angular/core';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gmt-entry-detail',

  'templateUrl' : './gmt-entry-detail.component.html',

  'styleUrls' : ['./gmt-entry-detail.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralMessageTemplateEntryDetailComponent implements OnInit {

  constructor() { 

  }

  @ViewChild('datacontainer') dataContainer : ElementRef;

  ngOnInit() : void {

    setTimeout(() => {

    if (this.dataContainer != null && this.entry != null) this.dataContainer.nativeElement.innerHTML = this.entry.body;

    } , 0);
  
  }

  ngAfterContentChecked() : void {

  }

  ngDoCheck() : void {

  }

  @Input() public entry : any;

}
