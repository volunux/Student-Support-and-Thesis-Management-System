import { Injectable , Inject } from '@angular/core';
import { Validators , ValidatorFn , FormBuilder , FormGroup , FormControl } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../authentication/authentication.service';
import { General } from './general';
import { Api , Api_Token } from '../../configuration';
import { emailAddress , forbiddenNames } from './general';
import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';
import { emailAddressValidator } from '../../shared/services/email-address-validators.service';
import { simplePasswordValidator , confirmPasswordValidator , currentAndNewPasswordValidator } from '../../shared/services/password-validators.service';
import { usernameVerification } from '../../shared/services/verify-username.service';
import { emailAddressVerification } from '../../shared/services/verify-email.service';

@Injectable()

export class ProfileFormService {

  constructor(public auth : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) { 

  }

  public permanentData : any = {};

  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'first$last$Name' : [Validators.required , Validators.minLength(2) , Validators.maxLength(20)] ,

    'about' : [Validators.required , Validators.minLength(9) , Validators.maxLength(300)] ,

    'emailAddress' : [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] ,

    'jamb$matric$identity' : [Validators.minLength(2) , Validators.maxLength(30)] ,

    'password' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] ,

  }

  public permanentProps : General = {

    'level' : [Validators.required , Validators.max(90000000)] ,

    'country' : [Validators.required , Validators.max(90000000)]

  };

  public propAsyncValidator : General = {

    'emailAddress' : [emailAddressVerification(this.auth , this.http , HttpHeaders , this.apiConfig).bind(this)] ,

    'username' : [usernameVerification(this.auth , this.http , HttpHeaders , this.apiConfig).bind(this)]
  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public profileUpdate() : FormGroup {

    return this.fb.group({

      'first_name' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'last_name' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'about' : ['' , {'validators' : this.entryValidators.about } ] ,

      'country' : ['' , {'validators' : [...this.getPermanentProp('country')] } ] ,

      'level' : ['' , {'validators' : [...this.getPermanentProp('level')] }] } );

  }

  public changePassword() : FormGroup {

  	let form = new FormGroup({

  	'password' : new FormControl('' , this.entryValidators.password) ,

  	'new_password' : new FormControl('' , this.entryValidators.password) ,

  	'confirm_password' : new FormControl('' , this.entryValidators.password)

  	} , [confirmPasswordValidator() , currentAndNewPasswordValidator()]);

  	return form;
  }

  public statusProfile() : FormGroup {

    let form = new FormGroup({

      'first_name' : new FormControl('' , this.entryValidators.first$last$Name ) ,

      'last_name' : new FormControl('' , this.entryValidators.first$last$Name ) ,

      'email_address' : new FormControl('' , this.entryValidators.emailAddress ) ,

      'identity_number' : new FormControl('' , this.entryValidators.jamb$matric$identity ) } );

    return form;
  }


  public createPermanent(datas : General , form : FormGroup) : void {

    if (datas != null) {

    for (let $prop in datas) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = datas[$prop];

      form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
    }

    form.updateValueAndValidity(); }

  }


  public removeControls(controls : string[] , form : FormGroup) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; }); }
  }

  public removeAsyncValidators(controls : string[] , form : FormGroup) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { 

      if (form.get(control)) {

        form.get(control).clearAsyncValidators();

        form.get(control).updateValueAndValidity(); } });

        form.updateValueAndValidity(); }

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public setAsyncNullError(control : string , formCtrl : FormControl) : void {

      formCtrl.setErrors({[control + 'Service'] : null} , {'emitEvent' : true});

      formCtrl.updateValueAndValidity({'onlySelf' : true , 'emitEvent' : true});

  }

}
