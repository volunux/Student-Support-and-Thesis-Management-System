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

	'dashboard' : {...$$} ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : null } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'application_number' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
