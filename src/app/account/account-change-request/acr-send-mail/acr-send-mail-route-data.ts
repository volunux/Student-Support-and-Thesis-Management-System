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

const placeholder = {'title' : 'Super Administrator' , 'body' : 'Your role have been changed to a Super Administrator' };

export const RouteConfigData : { [key : string] : any } = {

	'create' : {...$$ , 'title' : `${$$.systemType} Send Mail` , placeholder } ,

	'dashboard' : {...$$ , 'title' : `${$$.systemType} Send Mail` } ,

};
