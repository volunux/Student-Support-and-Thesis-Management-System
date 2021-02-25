let $$ : { [key : string] : any } = {

		'systemType' : 'Unit' ,

		'title' : 'Unit' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Unit' ,

		'link' : 'unit' ,

		'$link' : 'unit' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Internet Credential' , 'description' : 'School Internet Facility Credential' , 'abbreviation' : 'CSIF' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'abbreviation' : 'Abbreviation' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
