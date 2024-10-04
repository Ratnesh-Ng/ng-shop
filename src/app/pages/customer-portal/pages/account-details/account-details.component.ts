import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserDetailsForm } from '@app/modals/user';
import { BaseComponent } from '@core/base/base.component';
import { logInvalidControls, scrollToTop } from '@core/utils/common.util';
import { postData } from '@core/utils/http.util';
import { catchError, delay, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent extends BaseComponent implements OnInit {
  public editMode = false;
  public userDetailsForm: FormGroup<UserDetailsForm> = new FormGroup<UserDetailsForm>({
    // eslint-disable-next-line no-useless-escape
    email: new FormControl(null, { validators: [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/),] }),
    id: new FormControl(null, { validators: [Validators.required] }),
    profilePicture: new FormControl(null),
    name: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    username: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    mobile: new FormControl(null, { validators: [Validators.required, Validators.pattern(/^\d{10}$/),], asyncValidators: [this.phoneNumberValidator()] }),
    alternateMobile: new FormControl(null, { validators: [Validators.pattern(/^\d{10}$/)], asyncValidators: [this.phoneNumberValidator()] }),
    gender: new FormControl(null, { validators: [Validators.required] }),
    dob: new FormControl(null, { validators: [Validators.required] }),
  })

  ngOnInit(): void {
    scrollToTop();
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
      console.warn('form is invalid', logInvalidControls(this.userDetailsForm));
    }
  }

  public cancel() {
    this.editMode = false;
  }

  public phoneNumberValidator(): AsyncValidatorFn {
    const invalidNumber = { invalidNumber: 'This phone number is already registered.' }
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null); // If the control is empty, return no error
      }
      return of(control.value).pipe(
        delay(300), // Wait for 300ms pause in events
        switchMap(value => {
          return this.userService.validateMobileNumber(value).pipe(
            map(users => {
              return users.length > 0 ? { invalidNumber } : null;
            }),
            catchError(() => of({ invalidNumber }))
          );
        })
      );
    };
  }
}
