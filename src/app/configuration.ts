import { InjectionToken } from '@angular/core';

export const Api_Config =

	{'host' : 'http://localhost:4000/api'}

export interface Api {

		host : string;
}

export const Api_Token = new InjectionToken<Api>('app.api.configuration');