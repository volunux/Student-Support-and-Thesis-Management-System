import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable()

export class RequestEntryCreateService {

  constructor() { 

  }

  public isEntryCreated : Subject<boolean> = new Subject<boolean>();

  public isEntryCreated$ : Observable<boolean> = this.isEntryCreated.asObservable();

}
