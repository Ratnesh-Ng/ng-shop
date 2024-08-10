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

@NgModule({
  declarations: [
    CartComponent,
    AddressComponent,
    PaymentComponent
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
