import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteActivatorService implements CanActivate{
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isRouteExist = !!this.eventService.getEvent(+route.paramMap.get('id'));
    if ( !isRouteExist ) {
      //Navigate to 404 page
      this.router.navigate(['/404']);
    }
    return isRouteExist;
  }

  constructor(private eventService : EventService, private router : Router) { }

}
