let $$ : { [key : string] : any } = {

		'systemType' : 'User Photo' ,

		'title' : 'User Photo' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User Photo' ,

		'link' : 'user-photo' ,

		'$link' : 'user-photo' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'status' : 'Status'} } ,

};
