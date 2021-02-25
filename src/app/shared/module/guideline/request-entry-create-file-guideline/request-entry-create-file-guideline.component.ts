import { Component , Input , OnInit } from '@angular/core';

@Component({
  
  'selector' : 'app-request-entry-create-file-guideline',

  'templateUrl' : './request-entry-create-file-guideline.component.html',

  'styleUrls' : ['./request-entry-create-file-guideline.component.css']

})

export class RequestEntryCreateFileGuidelineComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public view : string;

  @Input('system-guideline') systemGuideline : string;

  @Input('file-type') public fileType : string = 'Image';

  @Input('attachment-name') set attachmentName(atthName : string) {

  	if (atthName != null) this.fileType = atthName;
  }

}
