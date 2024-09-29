import { Component } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { postData } from '@core/utils/http.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent {
  private requiredOtp = '';
  public mobileNumber = "";
  public enteredOTP = "";
  public showOtp: boolean = false

  public getOtp() {
    postData(this.userService.getOtp(this.mobileNumber)).then((otp) => {
      console.log(otp);
      this.requiredOtp = otp;
      this.showOtp = true;
    });
  }

  public validateOtp() {
    postData(this.userService.validateOtp({ enteredOtp: this.enteredOTP, requiredOtp: this.requiredOtp, mobile: this.mobileNumber })).then((res) => {
      if (res) {
        this.router.navigateByUrl(this.appRoutes.home);
      } else {
        console.warn('otp is not valid')
      }
    });
  }
}
