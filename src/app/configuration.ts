import { InjectionToken } from '@angular/core';

export const Api_Config =

	// {'host' : 'http://localhost:4000/api'};

	{'host' : 'https://fierce-stream-53909.herokuapp.com/api'}

export interface Api {

		host : string;
}

export const Api_Token = new InjectionToken<Api>('app.api.configuration');