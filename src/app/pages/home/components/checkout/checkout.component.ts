import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckoutInterface } from './../../interfaces/checkout-interface'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    'nameControl': new FormControl('', [Validators.required]),
    'surnameControl': new FormControl('', [Validators.required]),
    'lastnameControl': new FormControl('', Validators.required),
    'phoneControl': new FormControl('', [Validators.required]),
    'streetControl': new FormControl('', [Validators.required]),
    'suburbControl': new FormControl('', Validators.required),
    'codPostControl': new FormControl('', [Validators.required]),
    'cityControl': new FormControl('', [Validators.required]),
    'stateControl': new FormControl('', Validators.required),
    'countryControl': new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {value} = this.formGroup;
    const checkoutObject: CheckoutInterface = {
      name: value.nameControl,
      surname: value.surnameControl,
      lastname: value.lastnameControl,
      phone: value.phoneControl,
      street: value.streetControl,
      suburb: value.suburbControl,
      codPost: value.codPostControl,
      city: value.cityControl,
      state: value.stateControl,
      country: value.countryControl,
    }
    console.log(checkoutObject);
  }
}
