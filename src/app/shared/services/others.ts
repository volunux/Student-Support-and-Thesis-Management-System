export function nullRemover(data) : { [key : string] : any } {

  let entry : { [key : string] : any };

  for (let i in data) {

    if (data[i] == null) {

      data[i] = '';
    }
  }

  entry = data;

  return entry;

}


export function checkFormChanges(entry : { [key : string] : any } , body : { [key : string] : any } , this$) : boolean {

		for (let chrs in entry) {

				if((entry[chrs] != body[chrs] && (body[chrs] !== null && body[chrs] !== undefined && body.hasOwnProperty(chrs) == true))) { 

					this$.isFormModified = true;

					break; } }

     let $$entry = Object.keys(entry);

     let $$$entry = Object.keys(body);

    const found = $$$entry.some((r) => {
      
        if (!($$entry.indexOf(r) > -1)) {

            this$.isFormModified = true; } });

    return this$.isFormModified;
	}