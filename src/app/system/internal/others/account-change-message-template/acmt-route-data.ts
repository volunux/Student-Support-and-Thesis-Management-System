let $$ : { [key : string] : any } = {

		'systemType' : 'Account Change Message Template' ,

		'title' : 'Account Change Message Template' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Account Change Message Template' ,

		'link' : 'account-change-message-template' ,

		'$link' : 'account-change-message-template' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'title' : 'Super Administrator' , 'body' : 'Your role have been changed to a Super Administrator' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['status' ] , 'noEdit' : false , placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : [] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['status' , 'body' ] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'title' : 'Title' , 'status' : 'Status'} } ,

};
