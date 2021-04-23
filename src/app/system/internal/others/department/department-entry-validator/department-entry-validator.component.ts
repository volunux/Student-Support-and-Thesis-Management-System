import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-department-entry-validator',

  'templateUrl' : './department-entry-validator.component.html',

  'styleUrls' : ['./department-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class DepartmentEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public abbreviation : FormControl; 

  @Input() public faculty : FormControl; 
}
