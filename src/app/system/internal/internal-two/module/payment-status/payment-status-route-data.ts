let $$ : { [key : string] : any } = {

		'systemType' : 'Payment Status' ,

		'title' : 'Payment Status' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Payment Status' ,

		'link' : 'payment-status' ,

		'$link' : 'payment-status' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'pending' , 'description' : 'An payment that is abandoned' , 'word' : 'Pending'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'word' : 'Word' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
