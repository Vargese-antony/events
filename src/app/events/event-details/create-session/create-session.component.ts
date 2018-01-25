import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ISession, validateRestrictedWords } from '../../shared/index';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: []
})
export class CreateSessionComponent implements OnInit {
  sessionName : FormControl;
  presenter : FormControl;
  duration : FormControl;
  level : FormControl;
  abstract : FormControl;

  formCreateSession : FormGroup;

  @Output() saveSessionEvent = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.sessionName = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), validateRestrictedWords(['sam','dom'])]);

    this.formCreateSession = new FormGroup({
      name : this.sessionName,
      presenter : this.presenter,
      duration : this.duration,
      level : this.level,
      abstract : this.abstract
    });
  }

  saveForm(formValues) {
    let session : ISession = {
      id : undefined,
      voters : [],
      name : formValues.name,
      presenter : formValues.presenter,
      duration : +formValues.duration,
      level : formValues.level,
      abstract : formValues.abstract
    }
    this.saveSessionEvent.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
