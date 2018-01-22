import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventObject = {
    id : 1,
    name : 'Angular Connect',
    date : '1/22/2018',
    time : '11:45 PM',
    price : 80,
    imageUrl : '/assets/images/angularconnect-shield.png',
    location : {
      address : '1080 ABC',
      city : 'New York',
      country : 'USA'
    }
  }
}
