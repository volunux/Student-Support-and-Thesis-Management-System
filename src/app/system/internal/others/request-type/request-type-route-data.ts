let $$ : { [key : string] : any } = {

		'systemType' : 'Request Type' ,

		'title' : 'Request Type' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Type' ,

		'link' : 'request-type' ,

		'$link' : 'request-type' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Internet Credential' , 'description' : 'Internet Credentials including username and password' , 'abbreviation' : 'IC' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description' , 'title'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' , 'unit' , 'title'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'abbreviation' : 'Abbreviation' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
