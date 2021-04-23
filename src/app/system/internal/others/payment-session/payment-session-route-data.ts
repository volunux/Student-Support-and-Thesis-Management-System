let $$ : { [key : string] : any } = {

		'systemType' : 'Payment Session' ,

		'title' : 'Payment Session' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Payment Session' ,

		'link' : 'payment-session' ,

		'$link' : 'payment-session' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : '2010/2011' , 'amount' : '1000' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['description'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'amount' : 'amount' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
