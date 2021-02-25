let $$ : { [key : string] : any } = {

		'systemType' : 'Faculty' ,

		'title' : 'Faculty' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Faculty' ,

		'link' : 'faculty' ,

		'$link' : 'faculty' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Information and Communication Technology' , 'description' : 'Faculty' , 'abbreviation' : 'ICT'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'abbreviation' : 'Abbreviation' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
