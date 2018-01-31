import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventDetailsResolverService implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }

  constructor( private eventService : EventService) { }

}