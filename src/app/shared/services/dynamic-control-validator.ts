import { ValidatorFn , AbstractControl , ValidationErrors } from '@angular/forms';


export function dynamicDataValidator(entries , name) : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    let data = entries.map((item) => item._id);

    if (typeof data[0] == 'number') { entry = +entry; }

  	return entry != '' && data.indexOf(entry) < 0 ? {[name] : {'value' : entry , 'name' : name} } : null;
	
	}

}