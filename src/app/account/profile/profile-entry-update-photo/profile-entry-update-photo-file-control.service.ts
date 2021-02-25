import { Injectable } from '@angular/core';

@Injectable()

export class ProfileEntryUpdatePhotoFileControlService {

  constructor() { 

  }

 public $controls : any = [

  	{'label' : 'Photo' ,

  	'key' : 'photo' ,

  	'accepts' : 'image/*' ,

		'controlType' : 'file' }

  ];

	public uploadConfigUrl : { [key : string] : string } = {
  
  'add' : 'user/entry/change-photo' ,

  'remove' : 'o/user-photo' ,

  'sign' : 'o/sign/user-photo'
};


}
