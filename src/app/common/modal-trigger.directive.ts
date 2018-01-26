import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQUERY_TOKEN } from './jquery.service';

@Directive({
	selector : '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
	htmlElement : HTMLElement;
	@Input('modal-trigger')modalId : string;

	constructor(@Inject(JQUERY_TOKEN) private $ : any, private elementRef : ElementRef) {
		this.htmlElement = this.elementRef.nativeElement;
	}

	ngOnInit(): void {
		console.log('Inside ngOnInit', this.$);
		this.htmlElement.addEventListener('click', e => {
			this.$(`#${this.modalId}`).modal({});
			}
		);
	}

}