import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap , timeout } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { AccountChangeRequest } from '../account-change-request';
import { General } from '../general';
import { Api_Token , Api } from '../../../configuration';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Injectable()

export class AcrUpdateService {

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

  public updateRole(entry : string) : Observable<AccountChangeRequest> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/user-role`;

  	return this.http.get<AccountChangeRequest>(link)
       
       .pipe(

          tap((entry : AccountChangeRequest) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public updateRole$(entry : string , body : AccountChangeRequest) : Observable<any> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/user-role`;

    return this.http.put<AccountChangeRequest>(link , body)

      .pipe(

          tap((value) => console.log(value)) ,

          delay(2000) ,

          map((entry : AccountChangeRequest) => { return {'updated' : true , '$data' : entry}; }) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )

  }

  public updateUnit(entry : string) : Observable<AccountChangeRequest> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/user-unit`;

    return this.http.get<AccountChangeRequest>(link)
       
       .pipe(

          tap((entry : AccountChangeRequest) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public updateUnit$(entry : string , body : AccountChangeRequest) : Observable<any> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/user-unit`;

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
