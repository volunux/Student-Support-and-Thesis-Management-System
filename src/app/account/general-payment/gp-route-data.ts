let $$ : { [key : string] : any } = {

		'systemType' : 'General Payment' ,

		'title' : 'General Payment' ,

		'view' : 'gp' ,

		'viewWord' : 'Payment' ,

		'link' : 'payment' ,

		'$link' : 'general-payment' ,

		'systemGuideline' : 'payment' ,

		'base' : 'payment'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Make ${$$.systemType} Payment` , 'paymentRule' : { 'amount' : '1000' , 'description' : 'Departmental Fee Payment' , 'type' : 'department' ,

    'callback' : '' } } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'paymentReference' : 'Payment Reference' , 'department' : 'Department' , 'status' : 'Status'} } ,

	'validation' : {...$$ , 'title' : `Verifying ${$$.systemType}` } ,

	'verify' : {...$$ , 'title' : `Verify ${$$.systemType} Status` } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};