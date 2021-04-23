let $$ : { [key : string] : any } = {

		'systemType' : 'Request Change Message Template' ,

		'title' : 'Request Change Message Template' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Change Message Template' ,

		'link' : 'request-change-message-template' ,

		'$link' : 'request-change-message-template' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'title' : 'Fulfilled' , 'body' : 'A request that have been fulfilled'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'name' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['name' , 'description'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'name' , 'body' , 'status' , 'unit' , 'entry_type'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'title' : 'Title' , 'status' : 'Status'} } ,

};
