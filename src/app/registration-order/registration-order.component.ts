import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration-order',
  templateUrl: './registration-order.component.html',
  styleUrls: ['./registration-order.component.sass']
})
export class RegistrationOrderComponent implements OnInit {
  public hide = false;
  public form: FormGroup = this._fb.group({
    firstName: ['name'],
    lastName: ['lastname'],
    email: ['email', [this.myValidator]],
    phone: ['phone']
  });

  public myValidator(formValue) {
    if (formValue.value.length < 3) {
      console.log(formValue);
      return {'no-equal': true};
    } else {
      return null;
    }
  }

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      firstName: ['name'],
      lastName: ['lastname'],
      email: ['email', [this.myValidator]],
      phone: ['phone']
    });
  }

}
