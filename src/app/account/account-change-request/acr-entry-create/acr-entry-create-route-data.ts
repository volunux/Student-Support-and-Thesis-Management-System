let $$ : { [key : string] : any } = {

		'systemType' : 'Account Change Request' ,

		'title' : 'Account Change Request' ,

		'view' : 'acr' ,

		'viewWord' : 'AccountChangeRequest' ,

		'link' : 'account-change-request' ,

		'$link' : 'account-change-request' ,

		'systemGuideline' : 'general' ,

		'base' : 'account-change-request'
};

export const RouteConfigData : { [key : string] : any } = {

	'create' : {...$$ , 'title' : `${$$.systemType} Entry Create` } ,

};
