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

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `${$$.systemType}` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : null } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'application_number' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
