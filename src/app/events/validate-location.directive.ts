import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector:'[validateLocation]',
	providers : [
		{ provide : NG_VALIDATORS, useExisting : ValidateLocation, multi : true}
	]
})
export class ValidateLocation implements Validator {
	validate(formsGroup : FormGroup) : { [key : string] : any } {
		let addressControl = formsGroup.controls['address'];
		let cityControl = formsGroup.controls['city'];
		let countryControl = formsGroup.controls['country'];

		let onlineUrlControl = (<FormGroup>formsGroup.root).controls['onlineUrl'];
		if( (addressControl && addressControl.value 
			&& cityControl && cityControl.value 
			&& countryControl && countryControl.value) || 
			( onlineUrlControl && onlineUrlControl.value) 
		) {
			return null;
		} else {
			return { validateLocation : false };
		}
	}
}