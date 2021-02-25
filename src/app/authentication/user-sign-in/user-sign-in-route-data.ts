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

	'signIn' : {...$$ , 'title' : `Sign into User Account`} ,

};