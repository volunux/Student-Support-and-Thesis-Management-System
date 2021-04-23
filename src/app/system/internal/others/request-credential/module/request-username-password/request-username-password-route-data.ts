let $$ : { [key : string] : any } = {

		'systemType' : 'Request Credential' ,

		'title' : 'Request Credential' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Credential' ,

		'link' : 'request-credential' ,

		'$link' : 'request-credential' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : [] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'status' : 'Status'} } ,

};
