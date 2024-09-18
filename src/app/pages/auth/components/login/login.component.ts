import { Component } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent {
  mobileNumber = "";
  enteredOTP = "";
  showOtp: boolean = false

  public login(){
    this.showOtp = true;
  }

  public validateOtp(){
    console.log(this.enteredOTP);
    this.router.navigateByUrl(this.appRoutes.home);
  }
}
