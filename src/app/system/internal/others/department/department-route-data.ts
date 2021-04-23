let $$ : { [key : string] : any } = {

		'systemType' : 'Department' ,

		'title' : 'Department' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Department' ,

		'link' : 'department' ,

		'$link' : 'department' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Information and Media Technology' , 'description' : 'Information and Media' , 'abbreviation' : 'IMT' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' , 'faculty'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'abbreviation' : 'Abbreviation' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
