let $$ : { [key : string] : any } = {

		'systemType' : 'General Request' ,

		'title' : 'General Request' ,

		'view' : 'gr' ,

		'viewWord' : 'GeneralRequest' ,

		'link' : 'general-request' ,

		'$link' : 'general-request' ,

		'systemGuideline' : 'request' ,

		'base' : 'general-request'
};

export const RouteConfigData : { [key : string] : any } = {

	'create' : {...$$ , 'title' : `Request review of your semester ${$$.systemType}` } ,

};
