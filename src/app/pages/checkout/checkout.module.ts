import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    AddressComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ConfirmDialogModule
  ],
  providers:[ConfirmationService]
})
export class CheckoutModule { }
