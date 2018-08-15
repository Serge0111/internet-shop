import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration-order',
  templateUrl: './registration-order.component.html',
  styleUrls: ['./registration-order.component.sass']
})
export class RegistrationOrderComponent implements OnInit {
  public inValid = true;
  public form: FormGroup;

  public myValidator(formValue) {
    if (formValue.value.length < 3 ) {
      //this.inValid = formValue.dirty;
      console.log(formValue);
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
