import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckoutComponent } from './checkout.component';
import { CheckoutHeaderComponent } from './components/checkout-header/checkout-header.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    AddressComponent,
    PaymentComponent,
    CheckoutHeaderComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ConfirmDialogModule,
    ButtonModule
  ],
  providers:[ConfirmationService]
})
export class CheckoutModule { }
