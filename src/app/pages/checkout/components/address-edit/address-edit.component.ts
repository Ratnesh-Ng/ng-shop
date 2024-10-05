import { Component, inject, input, OnInit, output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, AddressEditModalEvent, AddressForm, AddressType } from '@app/modals/address';
import { logInvalidControls } from '@core/utils/common.util';
import { postData } from '@core/utils/http.util';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrl: './address-edit.component.scss'
})
export class AddressEditComponent implements OnInit {
  private userService = inject(UserService);
  public onClose = output<AddressEditModalEvent>();
  public addressToUpdate = input<Address>();
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
    if (this.addressToUpdate()) {
      this.addressForm.patchValue(this.addressToUpdate()!);
    }
  }

  public save(): void {
    if (this.addressForm.valid) {
      const formValue = this.addressForm.getRawValue();
      postData(formValue.id ? this.userService.updateAddress(formValue) : this.userService.addAddress(formValue)).then(res => {
        this.onClose.emit({ eventType: 'submit', address: res })
      }).catch(err => console.log(err));
    } else {
      console.warn('Form is invalid', logInvalidControls(this.addressForm));
    }
  }

  public close(): void {
    this.onClose.emit({ eventType: 'close' })
  }
}
