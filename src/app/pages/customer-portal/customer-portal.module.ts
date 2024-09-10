import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


@NgModule({
  declarations: [
    CustomerPortalComponent,
    OrdersComponent,
    AccountDetailsComponent,
    ChangePasswordComponent,
    DashboardComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule
  ]
})
export class CustomerPortalModule { }
