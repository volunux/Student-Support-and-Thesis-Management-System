let $$ : { [key : string] : any } = {

		'systemType' : 'Misc Request' ,

		'title' : 'Misc Request' ,

		'view' : 'acr' ,

		'viewWord' : 'MiscRequest' ,

		'link' : 'misc-request' ,

		'$link' : 'misc-request' ,

		'systemGuideline' : 'general' ,

		'base' : 'misc-request'
};

const placeholder = {'title' : 'Post Graduate Studies Admission Process'};

export const RouteConfigData : { [key : string] : any } = {

	'create' : {...$$ , 'title' : `${$$.systemType} Entry Create` , placeholder } ,

};
