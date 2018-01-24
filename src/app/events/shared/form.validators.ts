import { FormControl } from '@angular/forms';

export function validateRestrictedWords(words : string[]) {
	return (control : FormControl) : { [key : string]: string} => {
	if( !words) return null;

	var restrictedWordsFound = words
		.map( w => control.value.includes(w) ? w : null)
		.filter( w => w != null);
	
	return ( restrictedWordsFound && restrictedWordsFound.length > 0 ) ? {'restrictedWords':restrictedWordsFound.join(', ')} : null
	}
}
