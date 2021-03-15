let $$ : { [key : string] : any } = {

		'systemType' : 'Statistics' ,

		'title' : 'Statistics' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Statistics' ,

		'link' : 'statistic' ,

		'$link' : 'statistic' ,

		'systemGuideline' : 'gen-internal'
};

export const RouteConfigData : { [key : string] : any } = {

	'dashboard' : {...$$ , 'canCreate' : false } ,

	'userEntries' : {...$$ , 'title' : `User Entries ${$$.systemType}` , 'entryType' : 'user-entries'} ,

	'user' : {...$$ , 'title' : `User ${$$.systemType}` , 'entryType' : 'user'} ,

	'internalOne' : {...$$ , 'title' : `Internal One ${$$.systemType}` , 'entryType' : 'general-internal-one' } ,

	'internalTwo' : {...$$ , 'title' : `Internal Two ${$$.systemType}` , 'entryType' : 'general-internal-two' } ,

	'internalThree' : {...$$ , 'title' : `Internal Three ${$$.systemType}` , 'entryType' : 'general-internal-three' } ,

	'internalFour' : {...$$ , 'title' : `Internal Four ${$$.systemType}` , 'entryType' : 'general-internal-four' } ,

	'other' : {...$$ , 'title' : `Other Entries ${$$.systemType}` , 'entryType' : 'other' } ,

};
