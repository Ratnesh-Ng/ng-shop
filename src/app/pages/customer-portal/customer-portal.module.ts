import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { PortalContainerComponent } from './components/portal-container/portal-container.component';
import { CheckoutModule } from '../checkout/checkout.module';
import { CoreModule } from "../../core/core.module";
import { OrderCardComponent } from './pages/orders/order-card/order-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerPortalComponent,
    OrdersComponent,
    AccountDetailsComponent,
    DashboardComponent,
    OrderDetailsComponent,
    PortalContainerComponent,
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    CheckoutModule,
    CoreModule,
    ReactiveFormsModule
]
})
export class CustomerPortalModule { }
