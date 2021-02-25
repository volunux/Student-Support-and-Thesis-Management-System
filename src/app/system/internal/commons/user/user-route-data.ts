let $$ : { [key : string] : any } = {

		'systemType' : 'User' ,

		'title' : 'User' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User' ,

		'link' : 'user' ,

		'$link' : 'admin/user' ,

		'systemGuideline' : 'gen-internal'
};

let searchFilters = { 'role' : 'Role' , 'email_address' : 'Email Address' , 'identity_number' : 'Identity Number' , 'status' : 'Status' };

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'view' : 'ca' , 'controlFilters' : [] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` , 'link2' : false } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['email_address' , 'username' , 'password' , 'confirm_password'] , 'link2' : false } , 

	'updateReq' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'link' : 'user/account-request/' , 'controlFilters' : ['email_address' , 'username' , 'password' , 'confirm_password'] } , 

	'reactivate' : {...$$ , 'title' : `${$$.systemType} Entry Reactivate` , 'noEdit' : false , 'link2' : false } ,

	'deactivate' : {...$$ , 'title' : `${$$.systemType} Entry Deactivate` , 'noEdit' : false , 'link2' : true } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` ,

	'controlFilters' : ['username' , 'about' , 'password' , 'confirm_password' , 'level' , 'faculty' , 'status' , 'jamb_registration_number' , 'matriculation_number' , 'unit' , 'country'] , 

	'noEdit' : true , 'asyncValidators' : ['email_address' , 'username'] } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` , 'view' : 'uadp'} ,

	'entries' : {...$$ , searchFilters , 'title' : `${$$.systemType} Entries` } ,

	'entriesRequest' : {...$$ , searchFilters , 'title' : `${$$.systemType} Request Entries` , 'link' : 'user/account-request' , 'link2' : false } ,

};