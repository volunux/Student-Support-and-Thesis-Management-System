let $$ : { [key : string] : any } = {

		'systemType' : 'General Request Status' ,

		'title' : 'General Request Status' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'General Request Status' ,

		'link' : 'general-request-status' ,

		'$link' : 'general-request-status' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'pending' , 'description' : 'An application to be set on Review' , 'word' : 'Pending'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'word' : 'Word' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
