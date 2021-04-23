let $$ : { [key : string] : any } = {

		'systemType' : 'Status' ,

		'title' : 'Status' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Status' ,

		'link' : 'status' ,

		'$link' : 'status' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'active' , 'description' : 'An entry that is currently active and available' , 'word' : 'Active' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['status'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'name' : 'Name' } } ,

};
