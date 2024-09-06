import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '', component: CustomerPortalComponent,
    children: [
      { path: 'orders', component: OrdersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPortalRoutingModule { }
