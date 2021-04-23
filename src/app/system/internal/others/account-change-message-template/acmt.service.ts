import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { AccountChangeMessageTemplate } from './acmt';
import { General } from '../../../../shared/interfaces/general';
import { SearchQuery } from '../../../../shared/interfaces/search-query';
import { Api_Token , Api } from '../../../../configuration';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Injectable()

export class AccountChangeMessageTemplateService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<AccountChangeMessageTemplate[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<AccountChangeMessageTemplate[]>(link , httpOptions)

      .pipe(
              tap((value : AccountChangeMessageTemplate[]) => console.log(value)) ,

              delay(2000) ,

              catchError(this.handleError<AccountChangeMessageTemplate[]>(`${this.$systemType} Entries` , null))
        )

  }

  public getEntry(entry : string) : Observable<AccountChangeMessageTemplate> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

  	return this.http.get<AccountChangeMessageTemplate>(link)
       
       .pipe(

          tap((entry : AccountChangeMessageTemplate) => console.log(entry)) ,

          delay(2000) ,

          catchError(this.handleError<AccountChangeMessageTemplate>(`${this.$systemType} Entry` , null))
        )
  }
 
  public addEntry() : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          delay(2000) ,

          map((data : General) => { return { 'permitted' : true , '$data' : data }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public addEntry$(internal : AccountChangeMessageTemplate) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/create`;

    return this.http.post<AccountChangeMessageTemplate>(link , internal)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : AccountChangeMessageTemplate) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<AccountChangeMessageTemplate>(`${this.$systemType} Entry` , null))
        )
  }

  public updateEntry(entry : string) : Observable<AccountChangeMessageTemplate> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/`;

    return this.http.get<AccountChangeMessageTemplate>(link)

      .pipe(

        delay(2000) ,

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<AccountChangeMessageTemplate>(`${this.$systemType} Entry` , null))

        );
  }

  public updateEntry$(entry : string , body : AccountChangeMessageTemplate) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update`;

  return this.http.put<AccountChangeMessageTemplate>(link , body)

      .pipe(

        map((entry : AccountChangeMessageTemplate) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<AccountChangeMessageTemplate>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteEntry(entry : string) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/delete/`;

    return this.http.get<AccountChangeMessageTemplate>(link)

      .pipe(

        delay(2000) ,

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<AccountChangeMessageTemplate>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteEntry$(entry : string) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/delete/`;

    return this.http.delete<{'message' : string}>(link)

      .pipe(

        map((data) => { return {'deleted' : true }; }) ,

        catchError(this.handleError<AccountChangeMessageTemplate>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/many`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<AccountChangeMessageTemplate[]>(`${this.$systemType} Entries Delete` , null))

        );
  }

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all`;

    return this.http.get(link)

      .pipe(

        delay(2000) ,

        catchError(this.handleError<AccountChangeMessageTemplate[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  public $deleteAllAccountChangeMessageTemplate() : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<AccountChangeMessageTemplate[]>(`${this.$systemType} Entry or Entries Delete` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }


}
