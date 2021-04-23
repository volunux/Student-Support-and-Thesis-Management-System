let $$ : { [key : string] : any } = {

		'systemType' : 'Misc Request' ,

		'title' : 'Misc Request' ,

		'view' : 'acr' ,

		'viewWord' : 'MiscRequest' ,

		'link' : 'misc-request' ,

		'$link' : 'misc-request' ,

		'systemGuideline' : 'request' ,

		'base' : 'misc-request'
};

const placeholder = {'title' : 'Super Administrator' , 'body' : 'Your role have been changed to a Super Administrator' };

export const RouteConfigData : { [key : string] : any } = {

	'create' : {...$$ , 'title' : `${$$.systemType} Send Mail` , placeholder } ,

	'dashboard' : {...$$ , 'title' : `${$$.systemType} Send Mail` } ,

};
