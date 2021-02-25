import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage' , {

	'providedIn' : 'root' ,

	'factory' : () => { return (typeof window != 'undefined') ? localStorage : null; }

})


export class Storage {
}
