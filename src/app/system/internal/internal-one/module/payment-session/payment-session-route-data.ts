let $$ : { [key : string] : any } = {

		'systemType' : 'Payment Session' ,

		'title' : 'Payment Session' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Payment Session' ,

		'link' : 'payment-session' ,

		'$link' : 'payment-session' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : '2010/2011' , 'description' : 'A payment of a year' , 'abbreviation' : '10/11' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description' , 'abbreviation'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' , 'abbreviation'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'name' : 'Name' , 'status' : 'Status'} } ,

};
