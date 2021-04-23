let $$ : { [key : string] : any } = {

		'systemType' : 'General Request Status' ,

		'title' : 'General Request Status' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'General Request Status' ,

		'link' : 'general-request-status' ,

		'$link' : 'general-request-status' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Fulfilled' , 'description' : 'A request to be fulfilled' , 'word' : 'Fulfilled' , 'other_name' : 'Fulfill'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description' , 'other_name'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' , 'other_name'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'name' : 'Name' , 'status' : 'Status'} } ,

};
