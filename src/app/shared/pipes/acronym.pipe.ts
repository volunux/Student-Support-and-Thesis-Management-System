import { Pipe , PipeTransform } from '@angular/core';

@Pipe({

 'name' : 'acronym'

})

export class AcronymPipe implements PipeTransform {

  transform(value : string , ...args : string[]) : string {

  	let acronymText = value.replace(/and/gi , '').split(' ');

  	if (acronymText.length > 1) {

   		return acronymText.map((item) => {	

		   	if (item) {	return item[0];	}	

				else { return '';  } }).join('');	}
		
		else { return acronymText.join(''); }

  }

}
