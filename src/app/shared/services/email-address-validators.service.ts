import { AbstractControl , ValidationErrors , ValidatorFn } from '@angular/forms';

export function emailAddressValidator(email_address : RegExp) : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

		const entry = email_address.test(control.value);

		return !entry ? {'email_address' : {'value' : control.value } } : null }
	}
