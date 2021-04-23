import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap , timeout } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { AccountChangeRequest } from '../account-change-request';
import { General } from '../general';
import { Api_Token , Api } from '../../../configuration';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Injectable()

export class AcrSendMailService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'Account Change Request';

  public $sa : string = 'account-change-request'; 

  public getEntryStatus(entry : string) : Observable<AccountChangeRequest> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/status`;

  	return this.http.get<AccountChangeRequest>(link)
       
       .pipe(

          tap((entry : AccountChangeRequest) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public getEntryMessageType(entry : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/message-type`;

    return this.http.get<General>(link)
       
       .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public getEntryMessageTypeList(entry : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/message-type-list`;

    return this.http.get<General>(link)
       
       .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public getMessageDetail(entry : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/message-type/detail`;

    return this.http.get<General>(link)
       
       .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public sendMail$(entry : string , body : AccountChangeRequest) : Observable<any> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/send-mail`;

    return this.http.put<AccountChangeRequest>(link , body)

      .pipe(

          tap((value) => console.log(value)) ,

          delay(2000) ,

          map((entry : AccountChangeRequest) => { return {'updated' : true , '$data' : entry}; }) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )

  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : any) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
