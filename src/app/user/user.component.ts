import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  locations: string[];
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  get locations(): FormArray {
    return this.userForm.get('locations') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // Three types of input: Default value; Default Value + state; Default value + validator + async validator
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        confirmEmail: ['', [Validators.required]],
      }, {validator: emailMatcher}),
      allowLocationAccess: false,
      locations: this.formBuilder.array([this.buildLocation()])
    });

    // Watch Validation
    this.userForm.get('allowLocationAccess').valueChanges.subscribe(value => {
      const locationControl = this.userForm.get('locations') as FormArray;
      locationControl.controls.forEach(ctrl => {
        if (value) {
          ctrl.setValidators([Validators.required, Validators.minLength(3)]);
        } else {
          ctrl.clearValidators();
        }
        ctrl.updateValueAndValidity();
      });
    });
  }

  addLocation() {
    this.locations.push(this.buildLocation());
  }

  buildLocation(): FormGroup {
    return this.formBuilder.group({
      location: ''
    });
  }

  save() {
    const user = {...this.userForm.value, email: this.userForm.value.emailGroup.email};
    console.log(user);
  }


  locateMe(i: number) {
    this.locations.get(`${i}.location`).patchValue(`Somewhere on planet A${100 + i}`);
  }
}

function emailMatcher(control: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = control.get('email');
  const confirmEmailControl = control.get('confirmEmail');
  if (emailControl.pristine || confirmEmailControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmEmailControl.value) {
    return null;
  }
  return {match: true};
}
