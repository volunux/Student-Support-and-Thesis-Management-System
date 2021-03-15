import { Injectable , Inject } from '@angular/core';
import { Observable , of } from 'rxjs';
import { catchError , delay , map , tap , timeout } from 'rxjs/operators';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { GeneralRequest } from './general-request';
import { General } from './general';
import { Api_Token , Api } from '../../../configuration';
import { ErrorMessagesService } from '../../services/error-messages.service';

@Injectable()

export class RequestEntryMessageTemplateService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string = 'General Request';

  public $sa : string = 'general-request'; 

  public rtype : string;

  public getEntry(entry : number) : Observable<GeneralRequest> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/message-template/entry/${entry}/detail`;

  	return this.http.get<GeneralRequest>(link)
       
       .pipe(

          tap((entry : GeneralRequest) => console.log(entry)) ,

          delay(3000) ,

          catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public getEntries() : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/message-template`;

    return this.http.get<General[]>(link)

      .pipe(

        delay(3000) ,

        catchError(this.handleError<General[]>(`${this.$systemType} Entry` , null))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : any) : Observable<T> => { this.ems.message = error;

        console.log(error);

        // I will inspect all codes with console.log(error) and fix all appropriate issues

        // I will abstract the request-entry-status component so that it will be one

        // I will make sure I abstract createPermanent and removeControls

                return of(result as T);

      }
  }

}
