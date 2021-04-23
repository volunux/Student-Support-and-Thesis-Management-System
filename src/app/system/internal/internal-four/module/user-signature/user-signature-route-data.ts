let $$ : { [key : string] : any } = {

		'systemType' : 'User Signature' ,

		'title' : 'User Signature' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User Signature' ,

		'link' : 'user-signature' ,

		'$link' : 'user-signature' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'status' : 'Status'} } ,

};
