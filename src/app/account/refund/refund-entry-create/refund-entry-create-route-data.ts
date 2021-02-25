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

	'create' : {...config , 'title' : `Request a ${config.systemType}` } ,

};
