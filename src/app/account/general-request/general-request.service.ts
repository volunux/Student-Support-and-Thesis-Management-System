import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap , timeout } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { GeneralRequest } from './general-request';
import { General } from './general';
import { SearchQuery } from '../../general/search-query';
import { Api_Token , Api } from '../../configuration';
import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()

export class GeneralRequestService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'General Request';

  public $sa : string = 'general-request'; 

  public rtype : string;

  public manageRequest() : Observable<General[]> {

    let link = `${this.apiConfig.host}/${this.$sa}/manage`;

    return this.http.get<General[]>(link)

      .pipe(
            tap((value : General[]) => console.log(value)) ,

            delay(3000) ,

            catchError(this.handleError<General[]>(`Request Type Entries` , null))
        )

  }

  public manageRequestEntry(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/manage/t/${entry}`;

    return this.http.get<General>(link)

      .pipe(
            tap((value : General) => console.log(value)) ,

            delay(3000) ,

            catchError(this.handleError<General>(`Request Type Entry` , null))
        )

  }

  public getAllEntry(params : SearchQuery) : Observable<GeneralRequest[]> {

	  let	link = `${this.apiConfig.host}/${this.$sa}/t/${this.rtype}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<GeneralRequest[]>(link , httpOptions)

      .pipe(
              tap((value : GeneralRequest[]) => console.log(value)) ,

              delay(3000) ,

              catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entries` , null))
        )

  }

  public getEntry(rtype : string , entry : string) : Observable<GeneralRequest> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/detail`;

  	return this.http.get<GeneralRequest>(link)
       
       .pipe(

          tap((entry : GeneralRequest) => console.log(entry)) ,

          delay(3000) ,

          catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public addComment(rtype : string , entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment`;

    return this.http.get<GeneralRequest>(link)

      .pipe(

        tap((entry : GeneralRequest) => console.log(entry)) ,

        delay(3000) ,

        map((entry : GeneralRequest) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Comment Entry` , null))

        );
  }

  public addComment$(rtype : string , entry : string , comment : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment`;

    return this.http.post<General>(link , comment)

      .pipe(

        tap((entry : General) => console.log(entry)) ,

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<General>(`${this.$systemType} Comment Entry` , null))

        );
  }

  public addReply(rtype : string , entry : string , comment : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment/${comment}/reply`;

    return this.http.get<General>(link)

      .pipe(

        tap((value) => {console.log(value)}),

        delay(3000) ,

        map((entry : General) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public addReply$(rtype : string , entry : string , comment : string , reply : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment/${comment}/reply`;

    return this.http.post<GeneralRequest>(link , reply)

      .pipe(

        tap((value) => {console.log(value)}),

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public getTimeline(rtype : string , entry : string) : Observable<GeneralRequest> {

    let  link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/timeline`;

    return this.http.get<GeneralRequest>(link)

      .pipe(

            tap((value : GeneralRequest[]) => console.log(value)) ,

            delay(3000) ,

            catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry Timeline` , null))
        )
  }

  public updateEntry$(rtype : string , entry : string , request : GeneralRequest) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/detail`;

    return this.http.put<GeneralRequest>(link , request)

        .pipe(

          map((entry : GeneralRequest) => { return { 'updated' : true , '$data' : entry }; }) ,

          catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))

          );
  }

  public confirmEntryOnReview$(rtype : string , entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/review`;

    return this.http.put<GeneralRequest>(link , {'entry' : entry})

      .pipe(

        delay(5000) ,

        map((entry : GeneralRequest) => { return { 'onReview' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))

        );
  }

  public status() : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/status`;

    return this.http.get<General[]>(link)

      .pipe(

        delay(3000) ,

        catchError(this.handleError<General[]>(`${this.$systemType} Entry` , null))

        );
  }


  public transferEntry(rtype : string , entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/transfer`;

    return this.http.get<General>(link)

      .pipe(

        tap((value : General) => console.log(value)) ,

        map((entry : General) => { return {'permitted' : true , '$data' : entry }; }) ,

        delay(3000) ,

        catchError(this.handleError<General>(`${this.$systemType} Entry` , null))

        );
  }

  public transferEntry$(rtype : string , entry : string , request : GeneralRequest) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/transfer`;

    return this.http.put<GeneralRequest>(link , request)

      .pipe(

        tap((value : GeneralRequest) => console.log(value)) ,

        map((entry : GeneralRequest) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteManyEntry$(rtype : string , arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/t/${this.rtype}/delete/entry/many`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entries Delete` , null))

        );
  }

  public deleteAllEntry(rtype : string) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        delay(3000) ,

        catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  public deleteAllEntry$(rtype : string) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/t/$rtype/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : any) : Observable<T> => { this.ems.message = error;

        console.log(error);

                return of(result as T);

      }
  }

}
