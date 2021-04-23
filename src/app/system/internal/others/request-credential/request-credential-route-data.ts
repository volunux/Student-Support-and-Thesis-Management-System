let $$ : { [key : string] : any } = {

		'systemType' : 'Request Credential' ,

		'title' : 'Request Credential' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Credential' ,

		'link' : 'request-credential' ,

		'$link' : 'request-credential' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'username' : 'Username' , 'status' : 'Status'} } ,

};
