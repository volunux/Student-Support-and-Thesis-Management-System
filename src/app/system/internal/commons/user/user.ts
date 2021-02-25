export class User$ {

	constructor(public _id? : number , public first_name? : string , public last_name? : string , public username? : string , public email_address? : string , public	about? : string,

							public department? : string , public faculty? : string , public level? : string , public unit? : string , public country? : string , public role? : string ,

							public status? : string , public created_on? : Date , public updated_on? : Date , public matriculation_number? : string , public jamb_registration_number? : string ,

							public identity_number? : string , public profile_photo? : string , public signature? : string , public num? : number) {


	}

}

export interface User {

	_id? : number;

	first_name? : string;

	last_name? : string;

	username? : string;

	email_address? : string;

	about? : string;

	department? : string;

	faculty? : string;

	level? : string;

	unit? : string;

	country? : string;

	role? : string;

	status? : string;

	created_on? : Date;

	updated_on? : Date;

	matriculation_number? : string;

	jamb_registration_number? : string;

	identity_number? : string;

	profile_photo? : string;

	signature? : string;

	num? : number;

	slug? : string;

}