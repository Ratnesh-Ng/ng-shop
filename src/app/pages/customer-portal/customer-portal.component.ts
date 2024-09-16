import { Component } from '@angular/core';
import { logout } from '@core/utils/common.util';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {

  public logout() {
    logout();
  }

}
