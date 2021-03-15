import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-department-form-input',

  'templateUrl' : './department-form-input.component.html',

  'styleUrls' : ['./department-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class DepartmentFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };


  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get abbreviation() : FormControl {

  	return this.entryForm.get('abbreviation') as FormControl;
  }

  get faculty() : FormControl {

    return this.entryForm.get('faculty') as FormControl;
  }

}
