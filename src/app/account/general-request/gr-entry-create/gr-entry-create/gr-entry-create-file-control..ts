export let inputFileControl : { [key : string] : string }[] = [

  	{'label' : 'Photo I' ,

  	'key' : 'photos' ,

  	'accepts' : 'image/*' ,

  	'controlType' : 'file' } ,

    {'label' : 'Photo II' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' } ,

    {'label' : 'Photo III' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' } ,

    {'label' : 'Photo IV' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' } ,

  ];


export let uploadConfigUrl : { [key : string] : string } = {
  
  'add' : 'user-upload/entry/create' ,

  'remove' : 'o/photo' ,

  'sign' : 'o/sign/photo'
};
