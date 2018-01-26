import { InjectionToken  } from '@angular/core';
/**
 * Interface for typescript intelligence, which has all the methods of toastr library.
 * not needed if the library has more API's 
 */

 export let TOASTR_TOKEN = new InjectionToken('toastr');

export interface Toastr {
  success(message : string, title?:string);
  info(message : string, title?:string);
  warning(message : string, title?:string);
  error(message : string, title?:string);
}
