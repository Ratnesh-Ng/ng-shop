import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    CustomerPortalComponent,
    OrdersComponent,
    AccountDetailsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule
  ]
})
export class CustomerPortalModule { }
