export interface GeneralRequestComment {

	_id : string;

	created_on : Date;

	updated_on? : Date;

	author? : string;

}

export class GeneralRequestCommentInstance {

	constructor(public _id : string , public name : string , public created_on : Date , 

							public updated_on : Date , public abbreviation : string ,

							public secondaryKey : string , public num : number) {

			this._id = _id || '';

			this.created_on = created_on || new Date();

			this.updated_on = updated_on || new Date();
	}

}