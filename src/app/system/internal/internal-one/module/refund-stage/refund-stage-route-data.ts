let $$ : { [key : string] : any } = {

		'systemType' : 'Refund Stage' ,

		'title' : 'Refund Stage' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Refund Stage' ,

		'link' : 'refund-stage' ,

		'$link' : 'refund-stage' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Stage 1' , 'description' : 'Information Technology Services' , 'abbreviation' : 'ITS' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'abbreviation'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['abbreviation'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' , 'abbreviation' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'name' : 'Name' , 'status' : 'Status'} } ,

};
