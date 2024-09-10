import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  {
    path: '', component: CustomerPortalComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch:'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'order/details/:id', component: OrderDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPortalRoutingModule { }
