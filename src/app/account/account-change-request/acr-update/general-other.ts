export class GeneralOther {

	public faculties : string[];

	public departments : string[];

	public units : string[];

	public levels : string[];

	public countries : string[];

	public roles : string[];

	public new_roles : string[];

	public statuses : string[];

	constructor(data) {

		this.faculties = data.Faculty ? data.Faculty : [];

		this.departments = data.Department ? data.Department : [];

		this.units = data.Unit ? data.Unit : [];

		this.levels = data.Level ? data.Level : [];

		this.countries = data.Country ? data.Country : [];

		this.roles = data.Role ? data.Role : [];

		this.new_roles = data.Role ? data.Role : [];

		this.statuses = data.Status ? data.Status : [];

	}

}
