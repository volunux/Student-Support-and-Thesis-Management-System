import { Injectable , Inject } from '@angular/core';
import { AbstractControl , FormBuilder , FormControl , FormGroup , Validators , ValidatorFn } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../authentication/authentication.service';
import { General , emailAddress , forbiddenNames } from '../interfaces/general';
import { Api , Api_Token } from '../../configuration';
import { searchValidator , forbiddenNamesValidator , emailAddressValidator , firstLastNames } from '../services/form-validators.service';
import { simplePasswordValidator , confirmPasswordValidator } from '../services/password-validators.service';
import { dynamicDataValidator } from '../services/dynamic-control-validator';
import { usernameVerification } from '../services/verify-username.service';
import { emailAddressVerification } from '../services/verify-email.service';

@Injectable()

export class UserAccountFormService {

  constructor(public auth : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) { 

  }


  public permanentData : any = {};

  public foreignValidator = [Validators.required , Validators.max(90000000)];

  public permanentProps : General = {

    'faculty' : this.foreignValidator ,

    'department' : this.foreignValidator ,

    'level' : this.foreignValidator ,

    'unit' : this.foreignValidator ,

    'country' : this.foreignValidator ,

    'role' : this.foreignValidator ,

    'status' : this.foreignValidator
  };


  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'first$last$Name' : [Validators.required , Validators.minLength(2) , Validators.maxLength(20)] ,

    'jamb$matric$identity' : [Validators.minLength(2) , Validators.maxLength(30)] ,

    'password' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] ,

  }

  public propAsyncValidator : General = {

    'email_address' : [emailAddressVerification(this.auth , this.http , HttpHeaders , this.apiConfig).bind(this)] ,

    'username' : [usernameVerification(this.auth , this.http , HttpHeaders , this.apiConfig).bind(this)]
  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public createForm() : FormGroup {

    return this.fb.group({

      'first_name' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'last_name' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'username' : ['' , {'validators' : [...this.entryValidators.first$last$Name , forbiddenNamesValidator(forbiddenNames)] ,

      'asyncValidators' : [usernameVerification(this.auth , this.http , HttpHeaders , this.apiConfig).bind(this)] , 'updateOn' : 'blur' } ] ,

    'email_address' : ['' , {'validators' : 

      [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] ,

      'asyncValidators' : [emailAddressVerification(this.auth , this.http , HttpHeaders , this.apiConfig).bind(this)]  , 'updateOn' : 'blur' } ] ,

    'password' : ['' , {'validators' : this.entryValidators.password }  ] ,

    'confirm_password' : ['' , {'validators' : this.entryValidators.password  }  ] ,

      'about' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(300)] } ] ,

      'faculty' : ['' , {'validators' : [...this.getPermanentProp('faculty')] } ] ,

      'department' : ['' , {'validators' : [...this.getPermanentProp('department')] } ] ,

      'level' : ['' , {'validators' : [...this.getPermanentProp('level')] } ] ,

      'unit' : ['' , {'validators' : [...this.getPermanentProp('unit')] } ] ,

      'country' : ['' , {'validators' : [...this.getPermanentProp('country')] } ] ,

      'role' : ['' , {'validators' : [...this.getPermanentProp('role')] } ] ,

      'status' : ['' , {'validators' : [...this.getPermanentProp('status')]}] ,

      'matriculation_number' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

      'jamb_registration_number' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

      'identity_number' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

    } , { 'validator' : [confirmPasswordValidator() , firstLastNames() ] });

  }

  public entryForm : FormGroup = this.createForm();


  get first_name() : FormControl {

      return this.entryForm.get('first_name') as FormControl;
  }

  get last_name() : FormControl {

      return this.entryForm.get('last_name') as FormControl;
  }

  get username() : FormControl {

      return this.entryForm.get('username') as FormControl;
  }

  get email_address() : FormControl {

      return this.entryForm.get('email_address') as FormControl;
  }

  get password() : FormControl {

      return this.entryForm.get('password') as FormControl;
  }

  get confirm_password() : FormControl {

      return this.entryForm.get('confirm_password') as FormControl;
  }

  get about() : FormControl {

      return this.entryForm.get('about') as FormControl;
  }

  get department() : FormControl {

      return this.entryForm.get('department') as FormControl;
  }

  get faculty() : FormControl {

      return this.entryForm.get('faculty') as FormControl;
  }

  get level() : FormControl {

      return this.entryForm.get('level') as FormControl;
  }

  get unit() : FormControl {

      return this.entryForm.get('unit') as FormControl;
  }

  get country() : FormControl {

    return this.entryForm.get('country') as FormControl;
  }

  get matriculation_number() : FormControl {

      return this.entryForm.get('matriculation_number') as FormControl;
  }

  get jamb_registration_number() : FormControl {

      return this.entryForm.get('jamb_registration_number') as FormControl;
  }

  get identity_number() : FormControl {

    return this.entryForm.get('identity_number') as FormControl;
  }

  get role() : FormControl {

      return this.entryForm.get('role') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

  public createPermanent(data : General) : void {

    for (let $prop in data) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = data[$prop];

      this.entryForm.get(propVal) ? this.entryForm.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      this.entryForm.get(propVal) ? this.entryForm.get(propVal).updateValueAndValidity() : null;
    }

    this.entryForm.updateValueAndValidity();

  }


  public removeControls(controls : string[]) : void {

    controls.forEach((control) => { let ctrl = this.entryForm.get(control);

      return ctrl ? this.entryForm.removeControl(control) : null; })

  }

  public removeAsyncValidators(controls : string[]) : void {

    controls.forEach((control) => { 

      if (this.entryForm.get(control)) {

        this.entryForm.get(control).clearAsyncValidators();

        this.entryForm.get(control).updateValueAndValidity(); } });

        this.entryForm.updateValueAndValidity();

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public setAsyncNullError(control : string , formCtrl : FormControl) : void {

      formCtrl.setErrors({[control + 'Service'] : null} , {'emitEvent' : true});

      formCtrl.updateValueAndValidity({'onlySelf' : true , 'emitEvent' : true});

  }

}
