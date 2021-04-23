import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { General } from '../interfaces/general';
import { catchError , filter , first , map , switchMap , delay , tap , take , debounceTime , distinctUntilChanged } from 'rxjs/operators';
import { AsyncValidator , AsyncValidatorFn , AbstractControl , ValidationErrors } from '@angular/forms'


export function usernameVerification(authService , http , httpHeaders , apiConfig) : AsyncValidatorFn {

   return (control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>  {

     if (!control.dirty) return of(null);

    let entry = control.value;

    let link = `${apiConfig.host}/confirm/username/${entry}`;

    let $result = {'UsernameService' : {'value' : control.value } }; 

    let lastUsername = null;

       return control.valueChanges.pipe(

          filter((username) => { return username != lastUsername }) ,

          take(1) ,

          delay(2000) ,

          switchMap((username) => { lastUsername = username;

            return http.get(link); }) ,

          map((username : General) => { return username.isAvailable ? null : $result } ) ,

          first() ,

          catchError((error) => { return of($result);  })
                
          )
  }

}