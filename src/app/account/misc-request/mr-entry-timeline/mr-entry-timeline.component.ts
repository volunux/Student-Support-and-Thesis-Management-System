import { Component , Input , OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { MiscRequest } from '../misc-request';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-mr-entry-timeline',

  'templateUrl' : './mr-entry-timeline.component.html',

  'styleUrls' : ['./mr-entry-timeline.component.css'],

  'providers' : [] ,

  'animations' : [fadeAnimation]

})

export class MiscRequestEntryTimelineComponent implements OnInit {

  constructor() {

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  @Input() public entry : MiscRequest;

  @Input() public comments : General;

  ngOnInit() : void {
    
  }


}
