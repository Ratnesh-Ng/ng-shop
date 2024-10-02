import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsForm } from '@app/modals/user';
import { BaseComponent } from '@core/base/base.component';
import { postData } from '@core/utils/http.util';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent extends BaseComponent implements OnInit {
  public editMode = false;
  public userDetailsForm: FormGroup<UserDetailsForm> = new FormGroup<UserDetailsForm>({
    alternateMobile: new FormControl(null),
    dob: new FormControl(null, { validators: [Validators.required] }),
    email: new FormControl(null, { validators: [Validators.required] }),
    gender: new FormControl(null, { validators: [Validators.required] }),
    id: new FormControl(null, { validators: [Validators.required] }),
    mobile: new FormControl(null, { validators: [Validators.required] }),//TODO mobile number must be unique because we are using it for login purpose
    name: new FormControl(null, { validators: [Validators.required] }),
    profilePicture: new FormControl(null),
    username: new FormControl(null, { validators: [Validators.required] }),
  })

  ngOnInit(): void {
    this.userDetailsForm.patchValue(this.userService.loggedInUser!);
  }

  public editProfile() {
    this.editMode = true;
  }

  public save() {
    if (this.userDetailsForm.valid) {
      postData(this.userService.updateUser(this.userDetailsForm.value)).then((res) => {
        this.userService.loggedInUser = res;
        this.editMode = false;
      }).catch(err => console.log(err));
    } else {
      console.warn('form is invalid')
    }
  }

  public cancel() {
    this.editMode = false;
  }
}
