import { Component, OnInit } from '@angular/core';
import { logout, scrollToTop } from '@core/utils/common.util';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent implements OnInit {
 
  ngOnInit(): void {
    scrollToTop();
  }

  public logout() {
    logout();
  }

}
