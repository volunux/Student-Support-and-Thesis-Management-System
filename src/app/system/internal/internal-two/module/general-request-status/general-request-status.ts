export interface GeneralRequestStatus {

	_id : string;

	name? : string;

	created_on : Date;

	updated_on? : Date;

	author? : string;

	abbreviation : string;

	secondaryKey : string;

	num : number;

}

export class GeneralRequestStatusInstance {

	constructor(public _id : string , public name : string , public created_on : Date , 

							public updated_on : Date , public abbreviation : string ,

							public secondaryKey : string , public num : number) {

			this._id = _id || '';

			this.name = name || '';

			this.created_on = created_on || new Date();

			this.updated_on = updated_on || new Date();

			this.abbreviation = abbreviation || '';

			this.secondaryKey = secondaryKey || '';

			this.num = num || 0;
	}

}