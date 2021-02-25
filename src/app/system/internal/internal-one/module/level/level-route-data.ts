let $$ : { [key : string] : any } = {

		'systemType' : 'Level' ,

		'title' : 'Level' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Level' ,

		'link' : 'level' ,

		'$link' : 'level' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : '500 Level' , 'description' : 'The final level' , 'abbreviation' : '500'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'abbreviation' : 'Abbreviation' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
