import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styles: []
})
export class CollapsibleWellComponent implements OnInit {
  toggle : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.toggle = !this.toggle;
  }
}
