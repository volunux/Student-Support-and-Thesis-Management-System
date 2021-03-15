import { Component , Input , OnInit } from '@angular/core';
import { General } from '../../../interfaces/general';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-file-attachments-two',
  
  'templateUrl' : './file-attachments-two.component.html',

  'styleUrls' : ['./file-attachments-two.component.css'] ,

  'animations' : [fadeAnimation]

})

export class FileAttachmentsTwoComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : General;

}
