let $$ : { [key : string] : any } = {

		'systemType' : 'Refund Signature' ,

		'title' : 'Refund Signature' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Refund Signature' ,

		'link' : 'refund-signature' ,

		'$link' : 'refund-signature' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'status' : 'Status'} } ,

};
