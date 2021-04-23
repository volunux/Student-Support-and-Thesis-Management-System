import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap , timeout } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { AccountChangeRequest } from './account-change-request';
import { General } from './general';
import { SearchQuery } from '../../general/search-query';
import { Api_Token , Api } from '../../configuration';
import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()

export class AccountChangeRequestService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'Account Change Request';

  public $sa : string = 'account-change-request'; 

  public rtype : string;

  public getAllEntry(params : SearchQuery) : Observable<AccountChangeRequest[]> {

	  let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<AccountChangeRequest[]>(link , httpOptions)

      .pipe(
              tap((value : AccountChangeRequest[]) => console.log(value)) ,

              delay(2000) ,

              catchError(this.handleError<AccountChangeRequest[]>(`${this.$systemType} Entries` , null))
        )

  }

  public getEntry(entry : string) : Observable<AccountChangeRequest> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

  	return this.http.get<AccountChangeRequest>(link)
       
       .pipe(

          tap((entry : AccountChangeRequest) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public addComment(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment`;

    return this.http.get<AccountChangeRequest>(link)

      .pipe(

        tap((entry : AccountChangeRequest) => console.log(entry)) ,

        delay(2000) ,

        map((entry : AccountChangeRequest) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Comment Entry` , null))

        );
  }

  public addComment$(entry : string , comment : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment`;

    return this.http.post<General>(link , comment)

      .pipe(

        tap((entry : General) => console.log(entry)) ,

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<General>(`${this.$systemType} Comment Entry` , null))

        );
  }

  public addReply(entry : string , comment : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment/${comment}/reply`;

    return this.http.get<General>(link)

      .pipe(

        tap((value) => {console.log(value)}),

        delay(2000) ,

        map((entry : General) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public addReply$(entry : string , comment : string , reply : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment/${comment}/reply`;

    return this.http.post<AccountChangeRequest>(link , reply)

      .pipe(

        tap((value) => {console.log(value)}),

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public getTimeline(entry : string) : Observable<AccountChangeRequest> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/timeline`;

    return this.http.get<AccountChangeRequest>(link)

      .pipe(

            tap((value : AccountChangeRequest[]) => console.log(value)) ,

            delay(2000) ,

            catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry Timeline` , null))
        )
  }

  public updateEntry$(entry : string , request : AccountChangeRequest) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

    return this.http.put<AccountChangeRequest>(link , request)

        .pipe(

          map((entry : AccountChangeRequest) => { return { 'updated' : true , '$data' : entry }; }) ,

          catchError(this.handleError<AccountChangeRequest>(`${this.$systemType} Entry` , null))

          );
  }

  public status() : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/status`;

    return this.http.get<General[]>(link)

      .pipe(

        delay(2000) ,

        catchError(this.handleError<General[]>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/many`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<AccountChangeRequest[]>(`${this.$systemType} Entries Delete` , null))

        );
  }

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        delay(2000) ,

        catchError(this.handleError<AccountChangeRequest[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  public deleteAllEntry$() : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<AccountChangeRequest[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : any) : Observable<T> => { this.ems.message = error;

        return of(result as T);

      }
  }

}
