export class UserOther {

	public faculty : string[];

	public department : string[];

	public unit : string[];

	public level : string[];

	public country : string[];

	public status : string[];

	public role : string[];

	constructor(data) {

		this.faculty = data.Faculty != null ? data.Faculty : [];

		this.department = data.Department != null ? data.Department : [];

		this.unit = data.Unit != null ? data.Unit : [];

		this.level = data.Level != null ? data.Level : [];

		this.country = data.Country != null ? data.Country : [];

		this.status = data.Status != null ? data.Status : [];

		this.role = data.Role != null ? data.Role : [];

	}

}
