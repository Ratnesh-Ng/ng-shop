import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckoutComponent } from './checkout.component';
import { CheckoutHeaderComponent } from './components/checkout-header/checkout-header.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { CoreModule } from "../../core/core.module";
import { AddressEditComponent } from './components/address-edit/address-edit.component';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    AddressComponent,
    PaymentComponent,
    CheckoutHeaderComponent,
    CartItemComponent,
    AddressCardComponent,
    AddressEditComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ConfirmDialogModule,
    ButtonModule,
    CoreModule,
    ReactiveFormsModule,
    DialogModule
],
  providers:[ConfirmationService],
  exports:[CartItemComponent]
})
export class CheckoutModule { }
