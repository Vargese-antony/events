import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'events-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty : boolean = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  canDeactivateCreateEvent() : boolean{
    let canDeactivate = true;
		if(this.isDirty) {
			canDeactivate = window.confirm('The dialog has unsaved changed, do you want to cancel?');
		}
    console.log(canDeactivate);
		return canDeactivate;
	}
}
