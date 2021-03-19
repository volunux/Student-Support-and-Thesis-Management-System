export function authorizationSettings(opts : { [key : string] : any}) {

	return `https://volunux.github.io/Student-Support-and-Thesis-Management-System/general-payment/t/${opts.pslug}/validation`;

}