let $$ : { [key : string] : any } = {

		'systemType' : 'Account Change Message Template Type' ,

		'title' : 'Account Change Message Template Type' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Account Change Message Template Type' ,

		'link' : 'account-change-message-template-type' ,

		'$link' : 'account-change-message-template-type' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'title' : 'Status' , 'description' : 'A template related to user account status'};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' , 'name'] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['name'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'status' , 'name'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'title' : 'Title' , 'status' : 'Status'} } ,

};
