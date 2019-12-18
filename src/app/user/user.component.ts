import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  allowLocationAccess: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      allowLocationAccess: new FormControl(false),
      location: new FormControl()
    });
  }

  save() {

  }

  locateMe() {
    this.userForm.patchValue({
      location: 'Somewhere in Earth'
    });
  }
}
