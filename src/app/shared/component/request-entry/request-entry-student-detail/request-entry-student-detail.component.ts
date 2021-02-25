import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-request-entry-student-detail',

  'templateUrl' : './request-entry-student-detail.component.html',

  'styleUrls' : ['./request-entry-student-detail.component.css']

})

export class RequestEntryStudentDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

  }

  @Input() public entry : { [key : string] : any };

}
