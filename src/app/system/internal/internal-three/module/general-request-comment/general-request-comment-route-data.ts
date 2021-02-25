let $$ : { [key : string] : any } = {

		'systemType' : 'General Request Comment' ,

		'title' : 'General Request Comment' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'General Request Comment' ,

		'link' : 'general-request-comment' ,

		'$link' : 'general-request-comment' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'text' : 'This is a comment' ,};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'status' : 'Status'} } ,

};
