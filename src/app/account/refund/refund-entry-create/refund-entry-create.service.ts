import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Refund } from '../refund';
import { General } from '../general';
import { Api_Token , Api } from '../../../configuration';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Injectable()

export class RefundEntryCreateService {


  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'Refund';

  public aurl : string = 'refund'

  public addEntry() : Observable<General> {

    let link = `${this.apiConfig.host}/${this.aurl}/entry/create`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((permitted : General) => { return { 'permitted' : true }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public addEntry$(request : Refund) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.aurl}/entry/create`;

    return this.http.post<Refund>(link , request)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : Refund) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<Refund>(`${this.$systemType} Entry` , null))
        )
  }


  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
