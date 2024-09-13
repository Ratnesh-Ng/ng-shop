import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { PortalContainerComponent } from './components/portal-container/portal-container.component';
import { CheckoutModule } from '../checkout/checkout.module';


@NgModule({
  declarations: [
    CustomerPortalComponent,
    OrdersComponent,
    AccountDetailsComponent,
    ChangePasswordComponent,
    DashboardComponent,
    OrderDetailsComponent,
    PortalContainerComponent
  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    CheckoutModule
  ]
})
export class CustomerPortalModule { }
