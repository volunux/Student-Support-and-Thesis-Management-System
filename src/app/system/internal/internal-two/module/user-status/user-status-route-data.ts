let $$ : { [key : string] : any } = {

		'systemType' : 'User Status' ,

		'title' : 'User Status' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User Status' ,

		'link' : 'user-status' ,

		'$link' : 'user-status' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'active' , 'description' : 'A user account that is currently active' , 'word' : 'Active'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'word' : 'Word' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
