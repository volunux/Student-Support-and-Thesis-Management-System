let config : { [key : string] : any } = {

		'systemType' : 'Refund' ,

		'title' : 'Refund' ,

		'view' : 'rf' ,

		'viewWord' : 'Refund' ,

		'link' : 'refund' ,

		'$link' : 'refund' ,

		'systemGuideline' : 'request' ,

		'base' : 'refund'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...config} ,

	'create' : {...config , 'title' : `Request a ${config.systemType}` } ,

	'comment' : {...config , 'title' : `Add a Comment : ${config.systemType} Entry` } ,

	'detail' : {...config , 'title' : `${config.systemType} Entry` } ,

	'timeline' : {...config , 'title' : `${config.systemType} Entry Timeline` } ,

	'letter' : {...config , 'title' : `${config.systemType} Entry Letter` } ,

	'transfer' : {...config , 'title' : `Transfer and Move ${config.systemType} Entry` } ,

	'entries' : {...config , 'title' : `${config.systemType} Entries` ,

		'searchFilters' : {'application_number' : 'Application Number' , 'status' : 'Status' , 'department' : 'Department' , 'faculty' : 'Faculty' , 'stage' : 'Stage' } } ,

	'reply' : {...config , 'title' : `Add a Reply to a Comment : ${config.systemType} Entry`} ,

	'deleteAll' : {...config , 'title' : `${config.systemType} Entries : Delete All` } ,

};
