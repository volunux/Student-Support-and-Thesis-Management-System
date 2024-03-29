import { Pipe , PipeTransform } from '@angular/core';

@Pipe({

 'name': 'proposedCredential'

})

export class ProposedCredentialPipe implements PipeTransform {

  transform(value: { [key : string] : any } , ...args : string[]) : string {

    return (value.author.full_name).split(' ').join('').toLowerCase();

  }

}
