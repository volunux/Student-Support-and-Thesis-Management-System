import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , retry , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { GeneralPayment } from './general-payment';
import { General } from './general';
import { SearchQuery } from '../../general/search-query';
import { Api_Token , Api } from '../../configuration';
import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()
export class GeneralPaymentService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'General Payment';

  public $sa : string = 'general-payment'; 

  public ptype : string;

  public managePayment() : Observable<General[]> {

    let link = `${this.apiConfig.host}/${this.$sa}/manage`;

    return this.http.get<General[]>(link)

      .pipe(

            tap((value : General[]) => console.log(value)) ,

            delay(3000) ,

            catchError(this.handleError<General[]>(`Payment Type Entries` , null))
        )

  }

  public managePaymentEntry(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/manage/t/${entry}`;

    return this.http.get<General>(link)

      .pipe(
            tap((value : General) => console.log(value)) ,

            delay(3000) ,

            catchError(this.handleError<General>(`Payment Type Entry` , null))
        )

  }

  public getAllEntry(params : SearchQuery) : Observable<GeneralPayment[]> {

	  let	link = `${this.apiConfig.host}/${this.$sa}/t/${this.ptype}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<GeneralPayment[]>(link , httpOptions)

      .pipe(
            tap((value : GeneralPayment[]) => console.log(value)) ,

            delay(3000) ,

            catchError(this.handleError<GeneralPayment[]>(`${this.$systemType} Entries` , null))
        )

  }

  public getEntry(ptype : string , entry : string) : Observable<GeneralPayment> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/${entry}/detail`;

  	return this.http.get<GeneralPayment>(link)
       
       .pipe(

            tap((entry : GeneralPayment) => console.log(entry)) ,

            delay(3000) ,

            catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))
        )
  }
 
 public getStatus() : Observable<GeneralPayment> {

    let link = `${this.apiConfig.host}/${this.$sa}/transaction-status`;

    return this.http.get<GeneralPayment>(link)
       
       .pipe(

            tap((entry : GeneralPayment) => console.log(entry)) ,

            delay(3000) ,

            catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))
        )
  }

 public confirmStatus(body : GeneralPayment) : Observable<GeneralPayment> {

    let link = `${this.apiConfig.host}/${this.$sa}/transaction-status`;

    return this.http.post<GeneralPayment>(link , body)
       
       .pipe(

            tap((entry : GeneralPayment) => console.log(entry)) ,

            delay(3000) ,

            catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))
        )
  }
 

  public addEntry(ptype : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/create`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(3000) ,

          map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public addEntry$(ptype : string , request : GeneralPayment) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/create`;

    return this.http.post<GeneralPayment>(link , request)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralPayment) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))
        )
  }

  public checkPayment(ptype : string , payment : {[key : string] : any}) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/create`;

    return this.http.post<General>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(3000) ,

          map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $initializePayment(payment : General) : Observable<General> {

    let link = `${this.apiConfig.host}/general-payment/initialize-transaction`;

    return this.http.post<General>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          retry(3) ,

          map((entry : General) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $verifyPayment(ref) : Observable<General> {

    let link = `${this.apiConfig.host}/general-payment/verify-transaction?reference=${ref}`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : General) => { return {'verified' : true , '$data' : entry}; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $refundEntry(entry : string , payment : GeneralPayment) : Observable<General> {

    let link = `${this.apiConfig.host}/general-payment/refund-transaction?reference=${entry}`;

    return this.http.post<GeneralPayment>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralPayment) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))
        )
  }

  public $createRefund(entry : string , payment : GeneralPayment) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/refund`;

    return this.http.put<GeneralPayment>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralPayment) => { return {'updated' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))
        )
  }

  public updateEntry$(ptype : string , entry : string , request : GeneralPayment) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/${entry}/detail`;

    return this.http.put<GeneralPayment>(link , request)

        .pipe(

          map((entry : GeneralPayment) => { return { 'updated' : true , '$data' : entry }; }) ,

          catchError(this.handleError<GeneralPayment>(`${this.$systemType} Entry` , null))

          );
  }

  public deleteManyEntry$(ptype : string , arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/t/${this.ptype}/delete/entry/many`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<GeneralPayment[]>(`${this.$systemType} Entries Delete` , null))

        );
  }

  public deleteAllEntry(ptype : string) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        delay(3000) ,

        catchError(this.handleError<GeneralPayment[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  public deleteAllEntry$(ptype : string) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/t/$ptype/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralPayment[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
