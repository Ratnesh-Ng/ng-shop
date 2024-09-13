import { Component } from '@angular/core';
import { generateFakeProducts } from '@app/faker/product.faker';
import { CartProductDetails } from '@app/modals/product';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
   public products = generateFakeProducts(2);
   public productDetails: CartProductDetails = new CartProductDetails();

   constructor(){
    this.calculateProductDetails();
   }

   public calculateProductDetails() {
    this.productDetails.totalMrp = this.products.reduce((acc, val) => acc + val.actualPrice, 0);
    this.productDetails.discountOnMrp = this.products.reduce((acc, val) => (acc + (val.actualPrice - val.sellingPrice)), 0);
    this.productDetails.totalAmountToPay = this.productDetails.totalMrp - this.productDetails.discountOnMrp;
    if ((this.productDetails.totalAmountToPay != 0) && (this.productDetails.totalAmountToPay < 500)) {
        this.productDetails.shippingFee = 40;
    } else {
        this.productDetails.shippingFee = 0;
    }
    return this.productDetails;
}
}
