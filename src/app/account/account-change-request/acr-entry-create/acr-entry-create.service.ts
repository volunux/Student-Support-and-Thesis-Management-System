import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { AccountChangeRequest } from '../account-change-request';
import { General } from '../general';
import { Api_Token , Api } from '../../../configuration';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Injectable()

export class AccountChangeRequestEntryCreateService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'Account Change Request';

  public $sa : string = 'account-change-request'; 
 
  public addEntry() : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(2000) ,

          map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public addEntry$(request : AccountChangeRequest) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.post<AccountChangeRequest>(link , request)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : AccountChangeRequest) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

        return of(result as T);

      }
  }

}
