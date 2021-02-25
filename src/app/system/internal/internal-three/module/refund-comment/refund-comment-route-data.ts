let $$ : { [key : string] : any } = {

		'systemType' : 'Refund Comment' ,

		'title' : 'Refund Comment' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Refund Comment' ,

		'link' : 'refund-comment' ,

		'$link' : 'refund-comment' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'text' : 'This is a comment' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['status' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'status' : 'Status'} } ,

};
