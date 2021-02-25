let $$ : { [key : string] : any } = {

		'systemType' : 'User' ,

		'title' : 'User' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User' ,

		'link' : 'user' ,

		'$link' : 'authentication' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'signUp' : {...$$ , 'title' : `Request for a User Account` , 'view' : 'ca' , 'controlFilters' : ['level' , 'unit' , 'country' , 'role' , 'status'] , 'noEdit' : false } ,
};