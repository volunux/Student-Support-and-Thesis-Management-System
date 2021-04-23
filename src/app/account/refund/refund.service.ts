import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Refund } from './refund';
import { General } from './general';
import { SearchQuery } from '../../general/search-query';
import { Api_Token , Api } from '../../configuration';
import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()

export class RefundService {


  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'Refund';

  public $sa : string = 'refund'

  public getAllEntry(params : SearchQuery) : Observable<Refund[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<Refund[]>(link , httpOptions)

      .pipe(
              tap((value : Refund[]) => console.log(value)) ,

              delay(2000) ,

              catchError(this.handleError<Refund[]>(`${this.$systemType} Entries` , null))
        )

  }

  public getEntry(entry : string) : Observable<Refund> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

  	return this.http.get<Refund>(link)
       
       .pipe(

          tap((entry : Refund) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<Refund>(`${this.$systemType} Entry` , null))
        )
  }

  public getEntryLetter(entry : string) : Observable<Refund> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/letter`;

    return this.http.get<Refund>(link)
       
       .pipe(

          tap((entry : Refund) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<Refund>(`${this.$systemType} Entry` , null))
        )
  }
 
  public addEntry() : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(2000) ,

          map((permitted : General) => { return { 'permitted' : true }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public addEntry$(request : Refund) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.post<Refund>(link , request)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : Refund) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<Refund>(`${this.$systemType} Entry` , null))
        )
  }

  public addComment(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment`;

    return this.http.get<Refund>(link)

      .pipe(

        tap((entry : Refund) => console.log(entry)) ,

        delay(2000) ,

        map((entry : Refund) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<Refund>(`${this.$systemType} Comment Entry` , null))

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

        catchError(this.handleError<Refund>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public addReply$(entry : string , comment : string , reply : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment/${comment}/reply`;

    return this.http.post<Refund>(link , reply)

      .pipe(

        tap((value) => {console.log(value)}),

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<Refund>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public getTimeline(entry : string) : Observable<Refund> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/timeline`;

    return this.http.get<Refund>(link)

      .pipe(

            tap((value : Refund[]) => console.log(value)) ,

            delay(2000) ,

            catchError(this.handleError<Refund>(`${this.$systemType} Entry Timeline` , null))
        )
  }

  public updateEntry$(entry : string , body : Refund) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

    return this.http.put<Refund>(link , body)

        .pipe(

          map((entry : Refund) => { return { 'updated' : true , '$data' : entry }; }) ,

          catchError(this.handleError<Refund>(`${this.$systemType} Entry` , null))

          );
  }

  public confirmEntryOnReview$(entry : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/review`;

    return this.http.put<Refund>(link , {entry})

      .pipe(

        delay(2000) ,

        map((entry : Refund) => { return { 'onReview' : true , '$data' : entry }; }) ,

        catchError(this.handleError<Refund>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/many`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<Refund[]>(`${this.$systemType} Entries Delete` , null))

        );
  }

  public status() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/status`;

    return this.http.get(link)

      .pipe(

        tap((val) => console.log(val)) ,

        delay(2000) ,

        catchError(this.handleError<General>(`Status Entries` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

    return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

      return of(result as T);

      }
  }

}
