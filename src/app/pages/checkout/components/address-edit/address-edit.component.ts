import { Component, OnInit, output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressEditModalEvent, AddressForm, AddressType } from '@app/modals/address';
import { logInvalidControls } from '@core/utils/common.util';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrl: './address-edit.component.scss'
})
export class AddressEditComponent implements OnInit {

  public onClose = output<AddressEditModalEvent>();
  public addressTypes = AddressType;

  public addressForm: FormGroup<AddressForm> = new FormGroup<AddressForm>({
    id: new FormControl(null),
    email: new FormControl(null),
    userId: new FormControl(null),
    name: new FormControl(null, { validators: [Validators.required] }),
    mobile: new FormControl(null, { validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)] }),
    pinCode: new FormControl(null, { validators: [Validators.required, Validators.pattern(/^[0-9]{6}$/)] }),
    address: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] }),
    locality: new FormControl(null, { validators: [Validators.required] }),
    city: new FormControl(null, { validators: [Validators.required] }),
    state: new FormControl(null, { validators: [Validators.required] }),
    type: new FormControl(null),
    isDefaultAddress: new FormControl(null)
  });

  ngOnInit(): void {
    console.log('first')
  }

  save(): void {
    if (this.addressForm.valid) {
      this.onClose.emit({ eventType: 'submit', address: this.addressForm.getRawValue() })
    } else {
      console.warn('Form is invalid', logInvalidControls(this.addressForm));
    }
  }

  close(): void {
    this.onClose.emit({ eventType: 'close' })
  }
}
