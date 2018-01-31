import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/index';
import { IEvent } from '../index';

@Component({
  selector: 'events-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty : boolean = true;
  
  constructor(private router : Router, private eventService : EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe( (event:IEvent) => {
      console.log('New event saved: ', event);
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
    
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
