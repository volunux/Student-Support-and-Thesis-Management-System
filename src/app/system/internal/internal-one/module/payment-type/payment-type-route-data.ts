let $$ : { [key : string] : any } = {

		'systemType' : 'Payment Type' ,

		'title' : 'Payment Type' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Payment Type' ,

		'link' : 'payment-type' ,

		'$link' : 'payment-type' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Departmental Fee' , 'description' : 'Payment of Department Fees' , 'abbreviation' : 'DP' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'abbreviation' : 'Abbreviation' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
