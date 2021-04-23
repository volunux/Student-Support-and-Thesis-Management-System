import { Injectable , Inject } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable , of } from 'rxjs';
import { delay , map , catchError } from 'rxjs/operators';
import { Api_Token , Api } from '../../../../configuration';
import { SearchQuery } from '../../../../shared/interfaces/search-query';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Injectable()

export class UserService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

	}

  public $systemType : string;

  public $sa : string;

	public getAllEntry(params : SearchQuery , link2Confirm? : boolean) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entries`;

		let link2 : string = `${this.apiConfig.host}/${this.$sa}/account-request`;

		if (link2Confirm == true) link = link2;

		let httpOptions = {'params' : params};

		return this.http.get<User[]>(link , httpOptions)

			.pipe(

		        delay(2000) ,

						catchError(this.handleError<User[]>(`${this.$systemType} Entries` , null))
				)
		}

	public addEntry() : Observable<{'User' : string[] }> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/create`; 

		return this.http.get<{'User' : string[]}>(link)

			.pipe(
			        delay(2000) ,

							catchError(this.handleError<{'User' : string[]}>('User Entry' , null))
				)
	}

	public addEntry$(user : User) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/create`; 

		return this.http.post<User>(link , user)

			.pipe(
							map((user : User) => { return {'created' : true , 'user' : user}; }) ,

							catchError(this.handleError<User>(`${this.$systemType} Entry` , null))
				)

	}

	public getUser(slug : string , link2Confirm? : boolean) : Observable<User> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${slug}/detail`;

		return this.http.get<User>(link)

			.pipe(

        delay(2000) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public updateEntry(slug : string , link2Confirm? : boolean) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${slug}/update`;

		return this.http.get<User>(link)

			.pipe(

        delay(2000) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public deleteEntry(slug : string) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${slug}/delete/`;

		return this.http.get<User>(link)

			.pipe(

        delay(2000) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public updateStatus(slug : string , link2Confirm? : boolean) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/${slug}/reactivate/`;

		let link2 : string = `${this.apiConfig.host}/${this.$sa}/${slug}/deactivate/`;

		if (link2Confirm) link = link2;

		return this.http.get<User>(link)

			.pipe(	

        delay(2000) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public updateStatus$(slug : string , user : User , link2Confirm? : boolean) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/${slug}/reactivate/`;

		let link2 : string = `${this.apiConfig.host}/${this.$sa}/${slug}/deactivate/`;

		if (link2Confirm) link = link2;

		return this.http.put<User>(link , user)

			.pipe(

				map((user : User) => { return {'updated' : true , 'user' : user }; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public updateEntry$(slug : string , user : User) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${slug}/update/`;

		return this.http.put<User>(link , user)

			.pipe(

				map((user : User) => { return {'updated' : true , 'user' : user}; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public deleteEntry$(slug : string) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${slug}/delete/`;

		return this.http.delete<{'message' : string}>(link)

			.pipe(

				map((data) => { return {'deleted' : true }; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/many`;

		let body = {'entries' : arrayIdx};

		return this.http.patch(link , body)

			.pipe(

				map((val) => { return {'manyDeleted' : true}; }) ,

				catchError(this.handleError<User[]>(`${this.$systemType} Entry or Entries Delete` , null))

				);
	}

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

				return of(result as T);

      }
  }


}
