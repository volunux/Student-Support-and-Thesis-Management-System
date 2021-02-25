let $$ : { [key : string] : any } = {

		'systemType' : 'User Role' ,

		'title' : 'User Role' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User Role' ,

		'link' : 'user-role' ,

		'$link' : 'user-role' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'student' , 'description' : 'A primary member of the system' , 'word' : 'Student'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'description'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'word' : 'Word' , 'name' : 'Name' , 'status' : 'Status'} } ,

};
