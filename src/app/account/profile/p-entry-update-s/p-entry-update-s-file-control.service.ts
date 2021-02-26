import { Injectable } from '@angular/core';

@Injectable()

export class ProfileEntryUpdateSignatureFileControlService {

  constructor() { 

  }

 public $controls : any = [

  	{'label' : 'Signature' ,

  	'key' : 'signature' ,

  	'accepts' : 'image/*' ,

		'controlType' : 'file' }

  ];

	public uploadConfigUrl : { [key : string] : string } = {
  
  'add' : 'user/entry/change-signature' ,

  'remove' : 'o/user-signature' ,

  'sign' : 'o/sign/user-signature'
};


}
