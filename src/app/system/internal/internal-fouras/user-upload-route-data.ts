let $$ : { [key : string] : any } = {

		'systemType' : 'User Upload' ,

		'title' : 'User Upload' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User Upload' ,

		'link' : 'user-upload' ,

		'$link' : 'user-upload' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'status' : 'Status'} } ,

};
