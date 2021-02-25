export class User$ {

	constructor(public _id? : number , public firstName? : string , public lastName? : string , public username? : string , public emailAddress? : string , public	about? : string,

							public department? : string , public faculty? : string , public level? : string , public unit? : string , public country? : string , public role? : string ,

							public status? : string , public created_on? : Date , public updated_on? : Date , public matriculationNumber? : string , public jambRegistrationNumber? : string ,

							public identityNumber? : string , public profilePhoto? : string , public signature? : string , public num? : number) {


	}

}

export interface User {

	_id? : number;

	firstName? : string;

	lastName? : string;

	username? : string;

	emailAddress? : string;

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

	matriculationNumber? : string;

	jambRegistrationNumber? : string;

	identityNumber? : string;

	profilePhoto? : string;

	signature? : string;

	num? : number;

}