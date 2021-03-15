import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { InternalTwo } from './internal-two';
import { General } from '../../../shared/interfaces/general';
import { SearchQuery } from '../../../shared/interfaces/search-query';
import { Api_Token , Api } from '../../../configuration';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Injectable()

export class InternalTwoService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<InternalTwo[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<InternalTwo[]>(link , httpOptions)

      .pipe(
              tap((value : InternalTwo[]) => console.log(value)) ,

              delay(3000) ,

              catchError(this.handleError<InternalTwo[]>(`${this.$systemType} Entries` , null))
        )

  }

  public getEntry(entry : string) : Observable<InternalTwo> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

  	return this.http.get<InternalTwo>(link)
       
       .pipe(

          tap((entry : InternalTwo) => console.log(entry)) ,

          delay(3000) ,

          catchError(this.handleError<InternalTwo>(`${this.$systemType} Entry` , null))
        )
  }
 
  public addEntry() : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(3000) ,

          map((data : General) => { return { 'permitted' : true , '$data' : data }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public addEntry$(internal : InternalTwo) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.post<InternalTwo>(link , internal)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : InternalTwo) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<InternalTwo>(`${this.$systemType} Entry` , null))
        )
  }

  public updateEntry(entry : string) : Observable<InternalTwo> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/`;

    return this.http.get<InternalTwo>(link)

      .pipe(

        delay(3000) ,

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<InternalTwo>(`${this.$systemType} Entry` , null))

        );
  }

  public updateEntry$(entry : string , body : InternalTwo) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update`;

  return this.http.put<InternalTwo>(link , body)

      .pipe(

        map((entry : InternalTwo) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<InternalTwo>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteEntry(entry : string) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/delete/`;

    return this.http.get<InternalTwo>(link)

      .pipe(

        delay(3000) ,

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<InternalTwo>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteEntry$(entry : string) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/delete/`;

    return this.http.delete<{'message' : string}>(link)

      .pipe(

        map((data) => { return {'deleted' : true }; }) ,

        catchError(this.handleError<InternalTwo>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/many`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<InternalTwo[]>(`${this.$systemType} Entries Delete` , null))

        );
  }

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all`;

    return this.http.get(link)

      .pipe(

        delay(3000) ,

        catchError(this.handleError<InternalTwo[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  public $deleteAllInternalTwo() : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<InternalTwo[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }


}
