import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable()

export class GeneralMessageTemplateEntryChangeService {

  constructor() { 

  }

  public isEntryChanged : Subject<boolean> = new Subject<boolean>();

  public isEntryChanged$ : Observable<boolean> = this.isEntryChanged.asObservable();

}
