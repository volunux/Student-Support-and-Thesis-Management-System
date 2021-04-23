import { Component , Input , OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , Router } from '@angular/router';

@Component({

  'selector' : 'app-pagination',

  'templateUrl' : './pagination.component.html',

  'styleUrls' : ['./pagination.component.css'] ,

})

export class PaginationComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router) { 

  }

  ngOnInit() : void {
  
  }

  @Input('entries-length') public $entriesLength : number;

  @Input('page-number') public pageNumber : number;

  @Input('entry-ref') public $entryRef : string;

  @Input('is-loading') public isLoading : boolean = false;

  public homePage(num) : void {

    this.router.navigate(["./"] , {'relativeTo' : this.route , 'skipLocationChange' : true });

  }

  public nextPage(num) : void {

    this.router.navigate(["./"] , {'queryParams' : {"page" : num + 1 } , 'relativeTo' : this.route , 'skipLocationChange' : true });

  }

  public prevPage(num) : void {

    this.router.navigate(["./"] , {'queryParams' : {"page" : num - 1 == 1 ? null : num - 1} , 'relativeTo' : this.route , 'skipLocationChange' : true });

  }

}
