import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { RefundLetter } from './refund-letter';
import { General } from './general';
import { SearchQuery } from '../../general/search-query';
import { Api_Token , Api } from '../../configuration';
import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()

export class RefundLetterService {


  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public aurl : string = 'refund'

  public getEntry(entry : string) : Observable<RefundLetter> {

  	let	link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/write/letter`;

  	return this.http.get<RefundLetter>(link)
       
       .pipe(

          tap((entry : RefundLetter) => console.log(entry)) ,

          catchError(this.handleError<RefundLetter>(`${this.$systemType} Entry` , null))
        )
  }

  public getEntryLetter(entry : string) : Observable<RefundLetter> {

    let  link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/letter`;

    return this.http.get<RefundLetter>(link)
       
       .pipe(

          tap((entry : RefundLetter) => console.log(entry)) ,

          catchError(this.handleError<RefundLetter>(`${this.$systemType} Entry` , null))
        )
  }

  public $updateEntry(entry : string , request : RefundLetter) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/detail`;

    return this.http.put<RefundLetter>(link , request)

        .pipe(

          map((entry : RefundLetter) => { return { 'updated' : true , '$data' : entry }; }) ,

          catchError(this.handleError<RefundLetter>(`${this.$systemType} Entry` , null))

          );
  }



  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
