import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  {
    path: '', component: CheckoutComponent,
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'address', component: AddressComponent },
      { path: 'payment', component: PaymentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
