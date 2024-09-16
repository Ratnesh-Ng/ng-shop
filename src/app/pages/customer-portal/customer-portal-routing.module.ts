import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: '', component: CustomerPortalComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch:'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'order/details/:id', component: OrderDetailsComponent },
      { path: 'profile', component: AccountDetailsComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPortalRoutingModule { }
