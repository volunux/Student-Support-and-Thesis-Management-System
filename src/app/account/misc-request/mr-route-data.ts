let $$ : { [key : string] : any } = {

		'systemType' : 'Misc Request' ,

		'title' : 'Misc Request' ,

		'view' : 'mr' ,

		'viewWord' : 'MiscRequest' ,

		'link' : 'misc-request' ,

		'$link' : 'misc-request' ,

		'systemGuideline' : 'general' ,

		'base' : 'misc-request'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : null } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
