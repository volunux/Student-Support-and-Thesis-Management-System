export interface PaymentStatus {

	_id : string;

	name? : string;

	created_on : Date;

	updated_on? : Date;

	author? : string;

	word : string;

}

export class PaymentStatusInstance {

	constructor(public _id : string , public name : string , public created_on : Date , 

							public updated_on : Date , public word : string ,

							public secondaryKey : string , public num : number) {

			this._id = _id || '';

			this.name = name || '';

			this.created_on = created_on || new Date();

			this.updated_on = updated_on || new Date();

			this.word = word || '';
	}

}