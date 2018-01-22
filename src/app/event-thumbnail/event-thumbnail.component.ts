import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() event: any;

  getCSSClassForTime() {
    if( this.event.time && this.event.time === '8:00 am') {
      return ['green','bold'];
    }
    return [];
  }

  getCSSStyleForTime() : any {
    if( this.event.time && this.event.time === '10:00 am') {
      return {'color':'#ff0000', 'font-weight':'bold'}
    }

    return {};
  }
}
