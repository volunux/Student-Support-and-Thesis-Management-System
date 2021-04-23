let $$ : { [key : string] : any } = {

		'systemType' : 'Request Change Message Template Type' ,

		'title' : 'Request Change Message Template Type' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Change Message Template Type' ,

		'link' : 'request-change-message-template-type' ,

		'$link' : 'request-change-message-template-type' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'title' : 'Fulfilled' , 'description' : 'A request that have been fulfilled'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'name'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['name'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'name' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'title' : 'Title' , 'status' : 'Status'} } ,

};
