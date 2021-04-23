export interface Status {

	_id : string;

	name? : string;

	word? : string;

	created_on : Date;

	updated_on? : Date;

	author? : string;

}

export class StatusInstance {

	constructor(public _id : string , public name : string , public created_on : Date , 

							public updated_on : Date , public word : string ,

							public secondaryKey : string , public num : number) {

			this._id = _id || '';

			this.name = name || '';

			this.word = word || '';

			this.created_on = created_on || new Date();

			this.updated_on = updated_on || new Date();

	}

}